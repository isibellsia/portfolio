const EMAIL = 'isabel.usheva@gmail.com'

export default function Footer() {
  return (
    <footer className="bg-ink border-t border-white/[0.06] px-6 md:px-20 py-6 flex flex-col md:flex-row justify-between items-center gap-3 text-center md:text-left">
      <p className="text-[0.72rem] tracking-widest uppercase text-white/20">© 2026 Izabel Usheva</p>
      <a
        href={`mailto:${EMAIL}`}
        className="text-[0.78rem] tracking-widest text-white/40 no-underline hover:text-sage-light transition-colors"
      >
        {EMAIL}
      </a>
      <p className="text-[0.72rem] tracking-widest uppercase text-white/20">
        Frontend Developer · AI Enthusiast · Sofia
      </p>
    </footer>
  )
}
