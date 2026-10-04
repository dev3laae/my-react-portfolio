import SectionHeader from '../shared/SectionHeader'
import Reveal from '../shared/Reveal'
import { services } from '../../data/experience'
import { iconMap } from '../../data/iconMap'

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-32" style={{ background: 'var(--bg-elevated)' }}>
      <div className="container-page">
        <SectionHeader
          file="services.jsx"
          title="What I can help with"
          description="Focused on front-end work, from first component to finished product."
        />

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon] || iconMap.Code2
            return (
              <Reveal key={service.title} delay={i * 90}>
                <div
                  className="h-full rounded-xl border p-6 transition-all duration-200 hover:-translate-y-1"
                  style={{ borderColor: 'var(--border)', background: 'var(--surface)' }}
                >
                  <span
                    className="inline-flex items-center justify-center w-11 h-11 rounded-lg"
                    style={{ background: 'var(--accent-soft)', color: 'var(--accent)' }}
                  >
                    <Icon size={20} strokeWidth={1.8} />
                  </span>
                  <h3 className="mt-4 text-base font-semibold" style={{ color: 'var(--text)' }}>
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                    {service.description}
                  </p>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
