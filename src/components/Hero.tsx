const scrollTo = (id: string) => {
  const el = document.getElementById(id)
  if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.pageYOffset - 80, behavior: 'smooth' })
}

export default function Hero() {
  return (
    <section className="min-h-[88vh] grid grid-cols-1 md:grid-cols-2 pt-20 relative overflow-hidden theme-transition" style={{ background: 'var(--bg)' }}>
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 60% 80% at 75% 50%, color-mix(in srgb, var(--accent-mid) 8%, transparent) 0%, transparent 70%)' }}
      />

      {/* Left */}
      <div className="flex flex-col justify-center px-6 md:pl-24 md:pr-12 py-10 md:py-4 animate-fadeLeft">
        <div className="text-xs tracking-[0.2em] uppercase mb-4 flex items-center gap-3 theme-transition" style={{ color: 'var(--accent-mid)' }}>
          <span className="w-10 h-px block" style={{ background: 'var(--accent-mid)' }} />
          Curious mind, clean code
        </div>

        <h1 className="font-cormorant font-light leading-[1.08] text-[clamp(3rem,8vw,5.5rem)] mb-5 theme-transition" style={{ color: 'var(--fg)' }}>
          Izabel<br />
          <em className="italic" style={{ color: 'var(--accent)' }}>Usheva</em>
        </h1>

        <p className="text-base max-w-md leading-[1.75] mb-10 theme-transition" style={{ color: 'var(--fg-soft)' }}>
          Frontend developer with 3.5 years of experience — always learning, always building.
          Passionate about React, AI-powered apps, and the web's potential.
          Currently exploring backend and what AI can do for everyday products.
          In German, English, and Bulgarian. Based in Sofia.
        </p>

        <div className="flex gap-4 flex-wrap">
          <button
            onClick={() => scrollTo('contact')}
            className="text-white px-8 py-3 text-xs tracking-widest uppercase transition-all hover:-translate-y-0.5"
            style={{ background: 'var(--accent)' }}
            onMouseEnter={e => (e.currentTarget.style.background = 'var(--fg)')}
            onMouseLeave={e => (e.currentTarget.style.background = 'var(--accent)')}
          >
            Contact
          </button>
          <button
            onClick={() => scrollTo('experience')}
            className="px-8 py-3 text-xs tracking-widest uppercase transition-all hover:-translate-y-0.5 border theme-transition"
            style={{ color: 'var(--fg-soft)', borderColor: 'var(--line)' }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.color = 'var(--accent)' }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--line)'; e.currentTarget.style.color = 'var(--fg-soft)' }}
          >
            See my work
          </button>
        </div>
      </div>

      {/* Right — photo */}
      <div className="flex items-center justify-center px-6 md:pr-24 md:pl-8 py-10 md:py-4 animate-fadeRight">
        <div className="relative w-[280px] h-[350px] md:w-[340px] md:h-[420px] group">
          <div className="absolute top-[18px] -right-[18px] w-full h-full border transition-all duration-300 group-hover:translate-x-1.5 group-hover:translate-y-1.5"
            style={{ borderColor: 'var(--accent-light)' }} />
          <div className="relative z-10 w-full h-full overflow-hidden">
            <img
              src="/profile-img.jpg"
              alt="Izabel Usheva"
              className="w-full h-full object-cover object-top"
              onError={(e) => {
                const t = e.currentTarget as HTMLImageElement
                t.style.display = 'none'
                const p = t.parentElement!
                p.style.background = 'linear-gradient(135deg, var(--accent-light), var(--accent-mid))'
                p.innerHTML = '<span style="font-family:Cormorant Garamond,serif;font-size:5rem;color:rgba(255,255,255,0.4);display:flex;align-items:center;justify-content:center;width:100%;height:100%">IU</span>'
              }}
            />
          </div>
          <div className="absolute -bottom-4 -left-8 z-20 border px-5 py-3 shadow-md theme-transition"
            style={{ background: 'var(--bg)', borderColor: 'var(--line)' }}>
            <span className="block text-[0.68rem] tracking-[0.15em] uppercase mb-1" style={{ color: 'var(--muted)' }}>Based in</span>
            <strong className="font-cormorant text-lg font-normal" style={{ color: 'var(--accent)' }}>Sofia, BG</strong>
          </div>
        </div>
      </div>

      {/* Language pills — desktop */}
      <div className="hidden md:flex absolute bottom-12 left-24 gap-5 animate-fadeUp">
        {['🇩🇪 German C1', '🇬🇧 English C1', '🇧🇬 Bulgarian'].map(lang => (
          <div key={lang} className="text-[0.7rem] tracking-widest uppercase border px-3 py-1.5 theme-transition"
            style={{ color: 'var(--muted)', borderColor: 'var(--line)', background: 'var(--bg)' }}>
            {lang}
          </div>
        ))}
      </div>

      {/* Language pills — mobile */}
      <div className="md:hidden flex gap-3 flex-wrap px-6 pb-10">
        {['🇩🇪 German C1', '🇬🇧 English C1', '🇧🇬 Bulgarian'].map(lang => (
          <div key={lang} className="text-[0.7rem] tracking-widest uppercase border px-3 py-1.5 theme-transition"
            style={{ color: 'var(--muted)', borderColor: 'var(--line)', background: 'var(--bg)' }}>
            {lang}
          </div>
        ))}
      </div>
    </section>
  )
}
