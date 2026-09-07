"use client";

import * as React from 'react';
import { tryGenerateCode, type CodeOptions } from '@kivora/codes';

export interface BarcodeProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onError' | 'children'>, CodeOptions {
  width?: number;
  height?: number;
  displayValue?: boolean;
  fallback?: React.ReactNode;
  onError?: (error: Error) => void;
}

export const Barcode = React.forwardRef<HTMLDivElement, BarcodeProps>(({
  value, format = 'code128', foreground, background, margin, errorCorrectionLevel,
  width = 280, height, displayValue = false, fallback, onError, ...props
}, ref) => {
  const result = React.useMemo(() => tryGenerateCode({ value, format, foreground, background, margin, errorCorrectionLevel }),
    [value, format, foreground, background, margin, errorCorrectionLevel]);
  React.useEffect(() => { if (result.error) onError?.(result.error); }, [result, onError]);
  return (
    <div ref={ref} {...props}>
      {result.code ? <>
        <img
          src={`data:image/svg+xml;charset=utf-8,${encodeURIComponent(result.code.svg)}`}
          alt={`${format} code`}
          width={width}
          height={height ?? width * result.code.height / result.code.width}
          style={{ display: 'block', maxWidth: '100%', objectFit: 'contain' }}
        />
        {displayValue && <div style={{ overflowWrap: 'anywhere' }}>{value}</div>}
      </> : fallback !== undefined ? fallback : <span role="alert">{result.error.message}</span>}
    </div>
  );
});
Barcode.displayName = 'Barcode';
