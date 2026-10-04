import { CheckCircle2 } from 'lucide-react'
import SectionHeader from '../shared/SectionHeader'
import Reveal from '../shared/Reveal'
import { personal } from '../../data/personal'
import { aboutHighlights, aboutStats } from '../../data/experience'

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="container-page">
        <SectionHeader
          file="about.jsx"
          title="A front-end developer who cares about the details"
          description="The story behind the code."
        />

        <div className="mt-12 grid lg:grid-cols-[1.15fr_0.85fr] gap-12 items-start">
          <Reveal delay={80}>
            <p className="text-base md:text-lg leading-relaxed" style={{ color: 'var(--text-muted)' }}>
              I'm a Front-End Developer with {personal.experienceYears} years of freelance
              experience, focused on building modern, responsive, and user-friendly web
              applications. My background in {personal.education} gives me a practical,
              structured way of thinking about how interfaces should work — not just how
              they should look.
            </p>
            <p className="mt-5 text-base md:text-lg leading-relaxed" style={{ color: 'var(--text-muted)' }}>
              Day to day, I work with modern JavaScript, React.js, and Next.js to turn
              designs into fast, accessible interfaces, and I integrate REST APIs to
              connect front-ends to real data. I'm a continuous learner with a growing
              interest in data analysis, which shapes how I think about the "why" behind
              user-facing decisions.
            </p>

            <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
              {aboutHighlights.map((highlight) => (
                <li key={highlight} className="flex items-center gap-2.5 text-sm" style={{ color: 'var(--text)' }}>
                  <CheckCircle2 size={16} style={{ color: 'var(--accent)' }} />
                  {highlight}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={160}>
            <div className="grid grid-cols-2 gap-4">
              {aboutStats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl border p-5"
                  style={{ borderColor: 'var(--border)', background: 'var(--surface)' }}
                >
                  <p className="text-xl md:text-2xl font-semibold" style={{ color: 'var(--accent)' }}>
                    {stat.value}
                  </p>
                  <p className="mt-1.5 text-sm" style={{ color: 'var(--text-muted)' }}>
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
