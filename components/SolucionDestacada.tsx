export default function SolucionDestacada() {
  return (
    <section id="solucion" className="bg-brand-night py-16 text-white sm:py-20">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <article className="rounded-2xl border border-white/15 bg-gradient-to-r from-brand-navy to-slate-900 p-6 shadow-soft sm:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-ice">Framework eQuantum</p>
          <h2 className="mt-3 max-w-3xl text-3xl font-semibold sm:text-4xl">Estrategia, experiencia y tecnología bajo una única dirección ejecutiva</h2>
          <p className="mt-5 max-w-3xl text-slate-200">
            Coordinamos negocio, marketing y producto para que cada decisión digital responda a objetivos comerciales concretos. Menos improvisación,
            más foco, más trazabilidad.
          </p>
          <div className="mt-8 grid gap-3 text-sm sm:grid-cols-3">
            <div className="rounded-xl border border-white/15 bg-white/5 p-4">Roadmap priorizado por impacto</div>
            <div className="rounded-xl border border-white/15 bg-white/5 p-4">Ejecución ágil con gobernanza</div>
            <div className="rounded-xl border border-white/15 bg-white/5 p-4">Métricas para dirección y ventas</div>
          </div>
        </article>
      </div>
    </section>
  );
}
