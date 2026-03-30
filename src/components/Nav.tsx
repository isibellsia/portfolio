import { useState } from 'react'
import { useTheme, type Theme } from '../context/ThemeContext'

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

const themeButtons: { theme: Theme; icon: string; label: string }[] = [
  { theme: 'light', icon: '☀️', label: 'Light' },
  { theme: 'dark',  icon: '🌙', label: 'Dark'  },
  { theme: 'pink',  icon: '🌸', label: 'Pink'  },
]

export default function Nav() {
  const [open, setOpen] = useState(false)
  const { theme, setTheme } = useTheme()

  const handleNav = (id: string) => {
    scrollTo(id)
    setOpen(false)
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-line animate-fadeDown theme-transition"
      style={{ background: 'var(--nav-bg)', backdropFilter: 'blur(12px)' }}>
      <div className="flex justify-between items-center px-6 md:px-16 py-4">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="font-cormorant text-lg tracking-widest text-ink hover:text-sage-dark transition-colors"
        >
          I. Usheva
        </button>

        {/* Desktop nav */}
        <ul className="hidden md:flex gap-8 list-none items-center">
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

          {/* Theme switcher */}
          <li className="flex items-center gap-1 ml-4 border border-line rounded-full px-2 py-1">
            {themeButtons.map(({ theme: t, icon, label }) => (
              <button
                key={t}
                onClick={() => setTheme(t)}
                title={label}
                className={`w-7 h-7 rounded-full text-sm flex items-center justify-center transition-all ${
                  theme === t ? 'bg-sage-dark/20 scale-110' : 'hover:bg-sage-dark/10 opacity-50 hover:opacity-100'
                }`}
              >
                {icon}
              </button>
            ))}
          </li>
        </ul>

        {/* Mobile: theme + hamburger */}
        <div className="md:hidden flex items-center gap-3">
          <div className="flex items-center gap-1 border border-line rounded-full px-2 py-1">
            {themeButtons.map(({ theme: t, icon, label }) => (
              <button
                key={t}
                onClick={() => setTheme(t)}
                title={label}
                className={`w-6 h-6 rounded-full text-xs flex items-center justify-center transition-all ${
                  theme === t ? 'bg-sage-dark/20 scale-110' : 'opacity-40 hover:opacity-100'
                }`}
              >
                {icon}
              </button>
            ))}
          </div>

          <button
            className="flex flex-col gap-1.5 p-1"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            <span className={`block w-5 h-0.5 bg-ink transition-all duration-300 ${open ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-5 h-0.5 bg-ink transition-all duration-300 ${open ? 'opacity-0' : ''}`} />
            <span className={`block w-5 h-0.5 bg-ink transition-all duration-300 ${open ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-line px-6 py-4 flex flex-col gap-4 theme-transition"
          style={{ background: 'var(--nav-bg)' }}>
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
