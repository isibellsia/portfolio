import { education, certificates, languages } from '../data/portfolio'

export default function Education() {
  return (
    <section id="education" className="py-16 scroll-mt-20 theme-transition" style={{ background: 'var(--bg2)' }}>
      <div className="max-w-5xl mx-auto px-6 md:px-20">
        <SectionLabel>Background</SectionLabel>
        <h2 className="font-cormorant font-light text-[clamp(2rem,5vw,3rem)] leading-[1.15] mb-8 theme-transition" style={{ color: 'var(--fg)' }}>
          Education &amp;<br /><em className="italic" style={{ color: 'var(--accent)' }}>Certificates</em>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20">
          <div>
            {education.map((edu, i) => (
              <div key={i} className={`py-5 ${i < education.length - 1 ? 'border-b' : ''} theme-transition`} style={{ borderColor: 'var(--line)' }}>
                <div className="font-cormorant text-lg font-normal mb-1 theme-transition" style={{ color: 'var(--fg)' }}>{edu.degree}</div>
                <div className="text-[0.82rem] mb-1" style={{ color: 'var(--muted)' }}>{edu.school}</div>
                <div className="text-[0.72rem] tracking-widest uppercase" style={{ color: 'var(--accent-mid)' }}>{edu.year}</div>
              </div>
            ))}
          </div>
          <div>
            <ul className="list-none">
              {certificates.map((cert, i) => (
                <li key={i} className="flex items-center gap-3 text-[0.88rem] py-3 border-b theme-transition" style={{ color: 'var(--fg-soft)', borderColor: 'var(--line)' }}>
                  <span className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: 'var(--accent-mid)' }} />{cert}
                </li>
              ))}
            </ul>
            <div className="mt-10">
              <SectionLabel>Languages</SectionLabel>
              {languages.map(({ flag, name, level }, i) => (
                <div key={name} className={`flex justify-between items-center py-3 ${i < languages.length - 1 ? 'border-b' : ''} theme-transition`} style={{ borderColor: 'var(--line)' }}>
                  <span className="text-[0.88rem] theme-transition" style={{ color: 'var(--fg)' }}>{flag} {name}</span>
                  <span className="text-[0.72rem] tracking-widest uppercase" style={{ color: 'var(--accent-mid)' }}>{level}</span>
                </div>
              ))}
            </div>
          </div>
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
