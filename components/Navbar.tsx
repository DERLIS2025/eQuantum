'use client';

import { useState } from 'react';
import { navItems } from '@/lib/data';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/70 bg-white/90 backdrop-blur">
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <a href="#inicio" className="text-lg font-extrabold tracking-tight text-brand-night">
          eQuantum
        </a>

        <button
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-slate-300 text-brand-night md:hidden"
          aria-label="Abrir menú"
          aria-expanded={open}
          onClick={() => setOpen((prev) => !prev)}
        >
          <span className="text-xl">☰</span>
        </button>

        <div className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="text-sm font-medium text-slate-600 transition hover:text-brand-night">
              {item.label}
            </a>
          ))}
          <a href="#contacto" className="rounded-md bg-brand-night px-4 py-2 text-sm font-semibold text-white transition hover:bg-brand-navy">
            Agendar llamada
          </a>
        </div>
      </nav>

      {open && (
        <div className="border-t border-slate-200 bg-white px-4 py-4 md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col gap-3">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-md px-2 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contacto"
              className="rounded-md bg-brand-night px-4 py-2 text-center text-sm font-semibold text-white"
              onClick={() => setOpen(false)}
            >
              Agendar llamada
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
