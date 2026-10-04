import Reveal from './Reveal'

/**
 * Every section opens with a small "file tab" label (e.g. about.jsx) instead of
 * a generic tracked-out eyebrow — a nod to the developer subject matter.
 */
export default function SectionHeader({ file, title, description, align = 'left' }) {
  const isCenter = align === 'center'

  return (
    <Reveal className={isCenter ? 'text-center mx-auto max-w-2xl' : ''}>
      <div className={`tab-label ${isCenter ? 'mx-auto' : ''}`}>
        <span className="dot" aria-hidden="true" />
        {file}
      </div>
      <div className="section-heading">
        <h2 className="text-3xl md:text-[2.5rem] font-semibold tracking-tight text-balance" style={{ color: 'var(--text)' }}>
          {title}
        </h2>
        {description && (
          <p className="mt-3 text-base leading-relaxed max-w-xl" style={{ color: 'var(--text-muted)' }}>
            {description}
          </p>
        )}
      </div>
    </Reveal>
  )
}
