const EMAIL = 'isabel.usheva@gmail.com'

const quickFacts = [
  '3.5 years of frontend production experience, expanding into backend (Node.js / Express) and DevOps',
  'Passionate about AI — builds web apps with AI tools, customizes and deploys AI chat platforms',
  'Dual diploma from a German university — DAAD Erasmus alumna, German C1',
  'Aerial yoga instructor — a developer who genuinely thinks creatively',
]

export default function Contact() {
  return (
    <section id="contact" className="py-16 scroll-mt-20 theme-transition" style={{ background: 'var(--dark-bg)' }}>
      <div className="max-w-5xl mx-auto px-6 md:px-20">
        <div className="flex items-center gap-4 text-[0.7rem] tracking-[0.25em] uppercase mb-4" style={{ color: 'var(--accent-light)' }}>
          Get in touch<span className="flex-1 h-px" style={{ background: 'var(--dark-line)' }} />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-start">
          <div>
            <div className="flex flex-col gap-3">
              <a href={`mailto:${EMAIL}`} className="flex items-center gap-4 text-[0.85rem] no-underline transition-colors"
                style={{ color: 'var(--dark-text)' }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--accent-light)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'var(--dark-text)')}>
                <ContactIcon>✉</ContactIcon>{EMAIL}
              </a>
              <a href="https://linkedin.com/in/izabel-usheva" target="_blank" rel="noreferrer"
                className="flex items-center gap-4 text-[0.85rem] no-underline transition-colors"
                style={{ color: 'var(--dark-text)' }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--accent-light)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'var(--dark-text)')}>
                <ContactIcon>in</ContactIcon>linkedin.com/in/izabel-usheva
              </a>
            </div>
          </div>
          <div className="p-8 border" style={{ background: 'rgba(255,255,255,0.04)', borderColor: 'var(--dark-line)' }}>
            <div className="text-[0.68rem] tracking-[0.25em] uppercase mb-6" style={{ color: 'rgba(255,255,255,0.25)' }}>Quick facts</div>
            <div className="flex flex-col gap-5">
              {quickFacts.map((fact, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <span className="text-lg mt-0.5 flex-shrink-0" style={{ color: 'var(--accent-mid)' }}>✦</span>
                  <p className="text-[0.85rem] leading-[1.7]" style={{ color: 'var(--dark-muted)' }}>{fact}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function ContactIcon({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-8 h-8 border flex items-center justify-center text-xs flex-shrink-0"
      style={{ borderColor: 'var(--dark-line)' }}>{children}</div>
  )
}
