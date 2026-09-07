import { describe, expect, it } from 'vitest';
import sharp from 'sharp';
import { MultiFormatReader, BinaryBitmap, HybridBinarizer, RGBLuminanceSource, DecodeHintType, BarcodeFormat as ZXFormat } from '@zxing/library';
import { generateCode, tryGenerateCode, type BarcodeFormat } from './index';

const samples: [BarcodeFormat, string, ZXFormat][] = [
  ['qrcode', 'https://example.com/?text=café&value=123', ZXFormat.QR_CODE],
  ['code128', 'KIVORA-12345', ZXFormat.CODE_128],
  ['code39', 'KIVORA-12345', ZXFormat.CODE_39],
  ['ean13', '5901234123457', ZXFormat.EAN_13],
  ['ean8', '96385074', ZXFormat.EAN_8],
  ['upca', '012345678905', ZXFormat.UPC_A],
  ['interleaved2of5', '12345678', ZXFormat.ITF],
  ['datamatrix', 'KIVORA-12345', ZXFormat.DATA_MATRIX],
  ['pdf417', 'KIVORA-12345', ZXFormat.PDF_417],
  ['azteccode', 'KIVORA-12345', ZXFormat.AZTEC],
];

describe('independent scanner round trips', () => {
  it.each(samples)('decodes %s back to the original value', async (format, value, scannerFormat) => {
    const code = generateCode({ value, format });
    const { data, info } = await sharp(Buffer.from(code.svg), { density: 288 }).flatten({ background: '#fff' }).greyscale().raw().toBuffer({ resolveWithObject: true });
    const bitmap = new BinaryBitmap(new HybridBinarizer(new RGBLuminanceSource(new Uint8ClampedArray(data), info.width, info.height)));
    const reader = new MultiFormatReader();
    const hints = new Map();
    hints.set(DecodeHintType.POSSIBLE_FORMATS, [scannerFormat]);
    hints.set(DecodeHintType.TRY_HARDER, true);
    expect(reader.decode(bitmap, hints).getText()).toBe(value);
  });
});

it.each(['L', 'M', 'Q', 'H'] as const)('supports QR correction %s', errorCorrectionLevel => {
  expect(generateCode({ value: 'Kivora', format: 'qrcode', errorCorrectionLevel }).svg).toContain('<svg');
});

it('preserves leading zeroes and rejects invalid checksums and formats', () => {
  expect(() => generateCode({ value: '5901234123458', format: 'ean13' })).toThrow();
  expect(() => generateCode({ value: '123', format: 'ean8' })).toThrow();
  expect(() => generateCode({ value: 'abc', format: 'code39' })).toThrow();
  expect(() => generateCode({ value: '', format: 'qrcode' })).toThrow();
  expect(() => generateCode({ value: '123', format: 'constructor' as BarcodeFormat })).toThrow();
});

it('validates quiet zones, bounds synchronous work and rejects SVG color injection', () => {
  expect(() => generateCode({ value: 'test', format: 'qrcode', margin: 0 })).toThrow();
  expect(() => generateCode({ value: 'test', margin: NaN })).toThrow();
  expect(() => generateCode({ value: 'test', foreground: '#000000" onload="alert(1)' })).toThrow();
  expect(() => generateCode({ value: 'test', foreground: '#FFFFFF' })).toThrow();
  expect(() => generateCode({ value: 'x'.repeat(5000), format: 'qrcode' })).toThrow();
  expect(generateCode({ value: '<script>alert(1)</script>', format: 'qrcode' }).svg).not.toContain('<script>');
});

it('reports invalid input without throwing in the UI helper', () => {
  expect(tryGenerateCode({ value: '' }).error).toBeInstanceOf(Error);
  expect(tryGenerateCode({ value: 'valid' }).code).toBeDefined();
});
