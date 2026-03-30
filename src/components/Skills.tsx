import { useEffect, useRef, useState } from 'react'
import { skills, softSkills } from '../data/portfolio'

export default function Skills() {
  const [animated, setAnimated] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setAnimated(true) },
      { threshold: 0.2 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="skills" ref={sectionRef} className="py-16 scroll-mt-20 theme-transition" style={{ background: 'var(--bg2)' }}>
      <div className="max-w-5xl mx-auto px-6 md:px-20">
        <SectionLabel>Technical expertise</SectionLabel>
        <h2 className="font-cormorant font-light text-[clamp(2rem,5vw,3rem)] leading-[1.15] mb-8 theme-transition" style={{ color: 'var(--fg)' }}>
          What I <em className="italic" style={{ color: 'var(--accent)' }}>bring</em><br />to your project
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {skills.map((skill) => (
            <div key={skill.name} className="p-5 border hover:-translate-y-1 hover:shadow-md transition-all duration-200 cursor-default theme-transition"
              style={{ background: 'var(--card-bg)', borderColor: 'var(--line)' }}
              onMouseEnter={e => (e.currentTarget.style.borderColor = 'var(--accent-mid)')}
              onMouseLeave={e => (e.currentTarget.style.borderColor = 'var(--line)')}>
              <div className="text-sm font-medium mb-1 theme-transition" style={{ color: 'var(--fg)' }}>{skill.name}</div>
              <div className="text-[0.7rem] tracking-widest uppercase mb-3 theme-transition" style={{ color: 'var(--accent-mid)' }}>{skill.level}</div>
              <div className="h-[2px] overflow-hidden" style={{ background: 'var(--line)' }}>
                <div className="h-full skill-bar-fill" style={{
                  width: animated ? `${skill.width}%` : '0%',
                  background: 'linear-gradient(90deg, var(--accent-mid), var(--accent))',
                }} />
              </div>
            </div>
          ))}
        </div>

        <div className="flex gap-2 flex-wrap mt-8">
          {softSkills.map((tag) => (
            <div key={tag} className="text-[0.72rem] tracking-widest uppercase px-3 py-2 border hover:opacity-80 transition-all theme-transition"
              style={{ color: 'var(--accent)', borderColor: 'var(--accent-light)', background: 'color-mix(in srgb, var(--accent-light) 15%, transparent)' }}>
              {tag}
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
      {children}
      <span className="flex-1 h-px" style={{ background: 'var(--line)' }} />
    </div>
  )
}
