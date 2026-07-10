import { Check, Crown, Building2, ArrowRight } from 'lucide-react';
import { Reveal } from './Reveal';

const localFeatures = [
  'Anuncios de 13 segundos en rotación',
  'Pantallas HD en cabeceros de vehículos',
  'Diseño y montaje incluidos',
  'Gestión 100% por WhatsApp',
  'Actualización de vídeo cada 4 meses',
];

const enterpriseFeatures = [
  'Todo lo incluido en Comercios Locales',
  'Packs de Visibilidad: 3, 5, 8 y 10 pantallas',
  'Prioridad en rotación de anuncios',
  'Segmentación por zonas de Granada',
  'Reporte de exposición y métricas',
  'Soporte preferente dedicado',
];

const videoNote = [
  { price: '18,15 €', who: 'Comercios Locales' },
  { price: '19,36 €', who: 'Grandes Empresas' },
];

export function Pricing() {
  return (
    <section id="tarifas" className="relative py-28 md:py-36 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-ink-950 via-ink-900 to-ink-950" />
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            'radial-gradient(circle at 50% 0%, rgba(212,168,74,0.2) 0%, transparent 60%)',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6">
        <Reveal className="text-center mb-20">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-400">
            Tarifas duales
          </span>
          <h2 className="mt-4 font-display text-4xl md:text-5xl lg:text-6xl font-light text-ink-50">
            Elige tu <span className="text-gradient-gold italic">plan</span>
          </h2>
          <p className="mt-6 max-w-2xl mx-auto text-lg text-ink-300 font-light">
            Precios transparentes con IVA incluido. Sin sorpresas, sin letra
            pequeña.
          </p>
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 items-stretch">
          {/* Local Plan */}
          <Reveal>
            <div className="group relative h-full rounded-3xl glass-dark border border-gold-500/15 p-8 md:p-10 hover:border-gold-500/35 transition-all duration-500 overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 radial-gold opacity-40" />

              <div className="relative">
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold-500/10 border border-gold-500/20">
                    <Building2 size={24} className="text-gold-300" />
                  </div>
                  <div>
                    <h3 className="font-display text-2xl font-medium text-ink-50">
                      Comercios Locales
                    </h3>
                    <p className="text-sm text-ink-400">Para pequeños negocios</p>
                  </div>
                </div>

                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-sm text-ink-400">Desde</span>
                  <span className="font-display text-5xl md:text-6xl font-medium text-gradient-gold">
                    12,10 €
                  </span>
                  <span className="text-sm text-ink-400">/mes</span>
                </div>
                <p className="text-sm text-gold-300/80 mb-8">
                  IVA incluido · Anuncios de 13 segundos
                </p>

                <ul className="space-y-4 mb-8">
                  {localFeatures.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <span className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-gold-500/15">
                        <Check size={12} className="text-gold-300" />
                      </span>
                      <span className="text-ink-200 text-[15px]">{f}</span>
                    </li>
                  ))}
                </ul>

                {/* Local visibility packs */}
                <div className="mb-8 rounded-2xl glass-gold border border-gold-500/20 p-5">
                  <p className="text-xs font-semibold uppercase tracking-widest text-gold-400 mb-3">
                    Packs de pantallas
                  </p>
                  <div className="grid grid-cols-3 gap-2">
                    {[5, 8, 10].map((n) => (
                      <div
                        key={n}
                        className="text-center rounded-xl bg-ink-800/60 border border-gold-500/15 py-3 hover:border-gold-500/40 hover:bg-gold-500/10 transition-all duration-300 cursor-default"
                      >
                        <div className="font-display text-2xl font-medium text-gold-300">
                          {n}
                        </div>
                        <div className="text-[10px] uppercase tracking-wider text-ink-400">
                          pantallas
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <a
                  href="#contacto"
                  className="group/btn flex items-center justify-center gap-2 w-full rounded-full border border-gold-500/30 px-6 py-3.5 text-sm font-semibold text-gold-200 hover:bg-gold-500/10 hover:border-gold-500/50 transition-all duration-300"
                >
                  Contratar plan local
                  <ArrowRight
                    size={16}
                    className="group-hover/btn:translate-x-1 transition-transform"
                  />
                </a>
              </div>
            </div>
          </Reveal>

          {/* Enterprise Plan */}
          <Reveal delay={150}>
            <div className="group relative h-full rounded-3xl bg-gradient-to-br from-ink-800 to-ink-900 border border-gold-500/30 p-8 md:p-10 hover:border-gold-500/50 transition-all duration-500 overflow-hidden shadow-gold-lg">
              <div className="absolute top-0 right-0 w-60 h-60 radial-gold opacity-60" />

              {/* Badge */}
              <div className="absolute top-6 right-6">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-gold-gradient px-3 py-1 text-xs font-bold uppercase tracking-wider text-ink-950">
                  <Crown size={12} />
                  Premium
                </span>
              </div>

              <div className="relative">
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold-gradient">
                    <Crown size={24} className="text-ink-950" />
                  </div>
                  <div>
                    <h3 className="font-display text-2xl font-medium text-ink-50">
                      Grandes Empresas
                    </h3>
                    <p className="text-sm text-gold-300/80">
                      Máxima visibilidad y alcance
                    </p>
                  </div>
                </div>

                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-sm text-ink-400">Tarifa</span>
                  <span className="font-display text-5xl md:text-6xl font-medium text-gradient-gold">
                    16,94 €
                  </span>
                  <span className="text-sm text-ink-400">/mes</span>
                </div>
                <p className="text-sm text-gold-300/80 mb-8">
                  IVA incluido · Packs de Visibilidad disponibles
                </p>

                <ul className="space-y-4 mb-8">
                  {enterpriseFeatures.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <span className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-gold-gradient">
                        <Check size={12} className="text-ink-950" />
                      </span>
                      <span className="text-ink-100 text-[15px]">{f}</span>
                    </li>
                  ))}
                </ul>

                {/* Enterprise visibility packs */}
                <div className="mb-8 rounded-2xl glass-gold border border-gold-500/20 p-5">
                  <p className="text-xs font-semibold uppercase tracking-widest text-gold-400 mb-3">
                    Packs de Visibilidad
                  </p>
                  <div className="grid grid-cols-4 gap-2">
                    {[3, 5, 8, 10].map((n) => (
                      <div
                        key={n}
                        className="text-center rounded-xl bg-ink-800/60 border border-gold-500/15 py-3 hover:border-gold-500/40 hover:bg-gold-500/10 transition-all duration-300 cursor-default"
                      >
                        <div className="font-display text-2xl font-medium text-gold-300">
                          {n}
                        </div>
                        <div className="text-[10px] uppercase tracking-wider text-ink-400">
                          pantallas
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <a
                  href="#contacto"
                  className="group/btn flex items-center justify-center gap-2 w-full rounded-full bg-gold-gradient px-6 py-3.5 text-sm font-bold text-ink-950 shadow-gold hover:scale-[1.02] transition-all duration-300"
                >
                  Contratar plan empresa
                  <ArrowRight
                    size={16}
                    className="group-hover/btn:translate-x-1 transition-transform"
                  />
                </a>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Video refresh note */}
        <Reveal delay={200}>
          <div className="mt-10 flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 rounded-2xl glass-dark border border-gold-500/10 p-6 md:p-8">
            <div className="text-center md:text-left">
              <p className="text-xs font-semibold uppercase tracking-widest text-gold-400 mb-1">
                Renovación de contenido
              </p>
              <p className="text-ink-200 text-sm">
                Cobro del vídeo cada 4 meses para mantener tu anuncio fresco y profesional
              </p>
            </div>
            <div className="flex gap-6">
              {videoNote.map((v) => (
                <div key={v.who} className="text-center">
                  <div className="font-display text-2xl font-medium text-gradient-gold">
                    {v.price}
                  </div>
                  <div className="text-[11px] uppercase tracking-wider text-ink-400 mt-0.5">
                    {v.who}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
