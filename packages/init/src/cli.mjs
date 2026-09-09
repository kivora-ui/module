#!/usr/bin/env node
import { parseArgs } from 'node:util';
import { createInterface } from 'node:readline/promises';
import { inspectProject, detectFramework, createPlan, installCommands, applyPlan } from './project.mjs';

const help = `Uso: npx @kivora/init [opciones]

Configura una aplicación existente sin sustituir sus versiones ni configuraciones incompatibles.

  --cwd <ruta>                 Directorio de la aplicación (por defecto: actual)
  --framework nextjs|native     Elegir plataforma si no se puede autodetectar
  --package-manager npm|pnpm|yarn|bun
  --dry-run                    Mostrar comandos y contenido de los cambios sin escribir
  --skip-install               Preparar archivos sin instalar dependencias
  --yes, -y                    Aplicar el plan sin confirmación interactiva
  --help, -h                   Mostrar esta ayuda

Next.js: App Router y Pages Router, Tailwind 4.1.
Native: Community CLI, React Native 0.85.3 (Reanimated 4.3) o 0.87.1 (Reanimated 4.6); NativeWind 4.
Las configuraciones dinámicas o incompatibles se rechazan antes de escribir.
`;

async function main() {
  const { values } = parseArgs({ options: {
    cwd: { type: 'string' }, framework: { type: 'string' }, 'package-manager': { type: 'string' },
    'dry-run': { type: 'boolean' }, 'skip-install': { type: 'boolean' },
    yes: { type: 'boolean', short: 'y' }, help: { type: 'boolean', short: 'h' },
  }, allowPositionals: false });
  if (values.help) { console.log(help); return; }
  if (values.framework && !['nextjs', 'native'].includes(values.framework)) throw new Error('--framework debe ser nextjs o native.');
  if (values['package-manager'] && !['npm', 'pnpm', 'yarn', 'bun'].includes(values['package-manager'])) throw new Error('Gestor inválido: npm, pnpm, yarn o bun.');
  const { root, pkg } = inspectProject(values.cwd ?? process.cwd());
  let framework = values.framework ?? detectFramework(pkg);
  let rl;
  const ask = async question => {
    if (!process.stdin.isTTY || !process.stdout.isTTY) throw new Error('Sin terminal interactivo: especifica --framework y --yes (o --dry-run).');
    rl ??= createInterface({ input: process.stdin, output: process.stdout });
    return (await rl.question(question)).trim().toLowerCase();
  };
  try {
    while (!framework) {
      const answer = await ask('No se detectó una plataforma única. ¿Next.js o Native? [nextjs/native]: ');
      if (['nextjs', 'native'].includes(answer)) framework = answer;
    }
    const plan = createPlan(root, framework, values['package-manager']);
    console.log(`\nKivora · ${framework} · ${plan.manager.name}\nProyecto: ${root}`);
    for (const [file, { before, after }] of plan.files) {
      console.log(`  ${before === null ? 'Crear' : 'Modificar'} ${file}`);
      if (values['dry-run']) console.log(`\n--- ${file} (actual)\n${before ?? '(no existe)'}\n+++ ${file} (propuesto)\n${after}`);
    }
    const commands = installCommands(plan);
    for (const { command, args } of commands) console.log(`  ${values['skip-install'] ? 'Pendiente' : 'Instalar'}: ${command} ${args.join(' ')}`);
    for (const note of plan.notes) console.log(`  Nota: ${note}`);
    if (values['dry-run']) { console.log('\nVista previa: no se han escrito archivos ni instalado dependencias.'); return; }
    if (!plan.files.size && !commands.length) { console.log('\nKivora ya está configurado.'); return; }
    if (!values.yes && !['s', 'si', 'sí', 'y', 'yes'].includes(await ask('\n¿Aplicar estos cambios? [s/N]: '))) { console.log('Cancelado sin cambios.'); return; }
    const backup = await applyPlan(plan, { install: !values['skip-install'] });
    console.log(`\n${values['skip-install'] ? 'Configuración escrita. Ejecuta los comandos pendientes para instalar las dependencias.' : 'Configuración e instalación completadas.'}`);
    if (backup) console.log(`Copias de seguridad: ${backup}`);
    console.log('Revisa los cambios y ejecuta la compilación de tu aplicación.');
  } finally { rl?.close(); }
}

main().catch(error => { console.error(`\nKivora init: ${error.message}`); process.exitCode = 1; });
