const EMAIL = 'isabel.usheva@gmail.com'

const quickFacts = [
  '3.5 years of frontend production experience, expanding into backend (Node.js / Express) and DevOps',
  'Passionate about AI — builds web apps with AI tools, customizes and deploys AI chat platforms',
  'Dual diploma from a German university — DAAD Erasmus alumna, German C1',
  'Aerial yoga instructor — a developer who genuinely thinks creatively',
]

export default function Contact() {
  return (
    <section id="contact" className="py-16 bg-ink scroll-mt-20">
      <div className="max-w-5xl mx-auto px-20">
        <div className="flex items-center gap-4 text-[0.7rem] tracking-[0.25em] uppercase text-sage-light mb-2">
          Get in touch
          <span className="flex-1 h-px bg-white/10" />
        </div>

        <h2 className="font-cormorant font-light text-[clamp(2.2rem,3.5vw,3rem)] leading-[1.15] text-white mb-8">
          Let's build<br /><em className="italic text-sage-light">something together</em>
        </h2>

        <div className="grid grid-cols-2 gap-20 items-start">
          {/* Left */}
          <div>
            <p className="text-[0.95rem] text-white/50 leading-[1.8] mb-8">
              Available for freelance React projects, landing pages, and web apps —
              particularly for clients in the DACH region. I work in German and English.
            </p>

            <div className="flex flex-col gap-3">
              <a
                href={`mailto:${EMAIL}`}
                className="flex items-center gap-4 text-[0.85rem] text-white/70 no-underline hover:text-sage-light transition-colors"
              >
                <ContactIcon>✉</ContactIcon>
                {EMAIL}
              </a>
              <a
                href="https://linkedin.com/in/izabel-usheva"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 text-[0.85rem] text-white/70 no-underline hover:text-sage-light transition-colors"
              >
                <ContactIcon>in</ContactIcon>
                linkedin.com/in/izabel-usheva
              </a>
            </div>
          </div>

          {/* Right — quick facts */}
          <div className="border border-white/10 p-10" style={{ background: 'rgba(255,255,255,0.04)' }}>
            <div className="text-[0.68rem] tracking-[0.25em] uppercase text-white/30 mb-6">Quick facts</div>
            <div className="flex flex-col gap-5">
              {quickFacts.map((fact, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <span className="text-sage text-lg mt-0.5 flex-shrink-0">✦</span>
                  <p className="text-[0.85rem] text-white/50 leading-[1.7]">{fact}</p>
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
    <div className="w-8 h-8 border border-white/15 flex items-center justify-center text-xs flex-shrink-0 transition-colors group-hover:border-sage-light">
      {children}
    </div>
  )
}
