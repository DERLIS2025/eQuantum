import { casos } from '@/lib/data';

export default function Casos() {
  return (
    <section id="casos" className="bg-white py-16 sm:py-20">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-brand-night sm:text-3xl">Casos</h2>
        <p className="mt-3 max-w-3xl text-slate-600">Experiencias de trabajo donde priorizamos orden, claridad de propuesta y ejecución cuidada.</p>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {casos.map((caso) => (
            <article key={caso.name} className="rounded-xl border border-slate-200 bg-slate-50 p-5 shadow-sm">
              <h3 className="text-lg font-semibold text-brand-night">{caso.name}</h3>
              <p className="mt-2 text-sm text-slate-600">{caso.summary}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
