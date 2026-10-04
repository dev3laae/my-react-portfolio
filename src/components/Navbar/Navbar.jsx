import { useState } from 'react'
import { Github, Linkedin, Menu, X, Moon, Sun, Terminal } from 'lucide-react'
import { navLinks, personal } from '../../data/personal'
import { useScrollSpy } from '../../hooks/useScrollSpy'
import { useScrolled } from '../../hooks/useScrolled'
import { useTheme } from '../../context/ThemeContext'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const scrolled = useScrolled(16)
  const { theme, toggleTheme } = useTheme()
  const activeId = useScrollSpy(navLinks.map((l) => l.href.replace('#', '')))

  function handleLinkClick() {
    setMenuOpen(false)
  }

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass border-b' : 'border-b border-transparent'
      }`}
      style={{ borderColor: scrolled ? 'var(--border)' : 'transparent' }}
    >
      <nav className="container-page flex items-center justify-between h-16 md:h-[70px]">
        <a
          href="#home"
          className="flex items-center gap-2 font-semibold tracking-tight text-base"
          style={{ color: 'var(--text)' }}
        >
          <span
            className="flex items-center justify-center w-8 h-8 rounded-md font-mono text-sm"
            style={{ background: 'var(--accent-soft)', color: 'var(--accent)' }}
          >
            <Terminal size={16} strokeWidth={2.2} />
          </span>
          {personal.name}
        </a>

        <ul className="hidden lg:flex items-center gap-1 font-mono text-[13px]">
          {navLinks.map((link) => {
            const id = link.href.replace('#', '')
            const isActive = activeId === id
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="px-3 py-2 rounded-md transition-colors duration-150 relative"
                  style={{
                    color: isActive ? 'var(--accent)' : 'var(--text-muted)',
                  }}
                >
                  {link.label.toLowerCase()}
                  {isActive && (
                    <span
                      className="absolute left-3 right-3 -bottom-[1px] h-[2px] rounded-full"
                      style={{ background: 'var(--accent)' }}
                    />
                  )}
                </a>
              </li>
            )
          })}
        </ul>

        <div className="hidden lg:flex items-center gap-3">
          <button
            onClick={toggleTheme}
            aria-label="Toggle color theme"
            className="w-9 h-9 flex items-center justify-center rounded-md border transition-colors"
            style={{ borderColor: 'var(--border)', color: 'var(--text-muted)' }}
          >
            {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <a
            href={personal.github}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="GitHub profile"
            className="w-9 h-9 flex items-center justify-center rounded-md border transition-colors hover:text-[var(--accent)]"
            style={{ borderColor: 'var(--border)', color: 'var(--text-muted)' }}
          >
            <Github size={16} />
          </a>
          <a
            href={personal.linkedin}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="LinkedIn profile"
            className="w-9 h-9 flex items-center justify-center rounded-md border transition-colors hover:text-[var(--accent)]"
            style={{ borderColor: 'var(--border)', color: 'var(--text-muted)' }}
          >
            <Linkedin size={16} />
          </a>
          <a
            href="#contact"
            className="ml-1 rounded-md px-4 py-2 text-sm font-medium transition-transform hover:scale-[1.03]"
            style={{ background: 'var(--accent)', color: '#14100a' }}
          >
            Let's Talk
          </a>
        </div>

        <button
          className="lg:hidden w-9 h-9 flex items-center justify-center"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          style={{ color: 'var(--text)' }}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {menuOpen && (
        <div
          className="lg:hidden glass border-t"
          style={{ borderColor: 'var(--border)' }}
        >
          <ul className="container-page py-4 flex flex-col gap-1 font-mono text-sm">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={handleLinkClick}
                  className="block py-2.5"
                  style={{ color: 'var(--text-muted)' }}
                >
                  {link.label.toLowerCase()}
                </a>
              </li>
            ))}
          </ul>
          <div className="container-page pb-5 flex items-center gap-3">
            <button
              onClick={toggleTheme}
              className="flex-1 flex items-center justify-center gap-2 rounded-md border py-2.5 text-sm"
              style={{ borderColor: 'var(--border)', color: 'var(--text-muted)' }}
            >
              {theme === 'dark' ? <Sun size={15} /> : <Moon size={15} />}
              {theme === 'dark' ? 'Light mode' : 'Dark mode'}
            </button>
            <a
              href="#contact"
              onClick={handleLinkClick}
              className="flex-1 text-center rounded-md py-2.5 text-sm font-medium"
              style={{ background: 'var(--accent)', color: '#14100a' }}
            >
              Let's Talk
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
