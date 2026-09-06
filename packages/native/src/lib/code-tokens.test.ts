import { describe, expect, it } from "vitest";
import { codeLines } from "./code-tokens";

describe("native code highlighting", () => {
  it("preserves whitespace and multiline tokens without inserting HTML", () => {
    const source = '/* first\n second */\nconst element = <View title="hola" />;\n';
    const lines = codeLines(source, "tsx");
    expect(lines.map(line => line.map(token => token.text).join("")).join("\n")).toBe(source);
    expect(lines[0]![0]!.type).toBe("comment");
    expect(lines[1]![0]!.type).toBe("comment");
    expect(lines.flat().some(token => token.type === "keyword")).toBe(true);
  });
  it("highlights JSON keys, strings and numbers", () => {
    const tokens = codeLines('{"stock": 24, "name": "Gasas"}', "json").flat();
    expect(tokens.find(token => token.text === '"stock"')?.type).toBe("property");
    expect(tokens.find(token => token.text === "24")?.type).toBe("number");
    expect(tokens.find(token => token.text === '"Gasas"')?.type).toBe("string");
  });
  it("keeps unknown languages readable as plain text", () => {
    expect(codeLines("<unknown>\n", "unknown")).toEqual([[{ text: "<unknown>", type: undefined }], []]);
  });
});
