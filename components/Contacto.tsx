export default function Contacto() {
  return (
    <section id="contacto" className="bg-white py-16 sm:py-24">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-8 shadow-soft sm:p-12">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-700">CTA final</p>
          <h2 className="mt-3 max-w-3xl text-3xl font-semibold text-brand-night sm:text-4xl">Si tu presencia digital no acompaña tu nivel de negocio, es momento de corregirlo</h2>
          <p className="mt-5 max-w-3xl text-slate-600">
            Coordinemos una sesión estratégica de 30 minutos para identificar brechas críticas y definir un plan de evolución realista para los
            próximos 90 días.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="mailto:contacto@equantum.digital" className="rounded-lg bg-brand-night px-6 py-3 text-sm font-semibold text-white hover:bg-brand-navy">
              Solicitar reunión ejecutiva
            </a>
            <a href="https://wa.me/0000000000" className="rounded-lg border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 hover:bg-white">
              WhatsApp (configurable)
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
