import { useState, type ReactNode } from "react";
import { Button } from "@kivora/nextjs";

/** Remount the preview when controls change or the user requests a replay. */
export function AnimationPreview({ children, settings = "" }: {
  children: ReactNode;
  settings?: string;
}) {
  const [replay, setReplay] = useState(0);
  return (
    <div className="grid w-full max-w-3xl gap-5">
      <div key={`${settings}:${replay}`} className="flex min-h-48 flex-wrap items-center justify-center gap-8 rounded-xl border border-border bg-card p-8 text-card-foreground">
        {children}
      </div>
      <div className="flex flex-wrap items-center gap-4">
        <Button variant="outline" onClick={() => setReplay(value => value + 1)}>
          Repetir animación
        </Button>
        <p className="text-sm text-muted-foreground">
          Si tienes activado reducir movimiento, la muestra permanece estática.
        </p>
      </div>
    </div>
  );
}
