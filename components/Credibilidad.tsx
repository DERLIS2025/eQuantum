import { credenciales } from '@/lib/data';

export default function Credibilidad() {
  return (
    <section id="credibilidad" className="bg-slate-50 py-16 sm:py-20">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-brand-night sm:text-3xl">Credibilidad y forma de trabajo</h2>
        <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-soft">
          <ul className="space-y-3 text-sm text-slate-700 sm:text-base">
            {credenciales.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
