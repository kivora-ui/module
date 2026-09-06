import Link from "next/link";
export default function NotFound() {
  return (
    <div className="not-found">
      <span className="eyebrow">404</span>
      <h1>Página no encontrada</h1>
      <p>Vuelve a tu farmacia para continuar.</p>
      <Link href="/">Ir a la vista general →</Link>
    </div>
  );
}
