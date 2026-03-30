import { education, certificates, languages } from '../data/portfolio'

export default function Education() {
  return (
    <section id="education" className="py-16 bg-cream2 scroll-mt-20">
      <div className="max-w-5xl mx-auto px-6 md:px-20">
        <SectionLabel>Background</SectionLabel>
        <h2 className="font-cormorant font-light text-[clamp(2rem,5vw,3rem)] leading-[1.15] text-ink mb-8">
          Education &amp;<br /><em className="italic text-sage-dark">Certificates</em>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20">
          <div>
            {education.map((edu, i) => (
              <div key={i} className={`py-5 ${i < education.length - 1 ? 'border-b border-line' : ''}`}>
                <div className="font-cormorant text-lg font-normal text-ink mb-1">{edu.degree}</div>
                <div className="text-[0.82rem] text-muted mb-1">{edu.school}</div>
                <div className="text-[0.72rem] tracking-widest uppercase text-sage">{edu.year}</div>
              </div>
            ))}
          </div>

          <div>
            <ul className="list-none">
              {certificates.map((cert, i) => (
                <li key={i} className="flex items-center gap-3 text-[0.88rem] text-ink-soft py-3 border-b border-line">
                  <span className="w-1 h-1 rounded-full bg-sage flex-shrink-0" />
                  {cert}
                </li>
              ))}
            </ul>

            <div className="mt-10">
              <SectionLabel>Languages</SectionLabel>
              <div className="flex flex-col gap-0">
                {languages.map(({ flag, name, level }, i) => (
                  <div
                    key={name}
                    className={`flex justify-between items-center py-3 ${i < languages.length - 1 ? 'border-b border-line' : ''}`}
                  >
                    <span className="text-[0.88rem]">{flag} {name}</span>
                    <span className="text-[0.72rem] tracking-widest uppercase text-sage">{level}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
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
