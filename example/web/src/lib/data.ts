export type Product = {
  id: string;
  name: string;
  brand: string;
  category: string;
  price: number;
  stock: number;
  minimum: number;
  expiry: string;
  color: string;
};
export type Sale = {
  id: string;
  date: string;
  customer: string;
  method: "Tarjeta" | "Efectivo";
  total: number;
  lines: { productId: string; name: string; quantity: number; price: number }[];
};
export type Customer = {
  id: string;
  name: string;
  email: string;
  phone: string;
};
export type Settings = {
  name: string;
  address: string;
  alerts: boolean;
  dark: boolean;
  receipt: string;
};
export type Store = {
  products: Product[];
  sales: Sale[];
  customers: Customer[];
  settings: Settings;
};
export const money = (cents: number) =>
  new Intl.NumberFormat("es-ES", { style: "currency", currency: "EUR" }).format(
    cents / 100,
  );
export const products: Product[] = [
  {
    id: "847001",
    name: "Protector solar SPF 50+",
    brand: "Helia",
    category: "Dermocosmética",
    price: 2190,
    stock: 42,
    minimum: 10,
    expiry: "2028-06-01",
    color: "peach",
  },
  {
    id: "847002",
    name: "Crema hidratante",
    brand: "Derma",
    category: "Dermocosmética",
    price: 1640,
    stock: 28,
    minimum: 8,
    expiry: "2028-04-01",
    color: "mint",
  },
  {
    id: "847003",
    name: "Vitamina C · 30 cápsulas",
    brand: "Vitae",
    category: "Bienestar",
    price: 1250,
    stock: 6,
    minimum: 12,
    expiry: "2027-02-01",
    color: "yellow",
  },
  {
    id: "847004",
    name: "Gel de manos · 250 ml",
    brand: "Pure",
    category: "Higiene",
    price: 590,
    stock: 65,
    minimum: 15,
    expiry: "2028-09-01",
    color: "blue",
  },
  {
    id: "847005",
    name: "Apósitos · 20 unidades",
    brand: "Care",
    category: "Botiquín",
    price: 450,
    stock: 8,
    minimum: 10,
    expiry: "2029-01-01",
    color: "pink",
  },
  {
    id: "847006",
    name: "Sérum facial · 30 ml",
    brand: "Derma",
    category: "Dermocosmética",
    price: 2890,
    stock: 19,
    minimum: 5,
    expiry: "2027-08-01",
    color: "mint",
  },
  {
    id: "847007",
    name: "Cepillo dental suave",
    brand: "Pure",
    category: "Higiene",
    price: 395,
    stock: 36,
    minimum: 10,
    expiry: "2029-12-01",
    color: "blue",
  },
  {
    id: "847008",
    name: "Bálsamo labial",
    brand: "Helia",
    category: "Dermocosmética",
    price: 680,
    stock: 24,
    minimum: 8,
    expiry: "2027-11-01",
    color: "peach",
  },
  {
    id: "847009",
    name: "Termómetro digital",
    brand: "Care",
    category: "Botiquín",
    price: 1490,
    stock: 0,
    minimum: 5,
    expiry: "2030-01-01",
    color: "pink",
  },
  {
    id: "847010",
    name: "Magnesio · 30 cápsulas",
    brand: "Vitae",
    category: "Bienestar",
    price: 1390,
    stock: 17,
    minimum: 8,
    expiry: "2027-06-01",
    color: "yellow",
  },
  {
    id: "847011",
    name: "Agua micelar · 400 ml",
    brand: "Derma",
    category: "Dermocosmética",
    price: 1120,
    stock: 21,
    minimum: 6,
    expiry: "2028-03-01",
    color: "mint",
  },
  {
    id: "847012",
    name: "Gel de baño infantil",
    brand: "Petit",
    category: "Infantil",
    price: 890,
    stock: 14,
    minimum: 6,
    expiry: "2028-07-01",
    color: "pink",
  },
];
export const initialStore: Store = {
  products,
  customers: [
    {
      id: "c1",
      name: "Lucía Martínez",
      email: "lucia@example.com",
      phone: "600 000 001",
    },
    {
      id: "c2",
      name: "Carlos Ruiz",
      email: "carlos@example.com",
      phone: "600 000 002",
    },
    {
      id: "c3",
      name: "Elena García",
      email: "elena@example.com",
      phone: "600 000 003",
    },
  ],
  sales: Array.from({ length: 18 }, (_, i) => {
    const product = products[i % products.length];
    const quantity = (i % 3) + 1;
    return {
      id: `VT-${1048 - i}`,
      date: new Date(
        Date.UTC(2026, 8, 5 - Math.floor(i / 3), 10 - (i % 3), 30),
      ).toISOString(),
      customer: ["Lucía Martínez", "Cliente de mostrador", "Carlos Ruiz"][
        i % 3
      ],
      method: i % 3 ? "Tarjeta" : "Efectivo",
      total: product.price * quantity,
      lines: [
        {
          productId: product.id,
          name: product.name,
          quantity,
          price: product.price,
        },
      ],
    };
  }),
  settings: {
    name: "Farmacia Oliva",
    address: "Calle del Olivo, 24 · Madrid",
    alerts: true,
    dark: false,
    receipt: "Gracias por cuidar de ti con nosotros.",
  },
};
