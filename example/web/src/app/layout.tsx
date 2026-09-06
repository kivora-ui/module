import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { StoreProvider } from "@/components/store-provider";
import { Shell } from "@/components/shell";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  interactiveWidget: "resizes-content",
};

export const metadata: Metadata = {
  title: {
    default: "Oliva · Tu farmacia, en equilibrio",
    template: "%s · Oliva",
  },
  description:
    "Dashboard de farmacia y TPV de demostración con los componentes Kivora UI en Next.js.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <body>
        <StoreProvider>
          <Shell>{children}</Shell>
        </StoreProvider>
      </body>
    </html>
  );
}
