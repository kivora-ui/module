import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { QRCode } from './qr-code';
import { Barcode } from './barcode';

describe('generated code components', () => {
  it('updates the encoded SVG when the value changes and forwards the ref', () => {
    const ref = React.createRef<HTMLDivElement>();
    const { rerender } = render(<QRCode value="first" size={180} ref={ref} />);
    const initial = screen.getByRole('img').getAttribute('src');
    expect(screen.getByRole('img')).toHaveAttribute('width', '180');
    expect(ref.current).toContainElement(screen.getByRole('img'));
    rerender(<QRCode value="second" size={180} ref={ref} />);
    expect(screen.getByRole('img').getAttribute('src')).not.toBe(initial);
  });
  it('removes an old code for invalid input and recovers on valid input', () => {
    const onError = vi.fn();
    const { rerender } = render(<Barcode value="5901234123457" format="ean13" onError={onError} />);
    rerender(<Barcode value="bad" format="ean13" onError={onError} />);
    expect(screen.queryByRole('img')).toBeNull();
    expect(screen.getByRole('alert')).toBeInTheDocument();
    expect(onError).toHaveBeenCalledOnce();
    rerender(<Barcode value="5901234123457" format="ean13" onError={onError} displayValue />);
    expect(screen.getByRole('img')).toBeInTheDocument();
    expect(screen.getByText('5901234123457')).toBeInTheDocument();
  });
  it('renders a custom fallback without a broken image', () => {
    render(<QRCode value="" fallback={<span>Enter a value</span>} />);
    expect(screen.getByText('Enter a value')).toBeInTheDocument();
    expect(screen.queryByRole('img')).toBeNull();
  });
});
