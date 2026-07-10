import { MessageCircle, Film, MonitorPlay } from 'lucide-react';
import { Reveal } from './Reveal';

const steps = [
  {
    icon: MessageCircle,
    number: '01',
    title: 'Envíanos tu contenido',
    description:
      'El cliente envía su logo, fotos y vídeos directamente por WhatsApp. Sin formularios, sin esperas — la vía más rápida y cómoda para dueños de negocios.',
    accent: 'Comunicación instantánea',
  },
  {
    icon: Film,
    number: '02',
    title: 'Montaje profesional',
    description:
      'Nuestro equipo realiza el montaje y diseño del anuncio con estándares de producción premium, adaptado al formato HD de nuestras pantallas en cabeceros.',
    accent: 'Diseño a medida',
  },
  {
    icon: MonitorPlay,
    number: '03',
    title: 'Integración técnica',
    description:
      'Integramos tu anuncio en el sistema de rotación digital. Tu marca aparece en cada trayecto, visible para cada pasajero que sube al vehículo.',
    accent: 'Emisión en vivo',
  },
];

export function HowItWorks() {
  return (
    <section
      id="como-funciona"
      className="relative py-28 md:py-36 overflow-hidden"
    >
      <div className="absolute inset-0 radial-gold opacity-50" />

      <div className="relative max-w-7xl mx-auto px-6">
        <Reveal className="text-center mb-20">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-400">
            Proceso ágil
          </span>
          <h2 className="mt-4 font-display text-4xl md:text-5xl lg:text-6xl font-light text-ink-50">
            Cómo <span className="text-gradient-gold italic">funciona</span>
          </h2>
          <p className="mt-6 max-w-2xl mx-auto text-lg text-ink-300 font-light">
            Tres pasos. Cero complicaciones. Todo gestionado por WhatsApp para
            que no tengas que preocuparte por nada.
          </p>
        </Reveal>

        {/* Car interior showcase banner */}
        <Reveal className="mb-16">
          <div className="relative rounded-3xl overflow-hidden border border-gold-500/20 shadow-gold-lg">
            <img
              src="/images/Gemini_Generated_Image_a5bfmja5bfmja5bf-processed.png"
              alt="Interior de taxi premium con pantalla HD en cabecero"
              className="w-full h-[280px] md:h-[400px] object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/40 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
              <div className="inline-flex items-center gap-2 rounded-full glass-gold border border-gold-500/25 px-4 py-1.5 mb-4">
                <span className="h-1.5 w-1.5 rounded-full bg-green-400 animate-pulse" />
                <span className="text-xs font-semibold uppercase tracking-widest text-gold-200">
                  Pantallas HD en cabeceros
                </span>
              </div>
              <h3 className="font-display text-2xl md:text-3xl font-light text-ink-50 max-w-xl">
                Tu anuncio, visible en cada trayecto
                <span className="text-gradient-gold italic"> en alta definición</span>
              </h3>
            </div>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
          {steps.map((step, i) => (
            <Reveal key={step.number} delay={i * 150}>
              <div className="group relative h-full rounded-2xl glass-dark border border-gold-500/10 p-8 hover:border-gold-500/30 transition-all duration-500 hover:shadow-gold-lg">
                {/* Number watermark */}
                <span className="absolute top-6 right-6 font-display text-6xl font-bold text-gold-500/10 group-hover:text-gold-500/20 transition-colors duration-500">
                  {step.number}
                </span>

                <div className="relative">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gold-500/10 border border-gold-500/20 mb-6 group-hover:bg-gold-gradient group-hover:scale-110 transition-all duration-500">
                    <step.icon
                      size={26}
                      className="text-gold-300 group-hover:text-ink-950 transition-colors duration-500"
                    />
                  </div>

                  <h3 className="font-display text-2xl font-medium text-ink-50 mb-3">
                    {step.title}
                  </h3>

                  <p className="text-ink-300 leading-relaxed text-[15px]">
                    {step.description}
                  </p>

                  <div className="mt-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-gold-400">
                    <span className="h-px w-6 bg-gold-gradient" />
                    {step.accent}
                  </div>
                </div>

                {/* Connector arrow for desktop */}
                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-5 lg:-right-7 z-10">
                    <div className="h-10 w-10 rounded-full glass-dark border border-gold-500/20 flex items-center justify-center">
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                        className="text-gold-400"
                      >
                        <path
                          d="M1 7H13M13 7L7 1M13 7L7 13"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                        />
                      </svg>
                    </div>
                  </div>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
