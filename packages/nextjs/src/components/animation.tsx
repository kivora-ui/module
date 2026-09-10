"use client";

import * as React from "react";
import { motion } from "motion/react";

const mediaQuery = "(prefers-reduced-motion: reduce)";
function subscribeReducedMotion(callback: () => void) {
  const media = window.matchMedia(mediaQuery);
  media.addEventListener("change", callback);
  return () => media.removeEventListener("change", callback);
}
function useReducedMotion() {
  return React.useSyncExternalStore(subscribeReducedMotion, () => window.matchMedia(mediaQuery).matches, () => true);
}

export type AnimationPreset = "fade" | "fade-up" | "fade-down" | "scale";
export interface AnimationOptions {
  /** Milliseconds. */
  duration?: number;
  delay?: number;
  /** Change to replay an entrance. */
  replayKey?: string | number;
  disabled?: boolean;
}
export interface AnimationProps extends React.HTMLAttributes<HTMLDivElement>, AnimationOptions {
  preset?: AnimationPreset;
}
// Animate the complete transform so Motion can hand it to WAAPI together with
// opacity. Individual y/scale values otherwise require JS updates each frame.
const settled = { opacity: 1, transform: "translateY(0px) scale(1)" };
const initial = (preset: AnimationPreset) => ({
  opacity: 0,
  transform: `translateY(${preset === "fade-up" ? 20 : preset === "fade-down" ? -20 : 0}px) scale(${preset === "scale" ? 0.85 : 1})`,
});
export function Animation({ preset = "fade-up", duration = 500, delay = 0, replayKey, disabled, children, ...props }: AnimationProps) {
  const reduced = useReducedMotion();
  return <div {...props}><motion.div key={replayKey} initial={disabled || reduced ? false : initial(preset)} animate={settled} transition={{ duration: disabled || reduced ? 0 : Math.max(0, duration) / 1000, delay: disabled || reduced ? 0 : Math.max(0, delay) / 1000 }}>{children}</motion.div></div>;
}
export interface AnimatedTextProps extends React.HTMLAttributes<HTMLSpanElement>, AnimationOptions {
  children: string;
  split?: "words" | "characters";
  preset?: AnimationPreset;
  stagger?: number;
}
export function AnimatedText({ children, split = "words", preset = "fade-up", stagger = 50, duration = 400, delay = 0, replayKey, disabled, ...props }: AnimatedTextProps) {
  const reduced = useReducedMotion();
  const parts = split === "words" ? children.split(/(\s+)/u) : Array.from(children);
  return <span {...props}><span style={{ position: "absolute", width: 1, height: 1, padding: 0, margin: -1, overflow: "hidden", clipPath: "inset(50%)", whiteSpace: "nowrap", border: 0 }}>{props["aria-label"] ?? children}</span><span aria-hidden="true" key={`${replayKey ?? ''}:${children}:${split}`} style={{ whiteSpace: "pre-wrap" }}>{parts.map((part, index) => /^\s+$/u.test(part) ? <React.Fragment key={index}>{part}</React.Fragment> : <motion.span key={index} style={{ display: "inline-block" }} initial={disabled || reduced ? false : initial(preset)} animate={settled} transition={{ duration: disabled || reduced ? 0 : Math.max(0, duration) / 1000, delay: disabled || reduced ? 0 : (Math.max(0, delay) + index * Math.max(0, stagger)) / 1000 }}>{part}</motion.span>)}</span></span>;
}
export interface AnimatedPathProps extends AnimationOptions {
  d: string;
  viewBox?: string;
  size?: number;
  color?: string;
  strokeWidth?: number;
  label?: string;
}
export function AnimatedPath({ d, viewBox = "0 0 24 24", size = 48, color = "currentColor", strokeWidth = 2, label, duration = 1000, delay = 0, replayKey, disabled }: AnimatedPathProps) {
  const reduced = useReducedMotion();
  return <svg width={size} height={size} viewBox={viewBox} role={label ? "img" : undefined} aria-label={label} aria-hidden={!label}><motion.path key={`${replayKey ?? ''}:${d}`} d={d} fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" initial={disabled || reduced ? false : { pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: disabled || reduced ? 0 : Math.max(0, duration) / 1000, delay: disabled || reduced ? 0 : Math.max(0, delay) / 1000 }} /></svg>;
}
export interface AnimatedLoaderProps {
  variant?: "dots" | "bars";
  label?: string;
  color?: string;
  size?: number;
  duration?: number;
  disabled?: boolean;
}
export function AnimatedLoader({ variant = "dots", label = "Cargando", color = "currentColor", size = 8, duration = 700, disabled }: AnimatedLoaderProps) {
  const reduced = useReducedMotion();
  const stop = disabled || reduced;
  return <span role="status" aria-label={label} style={{ display: "inline-flex", alignItems: "center", gap: size / 2, height: size * 3 }}>{[0, 1, 2].map(index => <motion.span aria-hidden="true" key={`${variant}:${index}:${!!stop}`} style={{ display: "block", width: size, height: variant === "bars" ? size * 3 : size, borderRadius: variant === "dots" ? "50%" : 2, background: color }} animate={stop ? { opacity: 1, transform: "translateY(0px) scaleY(1)" } : { opacity: [0.4, 1, 0.4], transform: variant === "bars" ? ["scaleY(0.4)", "scaleY(1)", "scaleY(0.4)"] : ["translateY(0px)", `translateY(${-size}px)`, "translateY(0px)"] }} transition={{ duration: Math.max(100, duration) / 1000, repeat: stop ? 0 : Infinity, delay: stop ? 0 : index * 0.12 }} />)}</span>;
}
