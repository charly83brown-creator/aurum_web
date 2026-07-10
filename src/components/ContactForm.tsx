import { useState, type FormEvent } from 'react';
import { Send, CheckCircle2, Loader2, User, Phone, Mail, Building2, MapPin, Monitor, MessageSquare, Briefcase, Sparkles } from 'lucide-react';
import { Reveal } from './Reveal';
import { supabase } from '../lib/supabase';

const sectores = [
  'Restauración',
  'Salud / Clínica',
  'Belleza / Estética',
  'Inmobiliaria',
  'Automoción',
  'Retail / Moda',
  'Educación',
  'Otro',
];

const planes = [
  { value: 'Comercio Pequeño', label: 'Comercio Local — 12,10 €/mes' },
  { value: 'Comercio Grande', label: 'Gran Empresa — 16,94 €/mes' },
];

const pantallasOpts = ['3', '5', '8', '10'];

const zonas = [
  'Centro de Granada',
  'Ogíjares / Dílar',
  'Armilla / Churriana',
  'La Zubia',
  'Toda Granada',
];

export function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const [fieldErrors, setFieldErrors] = useState<Partial<Record<keyof typeof form, string | undefined>>>({});

  const [form, setForm] = useState({
    nombre: '',
    telefono: '',
    sector: '',
    negocio: '',
    email: '',
    zona: '',
    plan: '',
    pantallas: '',
    pantallasOtra: '',
    mensaje: '',
  });

  const update = (key: keyof typeof form, value: string) => {
    setForm((f) => ({ ...f, [key]: value }));
    setFieldErrors((prev) => ({ ...prev, [key]: undefined }));
  };

  const pantallasFinal = form.pantallas === 'otra' ? form.pantallasOtra : form.pantallas;

  const inputClass = (field: keyof typeof form) =>
    `form-input ${fieldErrors[field] ? 'border-red-500/80 ring-1 ring-red-500/30 focus:border-red-500 focus:ring-red-200' : ''}`;

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setErrorMsg('');
    setFieldErrors({});

    const requiredFields: Array<keyof typeof form> = [
      'nombre',
      'telefono',
      'sector',
      'negocio',
      'email',
      'zona',
      'plan',
      'pantallas',
      'mensaje',
    ];

    const missingFields = requiredFields.filter((field) => !form[field].trim());
    const newFieldErrors: Partial<Record<keyof typeof form, string>> = {};

    if (missingFields.length > 0) {
      missingFields.forEach((field) => {
        newFieldErrors[field] = 'Campo obligatorio.';
      });

      if (form.pantallas === 'otra' && !form.pantallasOtra.trim()) {
        newFieldErrors.pantallas = 'Introduce una cantidad válida de pantallas.';
      }

      setStatus('error');
      setErrorMsg('Todos los campos son obligatorios.');
      setFieldErrors(newFieldErrors);
      return;
    }

    if (form.pantallas === 'otra') {
      const v = parseInt(form.pantallasOtra || '', 10);
      if (!form.pantallasOtra.trim() || Number.isNaN(v) || v < 1) {
        setStatus('error');
        setErrorMsg('Todos los campos son obligatorios.');
        setFieldErrors({ pantallas: 'Introduce una cantidad válida de pantallas.' });
        return;
      }
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email.trim())) {
      setStatus('error');
      setErrorMsg('El correo es incorrecto.');
      setFieldErrors({ email: 'Introduce un email válido.' });
      return;
    }

    const phoneRegex = /^[0-9+\s()\-]+$/;
    if (!phoneRegex.test(form.telefono.trim())) {
      setStatus('error');
      setErrorMsg('El teléfono es incorrecto.');
      setFieldErrors({ telefono: 'Introduce un teléfono válido.' });
      return;
    }

    setStatus('loading');

    const { error } = await supabase.from('contact_leads').insert({
      nombre: form.nombre,
      telefono: form.telefono || null,
      sector: form.sector || null,
      negocio: form.negocio || null,
      email: form.email || null,
      zona: form.zona || null,
      plan: form.plan || null,
      pantallas: pantallasFinal || null,
      mensaje: form.mensaje || null,
    });

    if (error) {
      setStatus('error');
      setErrorMsg('No se pudo enviar el formulario. Inténtalo de nuevo.');
      return;
    }

    // Envío exitoso: abrir chat de WhatsApp del equipo con los datos (sin coste)
    const waNumber = '34647029400';
    const waMessage = `Nuevo lead - Aurum Ride Ads:\nNombre: ${form.nombre || '-'}\nTeléfono: ${form.telefono || '-'}\nPlan: ${form.plan || '-'}\nPantallas: ${pantallasFinal || '-'}\nMensaje: ${form.mensaje || '-'} `;
    // Además abrir cliente de correo del usuario con mensaje prellenado (mailto)
    const mailTo = 'aurumrideads@gmail.com';
    const mailSubject = 'Nuevo lead - Aurum Ride Ads';
    const mailBody = `Nombre: ${form.nombre || '-'}\nTeléfono: ${form.telefono || '-'}\nPlan: ${form.plan || '-'}\nPantallas: ${pantallasFinal || '-'}\nMensaje: ${form.mensaje || '-'}`;

    if (typeof window !== 'undefined') {
      // Enviar también al Google Sheet webhook si está configurado (VITE_SHEET_WEBHOOK)
      const sheetUrl = import.meta.env.VITE_SHEET_WEBHOOK as string | undefined;
      if (sheetUrl) {
        try {
          await fetch(sheetUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              nombre: form.nombre || '-',
              telefono: form.telefono || '-',
              plan: form.plan || '-',
              pantallas: pantallasFinal || '-',
              mensaje: form.mensaje || '-',
              timestamp: new Date().toISOString(),
            }),
          });
        } catch (err) {
          // no bloqueante — solo loguear
          // eslint-disable-next-line no-console
          console.warn('Error enviando a Google Sheet webhook', err);
        }
      }

      const waUrl = `https://wa.me/${waNumber}?text=${encodeURIComponent(waMessage)}`;
      // Abrir WhatsApp en una nueva pestaña
      window.open(waUrl, '_blank');
      // Abrir cliente de correo (abrirá el cliente del usuario)
      const mailUrl = `mailto:${mailTo}?subject=${encodeURIComponent(mailSubject)}&body=${encodeURIComponent(mailBody)}`;
      // usar location.href para asegurar que se abra el cliente de correo
      window.location.href = mailUrl;
    }

    setStatus('success');
    setForm({
      nombre: '', telefono: '', sector: '', negocio: '',
      email: '', zona: '', plan: '', pantallas: '', pantallasOtra: '', mensaje: '',
    });
  };

  if (status === 'success') {
    return (
      <section id="contacto" className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/1ae22f8de_generated_image.png"
            alt="Granada de noche"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ink-950/90 via-ink-950/80 to-ink-950/95" />
        </div>

        <div className="relative z-10 max-w-2xl mx-auto px-6 text-center">
          <Reveal>
            <div className="flex justify-center mb-6">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gold-gradient shadow-gold-lg animate-pulse-gold">
                <CheckCircle2 size={40} className="text-ink-950" />
              </div>
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-light text-ink-50">
              ¡Solicitud <span className="text-gradient-gold italic">enviada!</span>
            </h2>
            <p className="mt-6 text-lg text-ink-200 font-light">
              Hemos recibido tu información. Nuestro equipo se pondrá en
              contacto contigo por WhatsApp en menos de 48 horas.
            </p>
            <button
              onClick={() => setStatus('idle')}
              className="mt-8 inline-flex items-center gap-2 rounded-full border border-gold-500/30 px-8 py-3.5 text-sm font-semibold text-gold-200 hover:bg-gold-500/10 hover:border-gold-500/50 transition-all duration-300"
            >
              Enviar otra solicitud
            </button>
          </Reveal>
        </div>
      </section>
    );
  }

  return (
    <section id="contacto" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="/images/1ae22f8de_generated_image.png"
          alt="Granada de noche"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink-950/92 via-ink-950/85 to-ink-950/95" />
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse at 50% 50%, rgba(212,168,74,0.1) 0%, transparent 60%)',
          }}
        />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-6">
        <Reveal className="text-center mb-12">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-400">
            Contacto
          </span>
          <h2 className="mt-4 font-display text-4xl md:text-5xl lg:text-6xl font-light text-ink-50">
            Solicita tu <span className="text-gradient-gold italic">espacio</span>
          </h2>
          <p className="mt-6 max-w-2xl mx-auto text-lg text-ink-200 font-light">
            Rellena el formulario y nos pondremos en contacto contigo por
            WhatsApp en menos de 48 horas.
          </p>
        </Reveal>

        <div className="mb-10 grid gap-4 sm:grid-cols-2">
          <a
            href="https://wa.me/34647029400"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 rounded-3xl border border-emerald-500/20 bg-emerald-500/5 p-5 transition-all duration-300 hover:border-emerald-400/40 hover:bg-emerald-500/10"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500/15 text-emerald-300">
              <Phone size={20} />
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-emerald-300">
                WhatsApp
              </p>
              <p className="mt-1 text-sm font-semibold text-ink-50">
                +34 647 029 400
              </p>
            </div>
          </a>
          <a
            href="mailto:aurumrideads@gmail.com"
            className="group flex items-center gap-4 rounded-3xl border border-gold-500/20 bg-gold-500/5 p-5 transition-all duration-300 hover:border-gold-400/40 hover:bg-gold-500/10"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gold-500/15 text-gold-300">
              <Mail size={20} />
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-gold-300">
                Email
              </p>
              <p className="mt-1 text-sm font-semibold text-ink-50">
                aurumrideads@gmail.com
              </p>
            </div>
          </a>
        </div>

        <Reveal delay={100}>
          <form
            onSubmit={handleSubmit}
            className="rounded-3xl glass-dark border border-gold-500/20 p-6 md:p-10 shadow-gold-lg"
          >
            {/* Nombre + Teléfono */}
            <div className="grid md:grid-cols-2 gap-5 mb-5">
              <Field
                icon={<User size={16} />}
                label="Nombre completo *"
                required
                error={fieldErrors.nombre}
              >
                <input
                  type="text"
                  required
                  value={form.nombre}
                  onChange={(e) => update('nombre', e.target.value)}
                  placeholder="Tu nombre"
                  className={inputClass('nombre')}
                />
              </Field>
              <Field
                icon={<Phone size={16} />}
                label="Teléfono"
                error={fieldErrors.telefono}
              >
                <input
                  type="tel"
                  value={form.telefono}
                  onChange={(e) => update('telefono', e.target.value)}
                  placeholder="600 000 000"
                  className={inputClass('telefono')}
                />
              </Field>
            </div>

            {/* Negocio + Sector */}
            <div className="grid md:grid-cols-2 gap-5 mb-5">
              <Field
                icon={<Building2 size={16} />}
                label="Nombre del negocio"
                required
                error={fieldErrors.negocio}
              >
                <input
                  type="text"
                  value={form.negocio}
                  onChange={(e) => update('negocio', e.target.value)}
                  placeholder="Tu negocio"
                  className={inputClass('negocio')}
                  required
                />
              </Field>
              <Field
                icon={<Briefcase size={16} />}
                label="Sector"
                required
                error={fieldErrors.sector}
              >
                <select
                  value={form.sector}
                  onChange={(e) => update('sector', e.target.value)}
                  className={inputClass('sector')}
                  required
                >
                  <option value="">Selecciona un sector</option>
                  {sectores.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </Field>
            </div>

            {/* Email + Zona */}
            <div className="grid md:grid-cols-2 gap-5 mb-5">
              <Field
                icon={<Mail size={16} />}
                label="Email"
                required
                error={fieldErrors.email}
              >
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => update('email', e.target.value)}
                  placeholder="tucorreo@email.com"
                  className={inputClass('email')}
                  required
                />
              </Field>
              <Field
                icon={<MapPin size={16} />}
                label="Zona de interés"
                required
                error={fieldErrors.zona}
              >
                <select
                  value={form.zona}
                  onChange={(e) => update('zona', e.target.value)}
                  className={inputClass('zona')}
                  required
                >
                  <option value="">Selecciona una zona</option>
                  {zonas.map((z) => (
                    <option key={z} value={z}>{z}</option>
                  ))}
                </select>
              </Field>
            </div>

            {/* Plan + Pantallas */}
            <div className="grid md:grid-cols-2 gap-5 mb-5">
              <Field
                icon={<Monitor size={16} />}
                label="Plan de interés"
                required
                error={fieldErrors.plan}
              >
                <select
                  value={form.plan}
                  onChange={(e) => update('plan', e.target.value)}
                  className={inputClass('plan')}
                  required
                >
                  <option value="">Selecciona un plan</option>
                  {planes.map((p) => (
                    <option key={p.value} value={p.value}>
                      {p.label}
                    </option>
                  ))}
                </select>
              </Field>

              <Field
                icon={<Monitor size={16} />}
                label="NÚM. DE PANTALLAS"
                required
                error={fieldErrors.pantallas}
              >
                <div>
                  <select
                    value={form.pantallas || ''}
                    onChange={(e) => update('pantallas', e.target.value)}
                    className={inputClass('pantallas')}
                    required
                  >
                    <option value="">Selecciona cantidad</option>
                    {pantallasOpts.map((n) => (
                      <option key={n} value={n}>
                        {n}
                      </option>
                    ))}
                    <option value="otra">Otra cantidad</option>
                  </select>

                  {form.pantallas === 'otra' && (
                    <div className="mt-3">
                      <input
                        type="number"
                        min={1}
                        value={form.pantallasOtra}
                        onChange={(e) => update('pantallasOtra', e.target.value)}
                        placeholder="Introduce la cantidad"
                        required
                        className={inputClass('pantallas') + ' max-w-xs'}
                      />
                    </div>
                  )}
                </div>
              </Field>
            </div>

            {/* Mensaje */}
            <div className="mb-6">
              <Field
                icon={<MessageSquare size={16} />}
                label="Mensaje"
                required
                error={fieldErrors.mensaje}
              >
                <textarea
                  value={form.mensaje}
                  onChange={(e) => update('mensaje', e.target.value)}
                  placeholder="Cuéntanos qué quieres anunciar..."
                  rows={3}
                  className={`${inputClass('mensaje')} resize-none`}
                  required
                />
              </Field>
            </div>

            {/* Ventaja Aurum reminder */}
            <div className="mb-6 flex items-center gap-3 rounded-xl glass-gold border border-gold-500/20 px-4 py-3">
              <Sparkles size={18} className="text-gold-300 flex-none" />
              <p className="text-sm text-gold-100">
                <span className="font-semibold text-gold-200">Ventaja Aurum:</span>{' '}
                si contratas con el mes empezado, el resto del mes es gratis.
              </p>
            </div>

            {/* Error */}
            {status === 'error' && (
              <div className="mb-5 rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-300">
                {errorMsg}
              </div>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={status === 'loading'}
              className="group flex w-full items-center justify-center gap-2.5 rounded-full bg-gold-gradient px-8 py-4 text-base font-semibold text-ink-950 shadow-gold-lg hover:scale-[1.02] transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {status === 'loading' ? (
                <>
                  <Loader2 size={18} className="animate-spin" />
                  Enviando...
                </>
              ) : (
                <>
                  Enviar solicitud
                  <Send size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
                </>
              )}
            </button>

            <p className="mt-5 text-center text-xs text-ink-500">
              Al enviar aceptas ser contactado por WhatsApp o teléfono por el
              equipo de Aurum Ride Ads.
            </p>
          </form>
        </Reveal>
      </div>

      <style>{`
        .form-input {
          width: 100%;
          background: rgba(10, 10, 10, 0.6);
          border: 1px solid rgba(212, 168, 74, 0.15);
          border-radius: 0.75rem;
          padding: 0.625rem 0.875rem 0.625rem 2.5rem;
          font-size: 0.875rem;
          color: #e7e7e7;
          transition: all 0.3s ease;
        }
        .form-input::placeholder {
          color: #717171;
        }
        .form-input:focus {
          outline: none;
          border-color: rgba(212, 168, 74, 0.5);
          background: rgba(10, 10, 10, 0.8);
          box-shadow: 0 0 0 3px rgba(212, 168, 74, 0.1);
        }
        .form-input option {
          background: #141414;
          color: #e7e7e7;
        }
      `}</style>
    </section>
  );
}

function Field({
  icon,
  label,
  required,
  children,
  error,
}: {
  icon: React.ReactNode;
  label: string;
  required?: boolean;
  children: React.ReactNode;
  error?: string;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-gold-400">
        {label}
        {required && <span className="text-gold-300"> *</span>}
      </span>
      <div className="relative">
        <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gold-500/60">
          {icon}
        </span>
        {children}
      </div>
      {error ? (
        <p className="mt-2 text-xs text-red-400" role="alert">
          {error}
        </p>
      ) : null}
    </label>
  );
}
