import { ArrowRight, ChevronDown } from 'lucide-react';

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* ── Full bleed background: Alhambra at night ── */}
      <div className="absolute inset-0">
        <picture>
          <source srcSet="/images/1ae22f8de_generated_image-600.webp 600w, /images/1ae22f8de_generated_image-1200.webp 1200w, /images/1ae22f8de_generated_image-2400.webp 2400w" type="image/webp" />
          <img
            src="/images/1ae22f8de_generated_image.png"
            alt="Granada de noche"
            className="w-full h-full object-cover object-center"
            width={1920}
            height={1080}
            loading="eager"
            decoding="sync"
          />
        </picture>
        {/* Dark overlay to keep text readable + gold tint */}
        <div className="absolute inset-0 bg-gradient-to-b from-ink-950/85 via-ink-950/60 to-ink-950/90" />
        {/* Subtle gold vignette */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse at 50% 40%, rgba(212,168,74,0.08) 0%, transparent 65%)',
          }}
        />
      </div>

      {/* ── Split layout: text left, car image right ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center min-h-[80vh]">

          {/* Left: Copy */}
          <div className="flex flex-col justify-center">
            {/* Badge */}
            <div
              className="inline-flex items-center gap-2 rounded-full glass-gold border border-gold-500/30 px-4 py-1.5 mb-8 w-fit animate-fade-in"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-gold-400 animate-pulse-gold" />
              <span className="text-xs font-medium tracking-widest uppercase text-gold-200">
                Granada · Taxis & Uber
              </span>
            </div>

            {/* Title */}
            <h1
              className="font-display text-5xl sm:text-6xl md:text-7xl font-light leading-[1.05] text-ink-50 animate-fade-up"
              style={{ animationDelay: '0.1s', opacity: 0 }}
            >
              Tu negocio,
              <br />
              en cada
              <br />
              trayecto de{' '}
              <span className="text-gradient-gold font-medium italic">
                Granada
              </span>
            </h1>

            {/* Subtitle */}
            <p
              className="mt-7 max-w-xl text-lg md:text-xl text-ink-200 font-light leading-relaxed animate-fade-up"
              style={{ animationDelay: '0.3s', opacity: 0 }}
            >
              Publicidad dinámica en pantallas digitales dentro de la flota de
              Taxis y Uber más exclusiva.
            </p>

            {/* CTAs */}
            <div
              className="mt-10 flex flex-wrap gap-4 animate-fade-up"
              style={{ animationDelay: '0.5s', opacity: 0 }}
            >
              <a
                href="#tarifas"
                className="group inline-flex items-center gap-2.5 rounded-full bg-gold-gradient px-8 py-4 text-base font-semibold text-ink-950 shadow-gold-lg hover:scale-105 transition-all duration-300"
              >
                Empieza ahora
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform duration-300"
                />
              </a>
              <a
                href="#como-funciona"
                className="inline-flex items-center gap-2 rounded-full border border-gold-500/30 px-8 py-4 text-base font-medium text-gold-100 hover:bg-gold-500/10 hover:border-gold-500/50 transition-all duration-300"
              >
                Ver cómo funciona
              </a>
            </div>

            {/* Stats strip */}
            <div
              className="mt-12 flex items-center gap-10 animate-fade-up"
              style={{ animationDelay: '0.7s', opacity: 0 }}
            >
              {[
                { value: 'HD', label: 'Pantallas' },
                { value: '13s', label: 'Spot ads' },
                { value: '24/7', label: 'Exposición' },
              ].map((s, i) => (
                <div key={s.label} className="flex items-center gap-4">
                  {i > 0 && <div className="h-8 w-px bg-gold-500/20" />}
                  <div>
                    <div className="font-display text-3xl font-medium text-gradient-gold">
                      {s.value}
                    </div>
                    <div className="text-[11px] uppercase tracking-widest text-ink-400 mt-0.5">
                      {s.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Car interior showcase */}
          <div
            className="relative flex items-center justify-center animate-fade-in lg:justify-end"
            style={{ animationDelay: '0.4s', opacity: 0 }}
          >
            {/* Glow behind image */}
            <div className="absolute inset-8 rounded-3xl bg-gold-400/10 blur-3xl" />

            <div className="relative w-full max-w-xl lg:max-w-2xl">
              {/* Decorative frame */}
              <div className="absolute -inset-2 rounded-3xl border border-gold-500/20" />
              <div className="absolute -inset-5 rounded-[2rem] border border-gold-500/10" />

              <picture>
                <source
                  srcSet="/images/Gemini_Generated_Image_ownwotownwotownw-processed(lightpdf.com)-600.webp 600w, /images/Gemini_Generated_Image_ownwotownwotownw-processed(lightpdf.com)-1200.webp 1200w, /images/Gemini_Generated_Image_ownwotownwotownw-processed(lightpdf.com)-2400.webp 2400w"
                  type="image/webp"
                />
                <img
                  src="/images/Gemini_Generated_Image_ownwotownwotownw-processed(lightpdf.com).png"
                  alt="Interior de taxi premium con pantalla HD"
                  className="relative rounded-[2rem] w-full object-cover shadow-gold-lg"
                  style={{ aspectRatio: '4/3', objectPosition: '55% 50%' }}
                  width={1200}
                  height={900}
                  loading="eager"
                  decoding="sync"
                />
              </picture>

              {/* Floating badge */}
              <div className="absolute -bottom-5 -left-5 rounded-2xl glass-dark border border-gold-500/30 px-5 py-3 shadow-gold">
                <div className="text-xs uppercase tracking-widest text-gold-400 mb-0.5">
                  Tecnología
                </div>
                <div className="font-display text-lg font-medium text-ink-50">
                  Pantallas HD
                </div>
              </div>

              {/* Live dot */}
              <div className="absolute top-4 right-4 flex items-center gap-1.5 rounded-full glass-dark border border-gold-500/25 px-3 py-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-green-400 animate-pulse" />
                <span className="text-[11px] font-semibold uppercase tracking-wider text-ink-200">
                  En vivo
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-[10px] uppercase tracking-widest text-ink-500">
          Descubre más
        </span>
        <ChevronDown size={18} className="text-gold-400 animate-scroll-down" />
      </div>
    </section>
  );
}
