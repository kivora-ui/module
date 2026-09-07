import * as React from 'react';
import { View, Text, type ViewProps } from 'react-native';
import { SvgXml } from 'react-native-svg';
import { tryGenerateCode, type CodeOptions } from '@kivora/codes';

export interface BarcodeProps extends Omit<ViewProps, 'children'>, CodeOptions {
  width?: number;
  height?: number;
  displayValue?: boolean;
  fallback?: React.ReactNode;
  onError?: (error: Error) => void;
}

export const Barcode: React.ForwardRefExoticComponent<BarcodeProps & React.RefAttributes<React.ComponentRef<typeof View>>> = React.forwardRef<React.ComponentRef<typeof View>, BarcodeProps>(({
  value, format = 'code128', foreground, background, margin, errorCorrectionLevel,
  width = 280, height, displayValue = false, fallback, onError, ...props
}, ref) => {
  const result = React.useMemo(() => tryGenerateCode({ value, format, foreground, background, margin, errorCorrectionLevel }),
    [value, format, foreground, background, margin, errorCorrectionLevel]);
  React.useEffect(() => { if (result.error) onError?.(result.error); }, [result, onError]);
  return (
    <View ref={ref} {...props}>
      {result.code ? <>
        <SvgXml
          xml={result.code.svg}
          width={width}
          height={height ?? width * result.code.height / result.code.width}
          accessibilityRole="image"
          accessibilityLabel={`${format} code`}
        />
        {displayValue && <Text className="text-foreground">{value}</Text>}
      </> : fallback !== undefined ? fallback : <Text accessibilityRole="alert" className="text-destructive">{result.error.message}</Text>}
    </View>
  );
});
Barcode.displayName = 'Barcode';
