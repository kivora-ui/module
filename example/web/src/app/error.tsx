"use client";
export default function ErrorPage({ reset }: { reset: () => void }) {
  return (
    <div className="not-found">
      <h1>No se ha podido abrir esta página</h1>
      <p>Tus datos guardados siguen en este navegador.</p>
      <button onClick={reset}>Volver a intentar</button>
    </div>
  );
}
