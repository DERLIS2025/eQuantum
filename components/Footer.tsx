export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white py-8">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 px-4 text-sm text-slate-500 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <p className="font-semibold text-brand-night">eQuantum</p>
        <p>Consultoría y arquitectura digital para empresas.</p>
        <p>© {new Date().getFullYear()} eQuantum. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}
