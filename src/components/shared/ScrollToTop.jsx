import { ArrowUp } from 'lucide-react'
import { useScrolled } from '../../hooks/useScrolled'

export default function ScrollToTop() {
  const visible = useScrolled(480)

  if (!visible) return null

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Scroll to top"
      className="fixed bottom-6 right-6 z-40 w-11 h-11 flex items-center justify-center rounded-full border shadow-lg transition-transform hover:-translate-y-1"
      style={{ background: 'var(--accent)', color: '#14100a', borderColor: 'var(--accent)' }}
    >
      <ArrowUp size={18} />
    </button>
  )
}
