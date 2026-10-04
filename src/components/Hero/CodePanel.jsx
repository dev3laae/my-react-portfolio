import { motion } from 'framer-motion'
import { personal } from '../../data/personal'

const line = {
  hidden: { opacity: 0, x: -8 },
  show: { opacity: 1, x: 0 },
}

export default function CodePanel() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className="w-full max-w-md rounded-xl border overflow-hidden"
      style={{ borderColor: 'var(--border)', background: 'var(--bg-elevated)', boxShadow: '0 24px 60px -20px var(--shadow-color)' }}
    >
      <div
        className="flex items-center gap-2 px-4 py-3 border-b"
        style={{ borderColor: 'var(--border)', background: 'var(--surface)' }}
      >
        <span className="w-3 h-3 rounded-full" style={{ background: '#ef6a5f' }} />
        <span className="w-3 h-3 rounded-full" style={{ background: '#f4bf4f' }} />
        <span className="w-3 h-3 rounded-full" style={{ background: '#61c454' }} />
        <span className="ml-3 font-mono text-xs" style={{ color: 'var(--text-faint)' }}>
          developer.js
        </span>
      </div>

      <motion.pre
        variants={{ show: { transition: { staggerChildren: 0.07, delayChildren: 0.6 } } }}
        initial="hidden"
        animate="show"
        className="font-mono text-[13px] md:text-sm leading-[1.9] p-5 m-0 overflow-x-auto"
      >
        <motion.div variants={line}>
          <span style={{ color: 'var(--code-pink)' }}>const</span>{' '}
          <span style={{ color: 'var(--code-blue)' }}>developer</span> = {'{'}
        </motion.div>
        <motion.div variants={line} className="pl-4">
          name: <span style={{ color: 'var(--code-green)' }}>'{personal.name}'</span>,
        </motion.div>
        <motion.div variants={line} className="pl-4">
          role: <span style={{ color: 'var(--code-green)' }}>'{personal.role}'</span>,
        </motion.div>
        <motion.div variants={line} className="pl-4">
          focus: [<span style={{ color: 'var(--code-green)' }}>'React'</span>,{' '}
          <span style={{ color: 'var(--code-green)' }}>'Next.js'</span>,{' '}
          <span style={{ color: 'var(--code-green)' }}>'Tailwind'</span>],
        </motion.div>
        <motion.div variants={line} className="pl-4">
          basedIn: <span style={{ color: 'var(--code-green)' }}>'{personal.location}'</span>,
        </motion.div>
        <motion.div variants={line} className="pl-4">
          <span style={{ color: 'var(--accent)' }}>build</span>: () {'=>'} {'{'}
        </motion.div>
        <motion.div variants={line} className="pl-8" style={{ color: 'var(--text-muted)' }}>
          return <span style={{ color: 'var(--code-blue)' }}>'clean, fast, accessible UI'</span>
        </motion.div>
        <motion.div variants={line} className="pl-4">
          {'}'},
        </motion.div>
        <motion.div variants={line}>{'}'}</motion.div>
      </motion.pre>
    </motion.div>
  )
}
