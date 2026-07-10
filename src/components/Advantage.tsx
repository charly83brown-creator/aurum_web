import { Gift, CalendarDays, Sparkles } from 'lucide-react';
import { Reveal } from './Reveal';

export function Advantage() {
  return (
    <section id="ventaja" className="relative py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0 bg-ink-950" />

      <div className="relative max-w-6xl mx-auto px-6">
        <Reveal>
          <div className="relative rounded-3xl overflow-hidden border border-gold-500/30 shadow-gold-lg">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-ink-800 via-ink-900 to-ink-950" />
            <div
              className="absolute inset-0 opacity-40"
              style={{
                backgroundImage:
                  'radial-gradient(circle at 30% 50%, rgba(212,168,74,0.25) 0%, transparent 50%), radial-gradient(circle at 70% 50%, rgba(212,168,74,0.15) 0%, transparent 50%)',
              }}
            />
            {/* Animated shimmer line */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-400 to-transparent animate-shimmer" />

            <div className="relative grid md:grid-cols-2 gap-8 p-8 md:p-14 items-center">
              {/* Left: Content */}
              <div>
                <div className="inline-flex items-center gap-2 rounded-full glass-gold border border-gold-500/25 px-4 py-1.5 mb-6">
                  <Sparkles size={14} className="text-gold-300" />
                  <span className="text-xs font-semibold uppercase tracking-widest text-gold-200">
                    La Ventaja Aurum
                  </span>
                </div>

                <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-light text-ink-50 leading-tight">
                  Contrata hoy y el resto
                  <br />
                  del mes es{' '}
                  <span className="text-gradient-gold font-medium italic">
                    gratuito
                  </span>
                </h2>

                <p className="mt-6 text-lg text-ink-300 font-light leading-relaxed">
                  Si contratas con el mes empezado, no pagas ni un euro más
                  hasta el día 1. Tu servicio oficial arranca el primer día del
                  mes siguiente — pero tus días de cortesía corren por nuestra
                  cuenta.
                </p>

                <div className="mt-8 flex flex-wrap gap-4">
                  <div className="flex items-center gap-3 rounded-xl glass-dark border border-gold-500/15 px-5 py-3">
                    <Gift size={20} className="text-gold-300" />
                    <span className="text-sm text-ink-200">
                      Días de cortesía <strong className="text-gold-300">gratis</strong>
                    </span>
                  </div>
                  <div className="flex items-center gap-3 rounded-xl glass-dark border border-gold-500/15 px-5 py-3">
                    <CalendarDays size={20} className="text-gold-300" />
                    <span className="text-sm text-ink-200">
                      Inicio oficial: <strong className="text-gold-300">día 1</strong>
                    </span>
                  </div>
                </div>
              </div>

              {/* Right: Visual */}
              <div className="relative flex items-center justify-center">
                <div className="relative">
                  {/* Outer ring */}
                  <div className="absolute inset-0 rounded-full border-2 border-gold-500/20 animate-pulse-gold" />
                  <div className="absolute inset-4 rounded-full border border-gold-500/15" />

                  {/* Center medallion */}
                  <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-full bg-gradient-to-br from-ink-700 to-ink-900 border border-gold-500/30 flex flex-col items-center justify-center shadow-gold-lg">
                    <div className="text-center px-6">
                      <Gift
                        size={40}
                        className="text-gold-300 mx-auto mb-3 animate-float"
                      />
                      <div className="font-display text-2xl font-medium text-gradient-gold">
                        GRATIS
                      </div>
                      <div className="text-xs uppercase tracking-widest text-ink-400 mt-1">
                        hasta fin de mes
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
