import { diferenciales } from '@/lib/data';

export default function Diferencial() {
  return (
    <section id="diferencial" className="bg-white py-16 sm:py-20">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-brand-night sm:text-3xl">El diferencial de eQuantum</h2>
        <p className="mt-3 max-w-3xl text-slate-600">
          No solo desarrollamos una web: ordenamos la base digital de tu empresa para sostener decisiones y crecimiento a mediano plazo.
        </p>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {diferenciales.map((item) => (
            <article key={item.title} className="rounded-xl border border-slate-200 bg-white p-5 shadow-soft">
              <h3 className="text-lg font-semibold text-brand-night">{item.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
