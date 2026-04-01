export default function Contacto() {
  return (
    <section id="contacto" className="bg-white py-16 sm:py-20">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 text-center shadow-soft sm:p-10">
          <h2 className="text-2xl font-bold text-brand-night sm:text-3xl">Hablemos de la evolución digital de tu empresa</h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-600">
            Podemos iniciar con un diagnóstico de tu situación actual y definir un plan de acción claro. Esta sección queda preparada para conectar
            un formulario o CRM cuando lo necesites.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <a href="mailto:contacto@equantum.digital" className="rounded-lg bg-brand-night px-5 py-3 text-sm font-semibold text-white hover:bg-brand-navy">
              contacto@equantum.digital
            </a>
            <a href="https://wa.me/0000000000" className="rounded-lg border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 hover:bg-white">
              WhatsApp (configurable)
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
