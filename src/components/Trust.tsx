import { FileSignature, CreditCard, ShieldCheck, Clock } from 'lucide-react';
import { Reveal } from './Reveal';

const features = [
  {
    icon: FileSignature,
    title: 'Firma digital inmediata',
    description:
      'Firma tu contrato desde el móvil en segundos. Sin papeleo, sin desplazamientos, sin esperas. Todo legal y válido al instante.',
  },
  {
    icon: CreditCard,
    title: 'Pago por cargo directo',
    description:
      'Olvídate de transferencias manuales. Configuramos el cargo automático en tu cuenta y tú solo te preocupas de tu negocio.',
  },
  {
    icon: ShieldCheck,
    title: 'Contrato de 1 año',
    description:
      'Un año de permanencia garantiza resultados sostenidos. La exposición continuada es lo que convierte trayectos en clientes.',
  },
  {
    icon: Clock,
    title: 'Activación en 48 horas',
    description:
      'Desde que nos envías tu contenido por WhatsApp, tu anuncio puede estar rotando en pantallas en menos de 48 horas.',
  },
];

export function Trust() {
  return (
    <section id="confianza" className="relative py-28 md:py-36 overflow-hidden">
      <div className="absolute inset-0 radial-gold opacity-40" />

      <div className="relative max-w-7xl mx-auto px-6">
        <Reveal className="text-center mb-20">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-400">
            Confianza y facilidad
          </span>
          <h2 className="mt-4 font-display text-4xl md:text-5xl lg:text-6xl font-light text-ink-50">
            Sin fricción,{' '}
            <span className="text-gradient-gold italic">sin sorpresas</span>
          </h2>
          <p className="mt-6 max-w-2xl mx-auto text-lg text-ink-300 font-light">
            Hemos eliminado todas las barreras para que contratar sea tan
            fácil como enviar un mensaje.
          </p>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <Reveal key={f.title} delay={i * 100}>
              <div className="group h-full rounded-2xl border border-gold-500/15 bg-ink-950/90 p-8 shadow-[0_24px_80px_-45px_rgba(212,168,74,0.6)] transition-all duration-500 hover:border-gold-400/40 hover:-translate-y-1 hover:shadow-gold-lg">
                <div className="flex h-14 w-14 items-center justify-center rounded-[1rem] bg-gold-500/10 border border-gold-500/20 mb-6 group-hover:bg-gold-gradient group-hover:scale-110 transition-all duration-500">
                  <f.icon
                    size={24}
                    className="text-gold-300 group-hover:text-ink-950 transition-colors duration-500"
                  />
                </div>
                <div className="mb-4">
                  <h3 className="font-display text-2xl font-medium text-ink-50">
                    {f.title}
                  </h3>
                  <div className="mt-3 h-px w-14 rounded-full bg-gold-400/75" />
                </div>
                <p className="text-ink-200 text-sm leading-relaxed">
                  {f.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
