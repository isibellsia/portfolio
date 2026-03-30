import { experiences } from '../data/portfolio'

export default function Experience() {
  return (
    <section id="experience" className="py-16 scroll-mt-20">
      <div className="max-w-5xl mx-auto px-20">
        <SectionLabel>Professional history</SectionLabel>
        <h2 className="font-cormorant font-light text-[clamp(2.2rem,3.5vw,3rem)] leading-[1.15] text-ink mb-8">
          Work <em className="italic text-sage-dark">Experience</em>
        </h2>

        <div>
          {experiences.map((exp, i) => (
            <div key={i} className="grid grid-cols-[160px_1fr] gap-x-10 py-10 border-b border-line">
              {/* Date */}
              <div className="pt-1 text-[0.75rem] text-muted leading-relaxed">
                <strong className="block font-cormorant text-base font-normal text-sage-dark mb-0.5">
                  {exp.dateRange}
                </strong>
                {exp.duration}
              </div>

              {/* Content */}
              <div>
                <div className="font-cormorant text-2xl font-normal text-ink mb-3">
                  {exp.title}
                  {exp.isPersonal && (
                    <span className="ml-2 font-dm text-[0.75rem] text-sage">✦ AI-assisted</span>
                  )}
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {exp.tags.map((tag) => (
                    <span key={tag} className="text-[0.68rem] tracking-widest uppercase px-3 py-1 bg-sage-light text-sage-dark opacity-85">
                      {tag}
                    </span>
                  ))}
                  {exp.lang && (
                    <span className="text-[0.68rem] tracking-widest uppercase px-3 py-1 bg-cream2 text-muted border border-line">
                      {exp.lang}
                    </span>
                  )}
                  {exp.confidential && (
                    <span className="text-[0.68rem] tracking-widest uppercase px-3 py-1 bg-cream2 text-muted border border-line">
                      🔒 Confidential
                    </span>
                  )}
                </div>

                <ul className="text-[0.88rem] text-ink-soft leading-relaxed space-y-1">
                  {exp.bullets.map((b, j) => (
                    <li key={j} className="ml-4 list-disc">{b}</li>
                  ))}
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
    <div className="flex items-center gap-4 text-[0.7rem] tracking-[0.25em] uppercase text-sage mb-2">
      {children}
      <span className="flex-1 h-px bg-line" />
    </div>
  )
}
