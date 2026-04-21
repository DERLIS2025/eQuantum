const indicadores = [
  { label: 'Proyectos B2B / Ecommerce', value: '60+' },
  { label: 'Framework de trabajo senior', value: 'End-to-end' },
  { label: 'Enfoque', value: 'Conversión + Escalabilidad' },
];

export default function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden bg-brand-night text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(29,78,216,0.25),transparent_35%),radial-gradient(circle_at_80%_10%,rgba(148,163,184,0.18),transparent_30%)]" />
      <div className="relative mx-auto grid w-full max-w-6xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:px-8 lg:py-28">
        <div>
          <p className="inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-brand-ice">
            Consultoría tecnológica senior
          </p>
          <h1 className="mt-6 text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
            Arquitectura digital que convierte mejor y escala con criterio.
          </h1>
          <p className="mt-6 max-w-2xl text-base text-slate-200 sm:text-lg">
            Ayudamos a empresas B2B a transformar su presencia digital en un activo comercial: más credibilidad, mejor jerarquía de propuesta y
            un sistema diseñado para generar demanda calificada.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="#contacto"
              className="rounded-lg bg-white px-6 py-3 text-sm font-semibold text-brand-night transition hover:bg-slate-100"
            >
              Agendar diagnóstico ejecutivo
            </a>
            <a
              href="#casos"
              className="rounded-lg border border-white/30 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-white/60"
            >
              Ver casos y resultados
            </a>
          </div>
          <div className="mt-10 grid gap-3 sm:grid-cols-3">
            {indicadores.map((item) => (
              <div key={item.label} className="rounded-xl border border-white/10 bg-white/5 p-4">
                <p className="text-lg font-semibold text-white">{item.value}</p>
                <p className="mt-1 text-xs text-slate-300">{item.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-soft backdrop-blur sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-ice">Problemas que resolvemos</p>
          <h2 className="mt-3 text-2xl font-semibold text-white">De presencia digital improvisada a sistema comercial confiable</h2>
          <ul className="mt-6 space-y-4 text-sm text-slate-200 sm:text-base">
            <li>• Sitios que se ven bien, pero no generan conversaciones de negocio.</li>
            <li>• Mensaje técnico desordenado que diluye valor frente a decisores.</li>
            <li>• Canales y herramientas desconectadas que frenan crecimiento.</li>
          </ul>
          <div className="mt-7 rounded-xl border border-blue-200/20 bg-blue-400/10 p-4">
            <p className="text-sm font-medium text-brand-ice">Entregable inicial en 10 días hábiles</p>
            <p className="mt-1 text-sm text-slate-300">Mapa de oportunidades, quick wins y plan de implementación por fases.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
