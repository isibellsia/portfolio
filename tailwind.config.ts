import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        cream:     '#faf8f4',
        cream2:    '#f3efe8',
        sage:      '#7a9e8e',
        'sage-light': '#c8dbd4',
        'sage-dark':  '#4a7060',
        ink:       '#1e1e1e',
        'ink-soft':'#3d3d3d',
        muted:     '#8a8a8a',
        line:      '#e0dbd0',
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
