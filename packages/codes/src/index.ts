import {
  qrcode, code128, code39, ean13, ean8, upca, interleaved2of5,
  datamatrix, pdf417, azteccode, drawingSVG, type RenderOptions,
} from '@bwip-js/generic';

const encoders = { qrcode, code128, code39, ean13, ean8, upca, interleaved2of5, datamatrix, pdf417, azteccode };
export type BarcodeFormat = keyof typeof encoders;
export type QRErrorCorrectionLevel = 'L' | 'M' | 'Q' | 'H';
export const barcodeFormats = Object.freeze(Object.keys(encoders) as BarcodeFormat[]);

export interface CodeOptions {
  /** Exact content to encode. Leading zeroes and whitespace are preserved. */
  value: string;
  /** Defaults to code128. */
  format?: BarcodeFormat;
  /** Opaque #RRGGBB colors. Defaults to black on white, independent of theme. */
  foreground?: string;
  background?: string;
  /** Quiet zone in unscaled SVG units. Minimum 4 for QR, 10 for linear codes. */
  margin?: number;
  /** QR error correction. Defaults to M. Ignored for other formats. */
  errorCorrectionLevel?: QRErrorCorrectionLevel;
}

export interface GeneratedCode {
  svg: string;
  width: number;
  height: number;
  format: BarcodeFormat;
}

const linear = new Set<BarcodeFormat>(['code128', 'code39', 'ean13', 'ean8', 'upca', 'interleaved2of5']);
function color(value: string, name: string) {
  if (!/^#[0-9a-f]{6}$/i.test(value)) throw new Error(`${name} must be an opaque #RRGGBB color.`);
  return value.slice(1);
}

/** Generate an SVG locally. Throws on invalid content; never substitutes or truncates values. */
export function generateCode({
  value, format = 'code128', foreground = '#000000', background = '#ffffff',
  margin, errorCorrectionLevel = 'M',
}: CodeOptions): GeneratedCode {
  if (!Object.hasOwn(encoders, format)) throw new Error('Unsupported barcode format.');
  if (typeof value !== 'string' || value.length === 0) throw new Error('A non-empty value is required.');
  // Bound synchronous work on the UI thread. Individual encoders have stricter capacity limits.
  if (value.length > 4096 || (linear.has(format) && value.length > 256)) throw new Error('Value exceeds the supported length.');
  const minimum = linear.has(format) ? 10 : 4;
  const padding = margin ?? minimum;
  if (!Number.isInteger(padding) || padding < minimum || padding > 100) throw new Error(`Margin must be an integer between ${minimum} and 100.`);
  if (!['L', 'M', 'Q', 'H'].includes(errorCorrectionLevel)) throw new Error('Invalid QR error correction level.');
  const retailLength = { ean13: 13, ean8: 8, upca: 12 }[format as 'ean13' | 'ean8' | 'upca'];
  if (retailLength && (!/^\d+$/.test(value) || value.length !== retailLength)) throw new Error(`${format} requires exactly ${retailLength} digits, including the check digit.`);
  const barcolor = color(foreground, 'Foreground');
  const backgroundcolor = color(background, 'Background');
  if (barcolor.toLowerCase() === backgroundcolor.toLowerCase()) throw new Error('Foreground and background must differ.');
  const options: RenderOptions & { eclevel?: string } = {
    bcid: format, text: value, scale: 1, padding, barcolor, backgroundcolor,
    includetext: false, ...(linear.has(format) ? { height: 18 } : {}),
    ...(format === 'qrcode' ? { eclevel: errorCorrectionLevel } : {}),
  };
  let svg: string;
  try { svg = encoders[format](options, drawingSVG()); }
  catch { throw new Error(`The value cannot be encoded as ${format}. Check its characters, length, and check digit.`); }
  const bounds = /viewBox="0 0 ([\d.]+) ([\d.]+)"/.exec(svg);
  if (!bounds) throw new Error('The encoder returned an invalid SVG.');
  return { svg, width: Number(bounds[1]), height: Number(bounds[2]), format };
}

export type CodeResult = { code: GeneratedCode; error?: never } | { code?: never; error: Error };
export function tryGenerateCode(options: CodeOptions): CodeResult {
  try { return { code: generateCode(options) }; }
  catch (error) { return { error: error instanceof Error ? error : new Error('Unable to generate code.') }; }
}
