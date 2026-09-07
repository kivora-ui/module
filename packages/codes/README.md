# @kivora/codes

Generate QR codes and barcodes as SVG locally, without React, a browser, or a remote service. Shared by [@kivora/nextjs](https://www.npmjs.com/package/@kivora/nextjs) and [@kivora/native](https://www.npmjs.com/package/@kivora/native).

## Installation

```sh
npm install @kivora/codes
```

The UI packages install this dependency automatically. Install it directly when importing its functions separately.

## Usage

```ts
import { generateCode } from '@kivora/codes';

const { svg, width, height } = generateCode({
  value: 'https://example.com',
  format: 'qrcode',
  errorCorrectionLevel: 'M',
});
```

The result is a complete SVG document for saving, printing, or rendering. Generation is synchronous and local. No content is uploaded and no tracking links are added. Camera scanning is not included.

## Formats

| `format` | Input / typical use |
| --- | --- |
| `qrcode` | Links and text, including Unicode |
| `code128` (default) | Alphanumeric inventory identifiers |
| `code39` | Uppercase identifiers using the Code 39 character set |
| `ean13` | Exactly 13 digits, including a valid check digit |
| `ean8` | Exactly 8 digits, including a valid check digit |
| `upca` | Exactly 12 digits, including a valid check digit |
| `interleaved2of5` | Numeric identifiers with an even number of digits |
| `datamatrix` | Compact two-dimensional labels |
| `pdf417` | Stacked two-dimensional codes |
| `azteccode` | Two-dimensional codes often used on tickets |

Keep values as strings to preserve leading zeroes. Generating a retail code does not assign an official product identifier. GS1 application-identifier parsing and GS1-specific symbols are not included.

## Options and errors

- `value`: required, non-empty string; never trimmed or truncated.
- `format`: one of the exported read-only `barcodeFormats`.
- `foreground` / `background`: opaque `#RRGGBB` colors, black on white by default. Maintain strong contrast.
- `margin`: quiet zone in unscaled SVG units, minimum/default 10 for linear codes and 4 for two-dimensional codes. Maximum: 100.
- `errorCorrectionLevel`: `L`, `M`, `Q`, or `H` for QR, default `M`. Ignored for other formats.

`generateCode` throws on invalid input. `tryGenerateCode` returns either `{ code }` or `{ error }`. Values are limited to 256 characters for linear codes and 4,096 for two-dimensional codes to bound synchronous work. Individual formats and correction levels can impose lower limits.

Preserve the quiet zone and aspect ratio, choose a large enough display or print size, and test with your intended scanners after resizing or changing colors.

## Engine

Uses selected encoders from [bwip-js](https://github.com/metafloor/bwip-js), bundled for ESM and CommonJS. Its license is included in `dist/LICENSE.bwip-js`. Tests rasterize the SVGs and decode all ten formats using an independent ZXing reader.
