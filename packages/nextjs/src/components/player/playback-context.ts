"use client";
import { createContext } from 'react';

/** Lets video players dismiss persistent audio within the same provider. */
export const DismissAudioContext = createContext<(() => void) | null>(null);
