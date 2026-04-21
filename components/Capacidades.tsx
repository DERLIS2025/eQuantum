import { capacidades } from '@/lib/data';

export default function Capacidades() {
  return (
    <section id="capacidades" className="bg-slate-50 py-16 sm:py-20">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-700">Servicios</p>
          <h2 className="mt-3 text-3xl font-semibold text-brand-night sm:text-4xl">Capacidades para construir y escalar una operación digital seria</h2>
          <p className="mt-4 text-slate-600">Desde estrategia y diseño hasta implementación técnica y optimización continua.</p>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {capacidades.map((capacidad) => (
            <article key={capacidad.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-brand-night">{capacidad.title}</h3>
              <ul className="mt-4 space-y-2 text-sm text-slate-600">
                {capacidad.points.map((point) => (
                  <li key={point}>• {point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
