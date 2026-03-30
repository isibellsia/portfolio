const scrollTo = (id: string) => {
  const el = document.getElementById(id)
  if (el) {
    window.scrollTo({ top: el.getBoundingClientRect().top + window.pageYOffset - 80, behavior: 'smooth' })
  }
}

const navItems = [
  { label: 'Skills',     id: 'skills'     },
  { label: 'Experience', id: 'experience' },
  { label: 'Education',  id: 'education'  },
  { label: 'Contact',    id: 'contact'    },
]

export default function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-16 py-5 bg-cream/90 backdrop-blur-md border-b border-line animate-fadeDown">
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="font-cormorant text-lg tracking-widest text-ink hover:text-sage-dark transition-colors"
      >
        I. Usheva
      </button>

      <ul className="flex gap-9 list-none">
        {navItems.map(({ label, id }) => (
          <li key={id}>
            <button
              onClick={() => scrollTo(id)}
              className="text-xs tracking-widest uppercase text-ink-soft hover:text-sage-dark transition-colors"
            >
              {label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  )
}
