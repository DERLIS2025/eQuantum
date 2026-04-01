import { capacidades } from '@/lib/data';

export default function Capacidades() {
  return (
    <section id="capacidades" className="bg-slate-50 py-16 sm:py-20">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-brand-night sm:text-3xl">Capacidades</h2>
        <p className="mt-3 max-w-3xl text-slate-600">Servicios diseñados para construir una presencia digital sólida, clara y escalable.</p>
        <div className="mt-8 grid gap-3 sm:grid-cols-2">
          {capacidades.map((capacidad) => (
            <div key={capacidad} className="rounded-xl border border-slate-200 bg-white p-4 text-sm text-slate-700 shadow-sm sm:text-base">
              {capacidad}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
