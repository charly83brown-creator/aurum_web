import { ArrowRight } from 'lucide-react';
import { Reveal } from './Reveal';

export function CTASection() {
  return (
    <section id="contacto" className="relative py-24 md:py-32 overflow-hidden">
      {/* Alhambra background */}
      <div className="absolute inset-0">
        <img
          src="/images/1ae22f8de_generated_image.png"
          alt="Granada de noche"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink-950/90 via-ink-950/75 to-ink-950/95" />
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse at 50% 50%, rgba(212,168,74,0.12) 0%, transparent 60%)',
          }}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <Reveal>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-ink-50 leading-tight">
            Tu marca merece
            <br />
            <span className="text-gradient-gold font-medium italic">
              ser vista
            </span>
          </h2>
          <p className="mt-6 text-lg text-ink-200 font-light max-w-2xl mx-auto">
            Únete a la flota de publicidad más exclusiva de Granada. Envíanos
            tu contenido por WhatsApp y empezamos hoy.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://wa.me/34647029400"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2.5 rounded-full bg-gold-gradient px-8 py-4 text-base font-semibold text-ink-950 shadow-gold-lg hover:scale-105 transition-all duration-300"
            >
              Empieza ahora
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform duration-300"
              />
            </a>
            <a
              href="#tarifas"
              className="inline-flex items-center gap-2 rounded-full border border-gold-500/30 px-8 py-4 text-base font-medium text-gold-100 hover:bg-gold-500/10 hover:border-gold-500/50 transition-all duration-300"
            >
              Ver tarifas
            </a>
          </div>

          <p className="mt-8 text-sm text-ink-400">
            Contrato de permanencia de 1 año · Precios con IVA incluido
          </p>
        </Reveal>
      </div>
    </section>
  );
}
