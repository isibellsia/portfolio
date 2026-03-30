import { useState } from 'react'

const scrollTo = (id: string) => {
  const el = document.getElementById(id)
  if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.pageYOffset - 80, behavior: 'smooth' })
}

const navItems = [
  { label: 'Skills',     id: 'skills'     },
  { label: 'Experience', id: 'experience' },
  { label: 'Education',  id: 'education'  },
  { label: 'Contact',    id: 'contact'    },
]

export default function Nav() {
  const [open, setOpen] = useState(false)

  const handleNav = (id: string) => {
    scrollTo(id)
    setOpen(false)
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-cream/90 backdrop-blur-md border-b border-line animate-fadeDown">
      <div className="flex justify-between items-center px-6 md:px-16 py-5">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="font-cormorant text-lg tracking-widest text-ink hover:text-sage-dark transition-colors"
        >
          I. Usheva
        </button>

        <ul className="hidden md:flex gap-9 list-none">
          {navItems.map(({ label, id }) => (
            <li key={id}>
              <button
                onClick={() => handleNav(id)}
                className="text-xs tracking-widest uppercase text-ink-soft hover:text-sage-dark transition-colors"
              >
                {label}
              </button>
            </li>
          ))}
        </ul>

        <button
          className="md:hidden flex flex-col gap-1.5 p-1"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          <span className={`block w-5 h-0.5 bg-ink transition-all duration-300 ${open ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-5 h-0.5 bg-ink transition-all duration-300 ${open ? 'opacity-0' : ''}`} />
          <span className={`block w-5 h-0.5 bg-ink transition-all duration-300 ${open ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-line bg-cream/95 px-6 py-4 flex flex-col gap-4">
          {navItems.map(({ label, id }) => (
            <button
              key={id}
              onClick={() => handleNav(id)}
              className="text-xs tracking-widest uppercase text-ink-soft hover:text-sage-dark transition-colors text-left py-1"
            >
              {label}
            </button>
          ))}
        </div>
      )}
    </nav>
  )
}
