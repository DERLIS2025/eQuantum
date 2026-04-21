import { credenciales } from '@/lib/data';

export default function Credibilidad() {
  return (
    <section id="credibilidad" className="bg-slate-50 py-16 sm:py-20">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-700">Proceso y credibilidad</p>
          <h2 className="mt-3 text-3xl font-semibold text-brand-night sm:text-4xl">Un método claro para decisiones de alto impacto</h2>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {credenciales.map((item) => (
            <article key={item.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft">
              <h3 className="text-lg font-semibold text-brand-night">{item.title}</h3>
              <p className="mt-3 text-sm text-slate-600">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
