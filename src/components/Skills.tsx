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
    <section id="skills" ref={sectionRef} className="py-16 bg-cream2 scroll-mt-20">
      <div className="max-w-5xl mx-auto px-20">
        <SectionLabel>Technical expertise</SectionLabel>
        <h2 className="font-cormorant font-light text-[clamp(2.2rem,3.5vw,3rem)] leading-[1.15] text-ink mb-8">
          What I <em className="italic text-sage-dark">bring</em><br />to your project
        </h2>

        <div className="grid grid-cols-4 gap-6">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="bg-cream p-6 border border-line hover:border-sage hover:-translate-y-1 hover:shadow-md transition-all duration-200 cursor-default"
            >
              <div className="text-sm font-medium text-ink mb-1">{skill.name}</div>
              <div className="text-[0.7rem] tracking-widest uppercase text-sage mb-3">{skill.level}</div>
              <div className="h-[2px] bg-line overflow-hidden">
                <div
                  className="h-full skill-bar-fill"
                  style={{
                    width: animated ? `${skill.width}%` : '0%',
                    background: 'linear-gradient(90deg, #7a9e8e, #4a7060)',
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="flex gap-3 flex-wrap mt-10">
          {softSkills.map((tag) => (
            <div
              key={tag}
              className="text-[0.75rem] tracking-widest uppercase text-sage-dark border border-sage-light px-4 py-2 bg-sage-light/15 hover:bg-sage-light/40 transition-colors"
            >
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
    <div className="flex items-center gap-4 text-[0.7rem] tracking-[0.25em] uppercase text-sage mb-2">
      {children}
      <span className="flex-1 h-px bg-line" />
    </div>
  )
}
