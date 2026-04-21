import { casos } from '@/lib/data';

export default function Casos() {
  return (
    <section id="casos" className="bg-white py-16 sm:py-20">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-700">Casos</p>
          <h2 className="mt-3 text-3xl font-semibold text-brand-night sm:text-4xl">Resultados aplicados a contextos reales de negocio</h2>
        </div>
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {casos.map((caso) => (
            <article key={caso.name} className="flex h-full flex-col rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-brand-night">{caso.name}</h3>
              <p className="mt-4 text-sm text-slate-600">
                <span className="font-medium text-brand-night">Desafío:</span> {caso.challenge}
              </p>
              <p className="mt-3 text-sm text-slate-600">
                <span className="font-medium text-brand-night">Intervención:</span> {caso.result}
              </p>
              <p className="mt-auto pt-5 text-sm font-semibold text-blue-700">{caso.impact}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
