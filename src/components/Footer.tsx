const EMAIL = 'isabel.usheva@gmail.com'

export default function Footer() {
  return (
    <footer className="px-6 md:px-20 py-6 flex flex-col md:flex-row justify-between items-center gap-3 text-center md:text-left theme-transition"
      style={{ background: 'var(--dark-bg)', borderTop: '1px solid var(--dark-line)' }}>
      <p className="text-[0.72rem] tracking-widest uppercase" style={{ color: 'rgba(255,255,255,0.2)' }}>© 2026 Izabel Usheva</p>
      <a href={`mailto:${EMAIL}`} className="text-[0.78rem] tracking-widest no-underline transition-colors"
        style={{ color: 'rgba(255,255,255,0.4)' }}
        onMouseEnter={e => (e.currentTarget.style.color = 'var(--accent-light)')}
        onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.4)')}>
        {EMAIL}
      </a>
      <p className="text-[0.72rem] tracking-widest uppercase" style={{ color: 'rgba(255,255,255,0.2)' }}>
        Frontend Developer · AI Enthusiast · Sofia
      </p>
    </footer>
  )
}
