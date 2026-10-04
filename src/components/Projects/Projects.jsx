import { useMemo, useState } from 'react'
import SectionHeader from '../shared/SectionHeader'
import ProjectCard from './ProjectCard'
import { projects, filters } from '../../data/projects'

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All')

  const visibleProjects = useMemo(() => {
    if (activeFilter === 'All') return projects
    return projects.filter((p) => p.categories.includes(activeFilter))
  }, [activeFilter])

  return (
    <section id="projects" className="py-24 md:py-32">
      <div className="container-page">
        <SectionHeader
          file="projects.jsx"
          title="Things I've built"
          description="A mix of front-end apps, API-driven tools, and one data analysis project."
        />

        <div className="mt-10 flex flex-wrap gap-2" role="tablist" aria-label="Filter projects by category">
          {filters.map((filter) => {
            const isActive = filter === activeFilter
            return (
              <button
                key={filter}
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveFilter(filter)}
                className="font-mono text-xs px-3.5 py-2 rounded-md border transition-colors duration-150"
                style={{
                  borderColor: isActive ? 'var(--accent)' : 'var(--border)',
                  color: isActive ? 'var(--accent)' : 'var(--text-muted)',
                  background: isActive ? 'var(--accent-soft)' : 'transparent',
                }}
              >
                {filter}
              </button>
            )
          })}
        </div>

        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleProjects.map((project, i) => (
            <ProjectCard key={project.id} project={project} delay={i * 70} />
          ))}
        </div>

        {visibleProjects.length === 0 && (
          <p className="mt-10 text-sm" style={{ color: 'var(--text-muted)' }}>
            No projects in this category yet.
          </p>
        )}
      </div>
    </section>
  )
}
