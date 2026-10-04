import { motion } from 'framer-motion'
import { ArrowRight, Github, Linkedin, MapPin } from 'lucide-react'
import { personal } from '../../data/personal'
import CodePanel from './CodePanel'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
}
const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

export default function Hero() {
  return (
    <section
      id="home"
      className="relative pt-32 pb-24 md:pt-44 md:pb-32 overflow-hidden"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 right-[-10%] w-[560px] h-[560px] rounded-full blur-3xl opacity-[0.14]"
        style={{ background: 'radial-gradient(circle, var(--accent), transparent 70%)' }}
      />

      <div className="container-page grid lg:grid-cols-[1.1fr_0.9fr] gap-14 items-center">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.div
            variants={item}
            className="inline-flex items-center gap-2 font-mono text-xs px-3 py-1.5 rounded-full border mb-6"
            style={{ borderColor: 'var(--border)', color: 'var(--text-muted)' }}
          >
            <MapPin size={13} />
            {personal.location}
          </motion.div>

          <motion.h1
            variants={item}
            className="text-[2.5rem] leading-[1.1] sm:text-5xl md:text-[3.4rem] font-semibold tracking-tight text-balance"
            style={{ color: 'var(--text)' }}
          >
            Hi, I'm {personal.name}
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-3 text-xl md:text-2xl font-mono"
            style={{ color: 'var(--accent)' }}
          >
            {personal.role}
          </motion.p>

          <motion.p
            variants={item}
            className="mt-6 text-base md:text-lg leading-relaxed max-w-xl"
            style={{ color: 'var(--text-muted)' }}
          >
            {personal.tagline}
          </motion.p>

          <motion.div variants={item} className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-lg px-5 py-3 text-sm font-medium transition-transform hover:scale-[1.03] active:scale-[0.98]"
              style={{ background: 'var(--accent)', color: '#14100a' }}
            >
              View My Work
              <ArrowRight size={16} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-lg px-5 py-3 text-sm font-medium border transition-colors hover:bg-[var(--surface-hover)]"
              style={{ borderColor: 'var(--border-strong)', color: 'var(--text)' }}
            >
              Contact Me
            </a>
          </motion.div>

          <motion.div variants={item} className="mt-9 flex items-center gap-4">
            <a
              href={personal.github}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="GitHub profile"
              className="w-10 h-10 flex items-center justify-center rounded-lg border transition-colors hover:text-[var(--accent)]"
              style={{ borderColor: 'var(--border)', color: 'var(--text-muted)' }}
            >
              <Github size={18} />
            </a>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="LinkedIn profile"
              className="w-10 h-10 flex items-center justify-center rounded-lg border transition-colors hover:text-[var(--accent)]"
              style={{ borderColor: 'var(--border)', color: 'var(--text-muted)' }}
            >
              <Linkedin size={18} />
            </a>
          </motion.div>
        </motion.div>

        <div className="flex justify-center lg:justify-end">
          <CodePanel />
        </div>
      </div>
    </section>
  )
}
