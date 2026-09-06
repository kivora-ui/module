import ts from 'typescript';

export function parse(text, file = 'config.tsx') {
  const source = ts.createSourceFile(file, text, ts.ScriptTarget.Latest, true, /\.[cm]?tsx?$/.test(file) ? undefined : ts.ScriptKind.JSX);
  if (source.parseDiagnostics.length) throw new Error(`${file}: sintaxis no reconocida; no se modificará.`);
  return source;
}

function unwrap(node) {
  while (node && (ts.isAsExpression(node) || ts.isSatisfiesExpression(node) || ts.isParenthesizedExpression(node))) node = node.expression;
  return node;
}

export function exported(text) {
  const source = parse(text);
  const exports = source.statements.flatMap(s => {
    if (ts.isExportAssignment(s) && !s.isExportEquals) return [s.expression];
    if (ts.isExpressionStatement(s) && ts.isBinaryExpression(s.expression) && s.expression.left.getText(source) === 'module.exports' && s.expression.operatorToken.kind === ts.SyntaxKind.EqualsToken) return [s.expression.right];
    return [];
  });
  if (exports.length !== 1) throw new Error('Se necesita una única exportación de configuración.');
  let node = unwrap(exports[0]);
  if (ts.isIdentifier(node)) {
    const name = node.text;
    const declarations = source.statements.filter(ts.isVariableStatement).flatMap(s => [...s.declarationList.declarations]);
    node = unwrap(declarations.find(d => d.name.getText(source) === name)?.initializer);
  }
  if (!node || !ts.isObjectLiteralExpression(node)) throw new Error('Configuración dinámica: adapta el archivo manualmente antes de repetir init.');
  return { source, node };
}

function property(node, name) {
  if (node.properties.some(p => ts.isSpreadAssignment(p) || !p.name || ts.isComputedPropertyName(p.name))) throw new Error('Configuración con spreads o propiedades calculadas: requiere revisión manual.');
  const found = node.properties.filter(p => (p.name.text ?? p.name.getText()) === name);
  if (found.length > 1 || (found[0] && !ts.isPropertyAssignment(found[0]))) throw new Error(`Propiedad ${name} no estática.`);
  return found[0];
}

export function setConfig(text, path, value) {
  const { node } = exported(text);
  function edit(object, index) {
    const prop = property(object, path[index]);
    if (index === path.length - 1) {
      const replacement = value(prop?.initializer, text);
      if (prop) return text.slice(0, prop.initializer.getStart()) + replacement + text.slice(prop.initializer.end);
      const at = object.getStart() + 1;
      return text.slice(0, at) + `\n  ${JSON.stringify(path[index])}: ${replacement},` + text.slice(at);
    }
    if (!prop) return setConfig(text, path.slice(0, index + 1), () => `{ ${JSON.stringify(path[index + 1])}: ${nest(index + 2)} }`);
    if (!ts.isObjectLiteralExpression(prop.initializer)) throw new Error(`${path.slice(0, index + 1).join('.')}: se necesita un objeto literal.`);
    return edit(prop.initializer, index + 1);
  }
  function nest(index) {
    return index === path.length ? value(undefined, text) : `{ ${JSON.stringify(path[index])}: ${nest(index + 1)} }`;
  }
  return edit(node, 0);
}

export function arrayWith(values) {
  return node => {
    if (node && (!ts.isArrayLiteralExpression(node) || node.elements.some(ts.isSpreadElement))) throw new Error('Se necesita un array literal sin spreads.');
    const current = node ? node.elements.map(e => e.getText()) : [];
    for (const value of values) {
      if (!current.some(e => e.replaceAll('"', "'") === value.replaceAll('"', "'"))) current.push(value);
    }
    return `[${current.join(', ')}]`;
  };
}

export function babelConfig(text) {
  text = setConfig(text, ['presets'], node => {
    if (!node || !ts.isArrayLiteralExpression(node)) throw new Error('Babel: se necesita presets como array literal.');
    let found = false;
    const presets = node.elements.map(e => {
      const name = ts.isStringLiteral(e) ? e.text : ts.isArrayLiteralExpression(e) && ts.isStringLiteral(e.elements[0]) ? e.elements[0].text : null;
      if (!name) throw new Error('Babel: preset dinámico no soportado.');
      if (name !== 'module:@react-native/babel-preset') return e.getText();
      found = true;
      let options = ts.isArrayLiteralExpression(e) ? e.elements[1] : undefined;
      if (options && !ts.isObjectLiteralExpression(options)) throw new Error('Babel: opciones dinámicas.');
      const existing = options && property(options, 'jsxImportSource');
      if (existing && existing.initializer.getText().replaceAll('"', "'") !== "'nativewind'") throw new Error('Babel ya utiliza otro jsxImportSource.');
      return `[${JSON.stringify(name)}, ${existing ? options.getText() : options ? options.getText().replace('{', "{ jsxImportSource: 'nativewind',") : "{ jsxImportSource: 'nativewind' }"}]`;
    });
    if (!found) throw new Error('No se encontró module:@react-native/babel-preset.');
    if (!presets.some(p => p === "'nativewind/babel'" || p === '"nativewind/babel"')) presets.push("'nativewind/babel'");
    return `[${presets.join(', ')}]`;
  });
  return setConfig(text, ['plugins'], node => {
    if (node && !ts.isArrayLiteralExpression(node)) throw new Error('Babel: plugins dinámicos.');
    const plugins = node ? [...node.elements] : [];
    const name = p => ts.isStringLiteral(p) ? p.text : ts.isArrayLiteralExpression(p) && p.elements[0] && ts.isStringLiteral(p.elements[0]) ? p.elements[0].text : undefined;
    if (plugins.some(p => !name(p))) throw new Error('Babel: plugins dinámicos.');
    if (plugins.some(p => name(p) === 'react-native-reanimated/plugin')) throw new Error('Babel tiene el plugin de Reanimated 3; no se migra automáticamente.');
    const worklets = plugins.filter(p => name(p) === 'react-native-worklets/plugin');
    if (worklets.length > 1) throw new Error('Babel: plugin Worklets duplicado.');
    return `[${[...plugins.filter(p => name(p) !== 'react-native-worklets/plugin').map(p => p.getText()), worklets[0]?.getText() ?? "'react-native-worklets/plugin'"].join(', ')}]`;
  });
}

// Restrict edits to the default component, never nested render callbacks.
export function wrapEntry(text, file, mode, importPath) {
  const source = parse(text, file);
  if (source.statements.some(s => ts.isImportDeclaration(s) && s.moduleSpecifier.text === importPath)) {
    if (text.includes('<KivoraRoot>')) return text;
    throw new Error(`${file}: el import de KivoraRoot ya existe; revisa su montaje.`);
  }
  if (/\bKivoraRoot\b|\bKivoraProvider\b/.test(text)) throw new Error(`${file}: ya tiene un provider o un identificador KivoraRoot; revisa la integración existente.`);
  const edits = [];
  if (mode === 'app') {
    const bodies = [];
    function visit(n) {
      if (ts.isJsxElement(n) && n.openingElement.tagName.getText(source) === 'body') bodies.push(n);
      ts.forEachChild(n, visit);
    }
    visit(source);
    if (bodies.length !== 1) throw new Error(`${file}: no se encontró un único <body>.`);
    edits.push([bodies[0].openingElement.end, bodies[0].openingElement.end, '<KivoraRoot>'], [bodies[0].closingElement.getStart(source), bodies[0].closingElement.getStart(source), '</KivoraRoot>']);
  } else {
    let component = source.statements.find(s => ts.isFunctionDeclaration(s) && s.modifiers?.some(m => m.kind === ts.SyntaxKind.DefaultKeyword));
    if (!component) {
      const exp = source.statements.find(ts.isExportAssignment)?.expression;
      if (exp && ts.isIdentifier(exp)) {
        component = source.statements.find(s => ts.isFunctionDeclaration(s) && s.name?.text === exp.text);
        component ??= source.statements.filter(ts.isVariableStatement).flatMap(s => [...s.declarationList.declarations]).find(d => d.name.getText(source) === exp.text)?.initializer;
      } else component = exp;
    }
    if (!component || !(ts.isFunctionDeclaration(component) || ts.isArrowFunction(component) || ts.isFunctionExpression(component))) throw new Error(`${file}: componente por defecto no soportado.`);
    function add(expr) { edits.push([expr.getStart(source), expr.end, `<KivoraRoot>{${expr.getText(source)}}</KivoraRoot>`]); }
    if (!component.body) throw new Error(`${file}: componente sin cuerpo.`);
    if (!ts.isBlock(component.body)) add(component.body);
    else {
      function visit(n) {
        if (ts.isFunctionLike(n)) return;
        if (ts.isReturnStatement(n) && n.expression) add(n.expression);
        else ts.forEachChild(n, visit);
      }
      visit(component.body);
    }
    if (!edits.length) throw new Error(`${file}: no se encontró el render del componente.`);
  }
  for (const [start, end, replacement] of edits.sort((a, b) => b[0] - a[0])) text = text.slice(0, start) + replacement + text.slice(end);
  const imports = source.statements.filter(ts.isImportDeclaration);
  const directives = source.statements.filter(s => ts.isExpressionStatement(s) && ts.isStringLiteral(s.expression));
  const at = imports.at(-1)?.end ?? directives.at(-1)?.end ?? 0;
  text = text.slice(0, at) + `\nimport KivoraRoot from '${importPath}';\n` + text.slice(at);
  parse(text, file);
  return text;
}
