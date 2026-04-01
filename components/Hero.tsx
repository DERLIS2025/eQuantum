export default function Hero() {
  return (
    <section id="inicio" className="bg-gradient-to-b from-brand-night via-brand-navy to-brand-night text-white">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8 lg:py-24">
        <div>
          <p className="inline-flex rounded-full border border-blue-200/20 bg-white/5 px-4 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-brand-ice">
            Agencia digital & consultoría
          </p>
          <h1 className="mt-5 text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
            Infraestructura digital sólida para empresas que quieren crecer con control.
          </h1>
          <p className="mt-5 max-w-xl text-base text-slate-200 sm:text-lg">
            En eQuantum diseñamos, ordenamos y evolucionamos activos digitales para que tu negocio tenga una base más clara,
            escalable y alineada con resultados.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#contacto"
              className="rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-500"
            >
              Solicitar diagnóstico
            </a>
            <a
              href="#casos"
              className="rounded-lg border border-slate-400/40 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:border-slate-300"
            >
              Ver casos
            </a>
          </div>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-soft backdrop-blur-sm">
          <h2 className="text-lg font-semibold text-white">¿Qué resolvemos?</h2>
          <ul className="mt-4 space-y-3 text-sm text-slate-200 sm:text-base">
            <li>• Sitios y ecosistemas digitales desordenados o desactualizados.</li>
            <li>• Falta de coherencia entre marca, mensaje comercial y canales.</li>
            <li>• Dificultad para escalar sin perder claridad operativa.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
