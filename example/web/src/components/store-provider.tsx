"use client";

import { UploadSessionStatus } from './upload-session';
import {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import {
  KivoraProvider,
  AudioPlayerProvider,
  Toaster,
  TooltipProvider,
  toast,
} from "@kivora/nextjs";
import {
  initialStore,
  type Store,
  type Sale,
  type Customer,
  type Settings,
} from "@/lib/data";

const storageKey = "kivora-pharmacy-v1";
type StoreContextValue = Store & {
  ready: boolean;
  checkout: (
    cart: Record<string, number>,
    method: Sale["method"],
    customer: string,
  ) => Sale | undefined;
  restock: (id: string, quantity: number) => void;
  addCustomer: (customer: Omit<Customer, "id">) => void;
  saveSettings: (settings: Settings) => void;
};
const StoreContext = createContext<StoreContextValue | null>(null);

function validStore(value: unknown): value is Store {
  if (!value || typeof value !== "object") return false;
  const s = value as Store;
  return (
    Array.isArray(s.products) &&
    s.products.length > 0 &&
    s.products.every(
      (p) =>
        typeof p.id === "string" &&
        typeof p.name === "string" &&
        typeof p.brand === "string" &&
        typeof p.category === "string" &&
        typeof p.color === "string" &&
        typeof p.expiry === "string" &&
        Number.isInteger(p.stock) &&
        p.stock >= 0 &&
        Number.isInteger(p.price) &&
        p.price >= 0 &&
        Number.isInteger(p.minimum),
    ) &&
    Array.isArray(s.sales) &&
    s.sales.every(
      (sale) =>
        typeof sale.id === "string" &&
        typeof sale.customer === "string" &&
        Number.isFinite(Date.parse(sale.date)) &&
        Number.isInteger(sale.total) &&
        ["Tarjeta", "Efectivo"].includes(sale.method) &&
        Array.isArray(sale.lines) &&
        sale.lines.every(
          (l) =>
            typeof l.name === "string" &&
            typeof l.productId === "string" &&
            Number.isInteger(l.quantity) &&
            Number.isInteger(l.price),
        ),
    ) &&
    Array.isArray(s.customers) &&
    s.customers.every(
      (c) =>
        typeof c.id === "string" &&
        typeof c.name === "string" &&
        typeof c.email === "string" &&
        typeof c.phone === "string",
    ) &&
    !!s.settings &&
    typeof s.settings.name === "string" &&
    typeof s.settings.address === "string" &&
    typeof s.settings.receipt === "string" &&
    typeof s.settings.dark === "boolean" &&
    typeof s.settings.alerts === "boolean"
  );
}

export function StoreProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<Store>(initialStore);
  const [ready, setReady] = useState(false);
  const current = useRef(state);
  useEffect(() => {
    try {
      const stored = localStorage.getItem(storageKey);
      if (stored) {
        const parsed: unknown = JSON.parse(stored);
        if (validStore(parsed)) {
          current.current = parsed;
          setState(parsed);
        } else
          toast.error(
            "Los datos guardados no son válidos. Se ha cargado la demo inicial.",
          );
      }
    } catch {
      toast.error("No se han podido recuperar los datos locales.");
    }
    setReady(true);
  }, []);

  function commit(next: Store) {
    current.current = next;
    setState(next);
    try {
      localStorage.setItem(storageKey, JSON.stringify(next));
    } catch {
      toast.error(
        "El navegador no permite guardar. Los cambios durarán esta sesión.",
      );
    }
  }

  const value: StoreContextValue = {
    ...state,
    ready,
    checkout(cart, method, customer) {
      if (!ready) return;
      const snapshot = current.current;
      const entries = Object.entries(cart);
      if (
        !entries.length ||
        entries.some(
          ([id, quantity]) =>
            !Number.isInteger(quantity) ||
            quantity < 1 ||
            quantity > (snapshot.products.find((p) => p.id === id)?.stock ?? 0),
        )
      ) {
        toast.error("Revisa las cantidades y el stock disponible.");
        return;
      }
      const lines = entries.map(([id, quantity]) => {
        const p = snapshot.products.find((p) => p.id === id)!;
        return { productId: id, name: p.name, quantity, price: p.price };
      });
      const sale: Sale = {
        id: `VT-${crypto.randomUUID().slice(0, 8).toUpperCase()}`,
        date: new Date().toISOString(),
        customer,
        method,
        total: lines.reduce((sum, l) => sum + l.price * l.quantity, 0),
        lines,
      };
      commit({
        ...snapshot,
        sales: [sale, ...snapshot.sales],
        products: snapshot.products.map((p) => ({
          ...p,
          stock: p.stock - (cart[p.id] ?? 0),
        })),
      });
      return sale;
    },
    restock(id, quantity) {
      if (
        !ready ||
        !Number.isInteger(quantity) ||
        quantity < 1 ||
        quantity > 10000
      )
        return;
      const snapshot = current.current;
      commit({
        ...snapshot,
        products: snapshot.products.map((p) =>
          p.id === id ? { ...p, stock: p.stock + quantity } : p,
        ),
      });
      toast.success("Entrada de stock registrada");
    },
    addCustomer(customer) {
      if (!ready) return;
      commit({
        ...current.current,
        customers: [
          ...current.current.customers,
          { ...customer, id: crypto.randomUUID() },
        ],
      });
      toast.success("Cliente añadido");
    },
    saveSettings(settings) {
      if (ready) {
        commit({ ...current.current, settings });
        toast.success("Preferencias guardadas");
      }
    },
  };
  return (
    <StoreContext.Provider value={value}>
      <KivoraProvider colorMode={state.settings.dark ? "dark" : "light"}>
        <TooltipProvider>
          <AudioPlayerProvider locale="es">{children}</AudioPlayerProvider>
          <UploadSessionStatus />
          <Toaster richColors position="bottom-right" />
        </TooltipProvider>
      </KivoraProvider>
    </StoreContext.Provider>
  );
}

export function useStore() {
  const value = useContext(StoreContext);
  if (!value) throw new Error("StoreProvider is required");
  return value;
}
