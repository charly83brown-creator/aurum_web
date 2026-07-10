import { Instagram, Facebook, Mail, MapPin, Phone } from 'lucide-react';

// TikTok icon (not in lucide-react)
function TikTokIcon({ size = 20 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className="text-ink-300 group-hover:text-gold-300 transition-colors duration-300"
    >
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.24 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
    </svg>
  );
}

const socials = [
  {
    icon: Instagram,
    label: 'Instagram',
    href: 'https://www.instagram.com/aurumrideads/?__pwa=1',
  },
  {
    icon: Facebook,
    label: 'Facebook',
    href: 'https://www.facebook.com/1084588538081308?ref=PROFILE_EDIT_xav_ig_profile_page_web',
  },
  {
    icon: TikTokIcon,
    label: 'TikTok',
    href: 'https://www.tiktok.com/@aurum.rideads?is_from_webapp=1&sender_device=pc',
  },
];

const navLinks = [
  { label: 'Cómo funciona', href: '#como-funciona' },
  { label: 'Tarifas', href: '#tarifas' },
  { label: 'Ventaja Aurum', href: '#ventaja' },
  { label: 'Confianza', href: '#confianza' },
];

export function Footer() {
  return (
    <footer className="relative border-t border-gold-500/15 bg-ink-950 noise-overlay">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid gap-8 xl:grid-cols-3">
          <div className="rounded-[2rem] border border-gold-500/10 bg-ink-900/80 p-8 shadow-gold-lg backdrop-blur-xl">
            <a href="#hero" className="flex items-center gap-3 mb-6">
              <img
                src="/LOGO_SIN_FONDO.png"
                alt="Aurum Ride Ads"
                className="h-14 w-auto drop-shadow-[0_0_12px_rgba(212,168,74,0.35)]"
              />
            </a>
            <p className="text-ink-300 text-sm leading-relaxed mb-6">
              Publicidad digital dinámica en la flota de taxis y Uber más exclusiva de Granada.
            </p>
            <div className="space-y-4 text-sm text-ink-300">
              <div className="flex items-start gap-3">
                <MapPin size={18} className="mt-1 text-gold-300 flex-none" />
                <span>Carr. Dílar, 1, 18151 Ogíjares, Granada</span>
              </div>
              <div className="flex items-start gap-3">
                <Phone size={18} className="mt-1 text-emerald-300 flex-none" />
                <span className="font-medium text-ink-100">+34 647 029 400</span>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-gold-500/10 bg-ink-900/80 p-8 shadow-gold-lg backdrop-blur-xl">
            <h4 className="text-xs font-semibold uppercase tracking-[0.35em] text-gold-400 mb-6">
              Navegación
            </h4>
            <div className="grid gap-3 text-sm">
              {navLinks.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="rounded-2xl border border-gold-500/10 bg-ink-950/80 px-4 py-3 text-ink-300 transition-all duration-300 hover:border-gold-400/30 hover:text-gold-200 hover:bg-ink-900"
                >
                  {l.label}
                </a>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-gold-500/10 bg-ink-900/80 p-8 shadow-gold-lg backdrop-blur-xl">
            <h4 className="text-xs font-semibold uppercase tracking-[0.35em] text-gold-400 mb-6">
              Conecta con nosotros
            </h4>
            <div className="flex items-center gap-3 mb-6">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="group flex h-12 w-12 items-center justify-center rounded-2xl border border-gold-500/10 bg-ink-950/80 text-ink-200 transition-all duration-300 hover:border-gold-400/40 hover:text-gold-200 hover:shadow-gold"
                >
                  <s.icon size={20} />
                </a>
              ))}
            </div>
            <div className="space-y-4">
              <a
                href="mailto:aurumrideads@gmail.com"
                className="group block rounded-3xl border border-gold-500/10 bg-ink-950/80 px-5 py-4 transition-all duration-300 hover:border-gold-400/40 hover:bg-ink-900"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gold-400/10 text-gold-300">
                    <Mail size={18} />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.24em] text-gold-400">
                      Correo
                    </p>
                    <p className="mt-1 text-sm font-semibold text-ink-100">
                      aurumrideads@gmail.com
                    </p>
                  </div>
                </div>
              </a>
              <a
                href="https://wa.me/34647029400"
                target="_blank"
                rel="noopener noreferrer"
                className="group block rounded-3xl border border-gold-500/10 bg-ink-950/80 px-5 py-4 transition-all duration-300 hover:border-emerald-400/40 hover:bg-ink-900"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-300">
                    <Phone size={18} />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.24em] text-emerald-300">
                      WhatsApp
                    </p>
                    <p className="mt-1 text-sm font-semibold text-ink-100">
                      +34 647 029 400
                    </p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-14 pt-8 border-t border-gold-500/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-ink-500">
              © {new Date().getFullYear()} Aurum Ride Ads. Todos los derechos
              reservados.
            </p>
            <p className="text-sm text-ink-500 text-center md:text-right">
              Contrato de permanencia de{' '}
              <span className="text-gold-400 font-medium">1 año</span> para
              asegurar resultados sostenidos.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
