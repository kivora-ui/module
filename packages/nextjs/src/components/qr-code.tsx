"use client";

import * as React from 'react';
import { Barcode, type BarcodeProps } from './barcode';

export interface QRCodeProps extends Omit<BarcodeProps, 'format' | 'width' | 'height'> {
  size?: number;
}
export const QRCode = React.forwardRef<HTMLDivElement, QRCodeProps>(({ size = 200, ...props }, ref) => (
  <Barcode {...props} ref={ref} format="qrcode" width={size} height={size} />
));
QRCode.displayName = 'QRCode';
