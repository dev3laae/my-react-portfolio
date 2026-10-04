import { useState } from 'react'
import { Mail, Phone, Github, Linkedin, Send, CheckCircle2 } from 'lucide-react'
import SectionHeader from '../shared/SectionHeader'
import Reveal from '../shared/Reveal'
import { personal } from '../../data/personal'

const contactLinks = [
  { label: 'Email', value: personal.email, href: `mailto:${personal.email}`, icon: Mail },
  { label: 'Phone', value: personal.phone, href: `tel:${personal.phone}`, icon: Phone },
  { label: 'LinkedIn', value: 'alaa-elsawy', href: personal.linkedin, icon: Linkedin, external: true },
  { label: 'GitHub', value: 'dev3laae', href: personal.github, icon: Github, external: true },
]

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })

  function handleChange(e) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    // No backend is wired up yet — this opens the visitor's mail client instead.
    const body = `Name: ${form.name}%0AEmail: ${form.email}%0A%0A${encodeURIComponent(form.message)}`
    window.location.href = `mailto:${personal.email}?subject=${encodeURIComponent(
      form.subject || 'Portfolio inquiry'
    )}&body=${body}`
    setSubmitted(true)
  }

  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="container-page">
        <SectionHeader file="contact.jsx" title="Let's build something great together" />

        <div className="mt-12 grid lg:grid-cols-[0.9fr_1.1fr] gap-10">
          <Reveal>
            <p className="text-base leading-relaxed max-w-md" style={{ color: 'var(--text-muted)' }}>
              Have a project in mind, or an opening for a front-end developer? I'm
              always happy to talk through the details — reach out directly or use the
              form.
            </p>

            <ul className="mt-8 space-y-3">
              {contactLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target={link.external ? '_blank' : undefined}
                    rel={link.external ? 'noreferrer noopener' : undefined}
                    className="flex items-center gap-3.5 rounded-lg border p-4 transition-colors hover:border-[var(--accent)]"
                    style={{ borderColor: 'var(--border)', background: 'var(--surface)' }}
                  >
                    <span
                      className="flex items-center justify-center w-10 h-10 rounded-lg shrink-0"
                      style={{ background: 'var(--accent-soft)', color: 'var(--accent)' }}
                    >
                      <link.icon size={17} />
                    </span>
                    <span>
                      <span className="block text-xs" style={{ color: 'var(--text-faint)' }}>
                        {link.label}
                      </span>
                      <span className="block text-sm font-medium" style={{ color: 'var(--text)' }}>
                        {link.value}
                      </span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={120}>
            <form
              onSubmit={handleSubmit}
              className="rounded-xl border p-6 md:p-7 space-y-5"
              style={{ borderColor: 'var(--border)', background: 'var(--surface)' }}
            >
              <div className="grid sm:grid-cols-2 gap-5">
                <Field label="Name" name="name" value={form.name} onChange={handleChange} required />
                <Field
                  label="Email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <Field label="Subject" name="subject" value={form.subject} onChange={handleChange} />
              <div>
                <label htmlFor="message" className="block text-xs font-mono mb-2" style={{ color: 'var(--text-muted)' }}>
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  value={form.message}
                  onChange={handleChange}
                  className="w-full rounded-lg border px-4 py-3 text-sm resize-none transition-colors focus:border-[var(--accent)]"
                  style={{ borderColor: 'var(--border-strong)', background: 'var(--bg-elevated)', color: 'var(--text)' }}
                />
              </div>

              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-lg px-5 py-3 text-sm font-medium transition-transform hover:scale-[1.02] active:scale-[0.98]"
                style={{ background: 'var(--accent)', color: '#14100a' }}
              >
                {submitted ? <CheckCircle2 size={16} /> : <Send size={16} />}
                {submitted ? 'Opening your mail app…' : 'Send Message'}
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

function Field({ label, name, type = 'text', value, onChange, required }) {
  return (
    <div>
      <label htmlFor={name} className="block text-xs font-mono mb-2" style={{ color: 'var(--text-muted)' }}>
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        value={value}
        onChange={onChange}
        className="w-full rounded-lg border px-4 py-3 text-sm transition-colors focus:border-[var(--accent)]"
        style={{ borderColor: 'var(--border-strong)', background: 'var(--bg-elevated)', color: 'var(--text)' }}
      />
    </div>
  )
}
