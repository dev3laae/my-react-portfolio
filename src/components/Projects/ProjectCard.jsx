import { ExternalLink, Github } from 'lucide-react'
import Reveal from '../shared/Reveal'

function LinkButton({ href, disabled, children, icon: Icon }) {
  if (disabled) {
    return (
      <span
        className="inline-flex items-center gap-1.5 text-sm font-mono px-3 py-1.5 rounded-md border cursor-not-allowed opacity-60"
        style={{ borderColor: 'var(--border)', color: 'var(--text-faint)' }}
        title="Link not available yet"
      >
        <Icon size={14} />
        {children}
      </span>
    )
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer noopener"
      className="inline-flex items-center gap-1.5 text-sm font-mono px-3 py-1.5 rounded-md border transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
      style={{ borderColor: 'var(--border)', color: 'var(--text)' }}
    >
      <Icon size={14} />
      {children}
    </a>
  )
}

export default function ProjectCard({ project, delay = 0 }) {
  const demoDisabled = project.demo === 'LIVE_DEMO_URL_HERE'
  const repoDisabled = project.repo === 'GITHUB_URL_HERE'

  return (
    <Reveal delay={delay}>
      <article
        className="group rounded-xl border overflow-hidden h-full flex flex-col transition-transform duration-300 hover:-translate-y-1"
        style={{ borderColor: 'var(--border)', background: 'var(--surface)' }}
      >
        <div
          className="relative h-40 flex items-center justify-center border-b overflow-hidden"
          style={{
            borderColor: 'var(--border)',
            background:
              'linear-gradient(135deg, var(--bg-elevated) 0%, var(--surface) 60%)',
          }}
        >
          <span
            className="font-mono text-xs px-2 py-1 rounded absolute top-3 left-3"
            style={{ background: 'var(--accent-soft)', color: 'var(--accent)' }}
          >
            {project.categories[0]}
          </span>
          <span
            className="font-mono text-2xl tracking-tight opacity-30 group-hover:opacity-50 transition-opacity"
            style={{ color: 'var(--text)' }}
          >
            {'</>'}
          </span>
        </div>

        <div className="p-5 flex flex-col flex-1">
          <h3 className="text-base font-semibold" style={{ color: 'var(--text)' }}>
            {project.name}
          </h3>
          <p className="mt-2 text-sm leading-relaxed flex-1" style={{ color: 'var(--text-muted)' }}>
            {project.description}
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span
                key={t}
                className="font-mono text-[11px] px-2 py-1 rounded border"
                style={{ borderColor: 'var(--border)', color: 'var(--text-muted)' }}
              >
                {t}
              </span>
            ))}
          </div>

          <div className="mt-5 flex items-center gap-2.5 pt-4 border-t" style={{ borderColor: 'var(--border)' }}>
            <LinkButton href={project.demo} disabled={demoDisabled} icon={ExternalLink}>
              Live Demo
            </LinkButton>
            <LinkButton href={project.repo} disabled={repoDisabled} icon={Github}>
              Code
            </LinkButton>
          </div>
        </div>
      </article>
    </Reveal>
  )
}
