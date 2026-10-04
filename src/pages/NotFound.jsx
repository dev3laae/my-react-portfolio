import { Link } from 'react-router-dom'
import { Terminal } from 'lucide-react'

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6 text-center">
      <div>
        <span
          className="inline-flex items-center justify-center w-14 h-14 rounded-xl mb-6"
          style={{ background: 'var(--accent-soft)', color: 'var(--accent)' }}
        >
          <Terminal size={26} />
        </span>
        <p className="font-mono text-sm" style={{ color: 'var(--text-faint)' }}>
          Error 404
        </p>
        <h1 className="mt-2 text-3xl md:text-4xl font-semibold" style={{ color: 'var(--text)' }}>
          This page hasn't been built yet
        </h1>
        <p className="mt-3 max-w-md mx-auto text-sm md:text-base" style={{ color: 'var(--text-muted)' }}>
          The route you followed doesn't exist. Head back to the homepage to keep
          exploring the portfolio.
        </p>
        <Link
          to="/"
          className="inline-flex mt-8 items-center gap-2 rounded-lg px-5 py-3 text-sm font-medium transition-transform hover:scale-[1.03]"
          style={{ background: 'var(--accent)', color: '#14100a' }}
        >
          Back to home
        </Link>
      </div>
    </main>
  )
}
