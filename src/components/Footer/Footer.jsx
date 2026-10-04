import { Github, Linkedin, Mail, Phone, Terminal } from 'lucide-react'
import { personal, navLinks } from '../../data/personal'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t" style={{ borderColor: 'var(--border)', background: 'var(--bg-elevated)' }}>
      <div className="container-page py-14">
        <div className="grid md:grid-cols-[1.2fr_1fr_1fr] gap-10">
          <div>
            <a href="#home" className="flex items-center gap-2 font-semibold text-base" style={{ color: 'var(--text)' }}>
              <span
                className="flex items-center justify-center w-8 h-8 rounded-md"
                style={{ background: 'var(--accent-soft)', color: 'var(--accent)' }}
              >
                <Terminal size={16} />
              </span>
              {personal.name}
            </a>
            <p className="mt-3 text-sm max-w-xs" style={{ color: 'var(--text-muted)' }}>
              {personal.role} — building modern, responsive, and user-friendly web
              applications.
            </p>
          </div>

          <div>
            <h4 className="font-mono text-xs mb-3" style={{ color: 'var(--text-faint)' }}>
              navigate
            </h4>
            <ul className="space-y-2">
              {navLinks.slice(0, 5).map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm transition-colors hover:text-[var(--accent)]" style={{ color: 'var(--text-muted)' }}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-xs mb-3" style={{ color: 'var(--text-faint)' }}>
              contact
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a href={`mailto:${personal.email}`} className="flex items-center gap-2 text-sm transition-colors hover:text-[var(--accent)]" style={{ color: 'var(--text-muted)' }}>
                  <Mail size={14} /> {personal.email}
                </a>
              </li>
              <li>
                <a href={`tel:${personal.phone}`} className="flex items-center gap-2 text-sm transition-colors hover:text-[var(--accent)]" style={{ color: 'var(--text-muted)' }}>
                  <Phone size={14} /> {personal.phone}
                </a>
              </li>
              <li className="flex items-center gap-3 pt-1.5">
                <a
                  href={personal.github}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="GitHub profile"
                  className="w-9 h-9 flex items-center justify-center rounded-md border transition-colors hover:text-[var(--accent)]"
                  style={{ borderColor: 'var(--border)', color: 'var(--text-muted)' }}
                >
                  <Github size={15} />
                </a>
                <a
                  href={personal.linkedin}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="LinkedIn profile"
                  className="w-9 h-9 flex items-center justify-center rounded-md border transition-colors hover:text-[var(--accent)]"
                  style={{ borderColor: 'var(--border)', color: 'var(--text-muted)' }}
                >
                  <Linkedin size={15} />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div
          className="mt-12 pt-6 border-t flex flex-col sm:flex-row items-center justify-between gap-3 text-xs"
          style={{ borderColor: 'var(--border)', color: 'var(--text-faint)' }}
        >
          <p>© {year} {personal.name}. All rights reserved.</p>
          <p className="font-mono">Built with React, Vite & Tailwind CSS</p>
        </div>
      </div>
    </footer>
  )
}
