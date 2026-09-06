import Prism from "prismjs";
import "prismjs/components/prism-json";
import "prismjs/components/prism-typescript";
import "prismjs/components/prism-jsx";
import "prismjs/components/prism-tsx";
import "prismjs/components/prism-python";
import "prismjs/components/prism-bash";
import "prismjs/components/prism-sql";

export interface CodeToken { text: string; type?: string }
export function codeLines(source: string, language: string): CodeToken[][] {
  const grammar = Prism.languages[language.toLowerCase()];
  const lines: CodeToken[][] = [[]];
  const visit = (token: string | Prism.Token | Array<string | Prism.Token>, type?: string) => {
    if (Array.isArray(token)) { token.forEach(part => visit(part, type)); return; }
    if (typeof token !== "string") { visit(token.content, token.type); return; }
    token.split("\n").forEach((text, index) => {
      if (index) lines.push([]);
      if (text) lines[lines.length - 1]!.push({ text, type });
    });
  };
  visit(grammar ? Prism.tokenize(source, grammar) : source);
  return lines;
}
