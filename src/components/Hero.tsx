const scrollTo = (id: string) => {
  const el = document.getElementById(id)
  if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.pageYOffset - 80, behavior: 'smooth' })
}

export default function Hero() {
  return (
    <section className="min-h-[88vh] grid grid-cols-1 md:grid-cols-2 pt-20 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 60% 80% at 75% 50%, rgba(122,158,142,0.08) 0%, transparent 70%)' }}
      />

      {/* Left */}
      <div className="flex flex-col justify-center px-6 md:pl-24 md:pr-12 py-10 md:py-4 animate-fadeLeft">
        <div className="text-xs tracking-[0.2em] uppercase text-sage mb-4 flex items-center gap-3">
          <span className="w-10 h-px bg-sage block" />
          Available for freelance
        </div>

        <h1 className="font-cormorant font-light leading-[1.08] text-[clamp(3rem,8vw,5.5rem)] text-ink mb-5">
          Izabel<br />
          <em className="italic text-sage-dark">Usheva</em>
        </h1>

        <p className="text-base text-ink-soft max-w-md leading-[1.75] mb-10">
          Frontend developer with 3.5 years of production experience, expanding into backend
          (Node.js, Express) and AI-powered applications. I build fast, modern web apps —
          and I'm deeply passionate about what AI can do for the web.
          In German, English, and Bulgarian. Based in Sofia.
        </p>

        <div className="flex gap-4 flex-wrap">
          <button
            onClick={() => scrollTo('contact')}
            className="bg-sage-dark text-white px-8 py-3 text-xs tracking-widest uppercase hover:bg-ink transition-all hover:-translate-y-0.5"
          >
            Work with me
          </button>
          <button
            onClick={() => scrollTo('experience')}
            className="px-8 py-3 text-xs tracking-widest uppercase text-ink-soft border border-line hover:border-sage hover:text-sage-dark transition-all hover:-translate-y-0.5"
          >
            See my work
          </button>
        </div>
      </div>

      {/* Right — photo */}
      <div className="flex items-center justify-center px-6 md:pr-24 md:pl-8 py-10 md:py-4 animate-fadeRight">
        <div className="relative w-[280px] h-[350px] md:w-[340px] md:h-[420px] group">
          <div className="absolute top-[18px] -right-[18px] w-full h-full border border-sage-light transition-transform duration-300 group-hover:translate-x-1.5 group-hover:translate-y-1.5" />
          <div className="relative z-10 w-full h-full overflow-hidden">
            <img
              src="/profile-img.jpg"
              alt="Izabel Usheva"
              className="w-full h-full object-cover object-top"
              onError={(e) => {
                const target = e.currentTarget as HTMLImageElement
                target.style.display = 'none'
                const parent = target.parentElement!
                parent.style.background = 'linear-gradient(135deg, #c8dbd4, #7a9e8e)'
                parent.innerHTML = '<span style="font-family:Cormorant Garamond,serif;font-size:5rem;color:rgba(255,255,255,0.4);display:flex;align-items:center;justify-content:center;width:100%;height:100%">IU</span>'
              }}
            />
          </div>
          <div className="absolute -bottom-4 -left-8 z-20 bg-cream border border-line px-5 py-3 shadow-md">
            <span className="block text-[0.68rem] tracking-[0.15em] uppercase text-muted mb-1">Based in</span>
            <strong className="font-cormorant text-lg font-normal text-sage-dark">Sofia, BG</strong>
          </div>
        </div>
      </div>

      {/* Language pills — hidden on mobile */}
      <div className="hidden md:flex absolute bottom-12 left-24 gap-5 animate-fadeUp">
        {['🇩🇪 German C1', '🇬🇧 English C1', '🇧🇬 Bulgarian'].map(lang => (
          <div key={lang} className="text-[0.7rem] tracking-widest uppercase text-muted border border-line px-3 py-1.5 bg-white/70">
            {lang}
          </div>
        ))}
      </div>

      {/* Language pills — mobile version */}
      <div className="md:hidden flex gap-3 flex-wrap px-6 pb-10 animate-fadeUp">
        {['🇩🇪 German C1', '🇬🇧 English C1', '🇧🇬 Bulgarian'].map(lang => (
          <div key={lang} className="text-[0.7rem] tracking-widest uppercase text-muted border border-line px-3 py-1.5 bg-white/70">
            {lang}
          </div>
        ))}
      </div>
    </section>
  )
}
