import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        cream:        'var(--bg)',
        cream2:       'var(--bg2)',
        sage:         'var(--accent-mid)',
        'sage-light': 'var(--accent-light)',
        'sage-dark':  'var(--accent)',
        ink:          'var(--fg)',
        'ink-soft':   'var(--fg-soft)',
        muted:        'var(--muted)',
        line:         'var(--line)',
        'dark-section': 'var(--dark-bg)',
      },
      fontFamily: {
        cormorant: ['"Cormorant Garamond"', 'serif'],
        dm:        ['"DM Sans"', 'sans-serif'],
      },
      animation: {
        fadeLeft:  'fadeLeft 1s ease 0.2s both',
        fadeRight: 'fadeRight 1s ease 0.4s both',
        fadeDown:  'fadeDown 0.8s ease both',
        fadeUp:    'fadeUp 1s ease 0.8s both',
      },
      keyframes: {
        fadeLeft:  { from: { opacity: '0', transform: 'translateX(-30px)' }, to: { opacity: '1', transform: 'none' } },
        fadeRight: { from: { opacity: '0', transform: 'translateX(30px)'  }, to: { opacity: '1', transform: 'none' } },
        fadeDown:  { from: { opacity: '0', transform: 'translateY(-15px)' }, to: { opacity: '1', transform: 'none' } },
        fadeUp:    { from: { opacity: '0', transform: 'translateY(20px)'  }, to: { opacity: '1', transform: 'none' } },
      },
    },
  },
  plugins: [],
} satisfies Config
