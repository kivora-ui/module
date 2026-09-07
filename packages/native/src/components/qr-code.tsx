import * as React from 'react';
import { type View } from 'react-native';
import { Barcode, type BarcodeProps } from './barcode';

export interface QRCodeProps extends Omit<BarcodeProps, 'format' | 'width' | 'height'> {
  size?: number;
}
export const QRCode: React.ForwardRefExoticComponent<QRCodeProps & React.RefAttributes<React.ComponentRef<typeof View>>> = React.forwardRef<React.ComponentRef<typeof View>, QRCodeProps>(({ size = 200, ...props }, ref) => (
  <Barcode {...props} ref={ref} format="qrcode" width={size} height={size} />
));
QRCode.displayName = 'QRCode';
