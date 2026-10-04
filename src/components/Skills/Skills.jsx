import SectionHeader from '../shared/SectionHeader'
import Reveal from '../shared/Reveal'
import SkillIcon from './SkillIcon'
import { skillGroups } from '../../data/skills'

export default function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32" style={{ background: 'var(--bg-elevated)' }}>
      <div className="container-page">
        <SectionHeader
          file="skills.js"
          title="Technologies I work with"
          description="Organized the way I'd structure a real project — by role, not by buzzword."
        />

        <div className="mt-14 grid md:grid-cols-2 gap-6">
          {skillGroups.map((group, gi) => (
            <Reveal key={group.id} delay={gi * 90}>
              <div
                className="rounded-xl border overflow-hidden h-full"
                style={{ borderColor: 'var(--border)', background: 'var(--surface)' }}
              >
                <div
                  className="flex items-center justify-between px-5 py-3 border-b"
                  style={{ borderColor: 'var(--border)' }}
                >
                  <h3 className="text-sm font-semibold" style={{ color: 'var(--text)' }}>
                    {group.title}
                  </h3>
                  <span className="font-mono text-xs" style={{ color: 'var(--text-faint)' }}>
                    {group.file}
                  </span>
                </div>

                <ul className="p-5 grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {group.skills.map((skill) => (
                    <li
                      key={skill.name}
                      tabIndex={0}
                      className="group flex flex-col items-center gap-2 rounded-lg border p-3.5 text-center transition-all duration-200 cursor-default hover:-translate-y-0.5"
                      style={{ borderColor: 'var(--border)', background: 'var(--bg-elevated)' }}
                    >
                      <span
                        className="transition-colors duration-200 group-hover:text-[var(--accent)] group-focus:text-[var(--accent)]"
                        style={{ color: 'var(--text-muted)' }}
                      >
                        <SkillIcon name={skill.icon} />
                      </span>
                      <span className="text-xs leading-tight" style={{ color: 'var(--text)' }}>
                        {skill.name}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
