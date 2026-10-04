import { GraduationCap, Award } from 'lucide-react'
import SectionHeader from '../shared/SectionHeader'
import Reveal from '../shared/Reveal'
import { education, trainings } from '../../data/experience'

export default function Education() {
  return (
    <section id="education" className="py-24 md:py-32">
      <div className="container-page">
        <SectionHeader file="education.jsx" title="Education & training" />

        <div className="mt-12 grid md:grid-cols-2 gap-6">
          <Reveal>
            <div
              className="h-full rounded-xl border p-6"
              style={{ borderColor: 'var(--border)', background: 'var(--surface)' }}
            >
              <span
                className="inline-flex items-center justify-center w-11 h-11 rounded-lg"
                style={{ background: 'var(--accent-soft)', color: 'var(--accent)' }}
              >
                <GraduationCap size={20} />
              </span>
              <h3 className="mt-4 text-lg font-semibold" style={{ color: 'var(--text)' }}>
                {education.degree}
              </h3>
              <p className="mt-1.5 text-sm" style={{ color: 'var(--text-muted)' }}>
                {education.institution}
              </p>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div
              className="h-full rounded-xl border p-6"
              style={{ borderColor: 'var(--border)', background: 'var(--surface)' }}
            >
              <span
                className="inline-flex items-center justify-center w-11 h-11 rounded-lg"
                style={{ background: 'var(--accent-soft)', color: 'var(--accent)' }}
              >
                <Award size={20} />
              </span>
              <h3 className="mt-4 text-lg font-semibold" style={{ color: 'var(--text)' }}>
                Additional training
              </h3>
              <ul className="mt-3 space-y-2.5">
                {trainings.map((t) => (
                  <li key={t.name} className="text-sm" style={{ color: 'var(--text-muted)' }}>
                    <span style={{ color: 'var(--text)' }}>{t.name}</span> — {t.note}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
