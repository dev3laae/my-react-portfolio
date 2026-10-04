import { Check } from 'lucide-react'
import SectionHeader from '../shared/SectionHeader'
import Reveal from '../shared/Reveal'
import { experience } from '../../data/experience'

export default function Experience() {
  return (
    <section id="experience" className="py-24 md:py-32" style={{ background: 'var(--bg-elevated)' }}>
      <div className="container-page">
        <SectionHeader
          file="experience.jsx"
          title="Experience"
          description="Freelance work, end to end."
        />

        <div className="mt-14 max-w-2xl">
          {experience.map((job, i) => (
            <Reveal key={job.role} delay={i * 100}>
              <div className="relative pl-8 border-l-2" style={{ borderColor: 'var(--border)' }}>
                <span
                  className="absolute -left-[9px] top-0 w-4 h-4 rounded-full border-4"
                  style={{ background: 'var(--accent)', borderColor: 'var(--bg-elevated)' }}
                />
                <p className="font-mono text-xs" style={{ color: 'var(--accent)' }}>
                  {job.period}
                </p>
                <h3 className="mt-1.5 text-xl font-semibold" style={{ color: 'var(--text)' }}>
                  {job.role}
                </h3>

                <ul className="mt-5 space-y-3">
                  {job.points.map((point) => (
                    <li key={point} className="flex items-start gap-2.5 text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                      <Check size={15} className="mt-0.5 shrink-0" style={{ color: 'var(--accent)' }} />
                      {point}
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
