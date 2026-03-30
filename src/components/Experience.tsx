import { experiences } from '../data/portfolio'

export default function Experience() {
  return (
    <section id="experience" className="py-16 scroll-mt-20 theme-transition" style={{ background: 'var(--bg)' }}>
      <div className="max-w-5xl mx-auto px-6 md:px-20">
        <SectionLabel>Professional history</SectionLabel>
        <h2 className="font-cormorant font-light text-[clamp(2rem,5vw,3rem)] leading-[1.15] mb-8 theme-transition" style={{ color: 'var(--fg)' }}>
          Work <em className="italic" style={{ color: 'var(--accent)' }}>Experience</em>
        </h2>
        <div>
          {experiences.map((exp, i) => (
            <div key={i} className="grid grid-cols-1 md:grid-cols-[160px_1fr] gap-x-10 py-8 border-b theme-transition" style={{ borderColor: 'var(--line)' }}>
              <div className="mb-2 md:mb-0 md:pt-1 text-[0.75rem] leading-relaxed" style={{ color: 'var(--muted)' }}>
                <strong className="block font-cormorant text-base font-normal mb-0.5" style={{ color: 'var(--accent)' }}>{exp.dateRange}</strong>
                {exp.duration}
              </div>
              <div>
                <div className="font-cormorant text-xl md:text-2xl font-normal mb-3 theme-transition" style={{ color: 'var(--fg)' }}>
                  {exp.title}
                  {exp.isPersonal && <span className="ml-2 font-dm text-[0.75rem]" style={{ color: 'var(--accent-mid)' }}>✦ {exp.personalStack}</span>}
                </div>
                <div className="flex flex-wrap gap-2 mb-3">
                  {exp.tags.map((tag) => (
                    <span key={tag} className="text-[0.68rem] tracking-widest uppercase px-2 py-1"
                      style={{ background: 'var(--accent-light)', color: 'var(--accent)' }}>{tag}</span>
                  ))}
                  {exp.lang && <span className="text-[0.68rem] tracking-widest uppercase px-2 py-1 border"
                    style={{ background: 'var(--bg2)', color: 'var(--muted)', borderColor: 'var(--line)' }}>{exp.lang}</span>}
                  {exp.confidential && <span className="text-[0.68rem] tracking-widest uppercase px-2 py-1 border"
                    style={{ background: 'var(--bg2)', color: 'var(--muted)', borderColor: 'var(--line)' }}>🔒 Confidential</span>}
                </div>
                <ul className="text-[0.88rem] leading-relaxed space-y-1" style={{ color: 'var(--fg-soft)' }}>
                  {exp.bullets.map((b, j) => <li key={j} className="ml-4 list-disc">{b}</li>)}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-4 text-[0.7rem] tracking-[0.25em] uppercase mb-2 theme-transition" style={{ color: 'var(--accent-mid)' }}>
      {children}<span className="flex-1 h-px" style={{ background: 'var(--line)' }} />
    </div>
  )
}
