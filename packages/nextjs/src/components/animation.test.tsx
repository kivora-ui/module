import * as React from 'react';
import { afterEach, expect, it } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';
import { renderToString } from 'react-dom/server';
import { Animation, AnimatedText, AnimatedPath, AnimatedLoader } from './animation';
afterEach(cleanup);
it('keeps a complete accessible phrase and preserves whitespace', () => {
  const { container } = render(<AnimatedText disabled split="characters">Hola  mundo</AnimatedText>);
  expect(screen.getByText('Hola mundo')).toBeTruthy();
  expect(container.querySelector('[aria-hidden="true"]')?.textContent).toBe('Hola  mundo');
  expect(container.querySelector('[aria-hidden="true"]')).toBeTruthy();
});
it('renders static visible content on the server', () => {
  const html = renderToString(<Animation><AnimatedText>Hola</AnimatedText></Animation>);
  expect(html).toContain('opacity:1');
  expect(html).not.toContain('opacity:0');
});
it('labels loaders and distinguishes informative and decorative SVGs', () => {
  const { container, rerender } = render(<><AnimatedLoader disabled label="Guardando" /><AnimatedPath disabled d="M0 0L10 10" label="Hecho" /></>);
  expect(screen.getByRole('status').getAttribute('aria-label')).toBe('Guardando');
  expect(screen.getByRole('img').getAttribute('aria-label')).toBe('Hecho');
  rerender(<AnimatedPath disabled d="M0 0L10 10" />);
  expect(container.querySelector('svg')?.getAttribute('aria-hidden')).toBe('true');
});
