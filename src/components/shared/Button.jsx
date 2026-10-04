const base =
  'inline-flex items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font-medium transition-all duration-200 focus-visible:outline-2'

const variants = {
  primary:
    'text-[#14100a] shadow-[0_1px_0_rgba(255,255,255,0.2)_inset] hover:brightness-110 active:scale-[0.98]',
  ghost:
    'border hover:bg-[var(--surface-hover)] active:scale-[0.98]',
}

export default function Button({
  as = 'a',
  href,
  onClick,
  variant = 'primary',
  className = '',
  children,
  ...rest
}) {
  const Tag = as
  const style =
    variant === 'primary'
      ? { background: 'var(--accent)' }
      : { borderColor: 'var(--border-strong)', color: 'var(--text)' }

  return (
    <Tag
      href={href}
      onClick={onClick}
      className={`${base} ${variants[variant]} ${className}`}
      style={style}
      {...rest}
    >
      {children}
    </Tag>
  )
}
