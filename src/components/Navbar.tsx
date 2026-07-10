import { useEffect, useRef, useState } from 'react';
import { Menu, X } from 'lucide-react';

const links = [
  { label: 'Cómo funciona', href: '#como-funciona' },
  { label: 'Tarifas', href: '#tarifas' },
  { label: 'Ventaja Aurum', href: '#ventaja' },
  { label: 'Confianza', href: '#confianza' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const menuId = 'mobile-menu';
  useEscapeClose(open, setOpen);
  useFocusTrap(open, setOpen);
  const menuBtnRef = useRef<HTMLButtonElement | null>(null);
  const menuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'glass-dark border-b border-gold-500/15 py-2' : 'py-4 bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo: transparent PNG on dark bg */}
        <a href="#hero" className="flex items-center group">
          <img
            src="/LOGO_SIN_FONDO.png"
            alt="Aurum Ride Ads"
            className="h-14 w-auto drop-shadow-[0_0_12px_rgba(212,168,74,0.4)] group-hover:drop-shadow-[0_0_20px_rgba(212,168,74,0.7)] transition-all duration-500"
          />
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm font-medium text-ink-200 hover:text-gold-300 transition-colors duration-300 relative group"
              >
                {l.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold-gradient transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#tarifas"
          className="hidden md:inline-flex items-center gap-2 rounded-full bg-gold-gradient px-6 py-2.5 text-sm font-semibold text-ink-950 shadow-gold hover:shadow-gold-lg hover:scale-105 transition-all duration-300"
        >
          Empieza ahora
        </a>

        <button
          ref={menuBtnRef}
          className="md:hidden text-gold-300"
          onClick={() => setOpen(!open)}
          aria-label="Menú"
          aria-controls={menuId}
          aria-expanded={open}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {open && (
        <div
          id={menuId}
          ref={menuRef}
          className="md:hidden glass-dark border-t border-gold-500/10 mt-2"
        >
          <ul className="flex flex-col px-6 py-4 gap-4">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block text-ink-200 hover:text-gold-300 transition-colors"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#tarifas"
                onClick={() => setOpen(false)}
                className="inline-flex items-center gap-2 rounded-full bg-gold-gradient px-6 py-2.5 text-sm font-semibold text-ink-950"
              >
                Empieza ahora
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

// Close mobile menu on Escape key for accessibility
// and return focus to menu button could be improved later.
// Small enhancement to improve keyboard UX.
// Note: keep the handler lightweight.
function useEscapeClose(open: boolean, setOpen: (v: boolean) => void) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, setOpen]);
}

// Focus trap: keep keyboard focus inside the mobile menu while open
function useFocusTrap(open: boolean, setOpen: (v: boolean) => void) {
  useEffect(() => {
    if (!open) return;
    const root = document.getElementById('mobile-menu');
    const prevActive = document.activeElement as HTMLElement | null;
    const focusable = root
      ? Array.from(root.querySelectorAll<HTMLElement>(
          'a, button, input, textarea, select, [tabindex]:not([tabindex="-1"])'
        )).filter((el) => !el.hasAttribute('disabled'))
      : [];

    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (first) first.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return;
      if (!first || !last) return;
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    window.addEventListener('keydown', onKey);
    return () => {
      window.removeEventListener('keydown', onKey);
      if (prevActive && typeof prevActive.focus === 'function') prevActive.focus();
      setOpen(false);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);
}
