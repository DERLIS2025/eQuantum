import { diferenciales } from '@/lib/data';

export default function Diferencial() {
  return (
    <section id="diferencial" className="bg-white py-16 sm:py-20">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-700">Ventajas competitivas</p>
          <h2 className="mt-3 text-3xl font-semibold text-brand-night sm:text-4xl">Una combinación difícil de encontrar en una sola firma</h2>
        </div>
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {diferenciales.map((item) => (
            <article key={item.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-soft">
              <h3 className="text-lg font-semibold text-brand-night">{item.title}</h3>
              <p className="mt-3 text-sm text-slate-600">{item.description}</p>
              <p className="mt-4 border-t border-slate-200 pt-4 text-sm font-medium text-brand-night">Resultado: {item.outcome}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
