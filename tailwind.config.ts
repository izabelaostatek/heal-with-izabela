import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#FAF8F5',
        'cream-mid': '#F0EBE3',
        gold: '#C9A96E',
        'gold-dark': '#B8956A',
        brown: '#2C2420',
        sage: '#8B9E7A',
        taupe: '#E8E0D5',
      },
      fontFamily: {
        serif: ['var(--font-cormorant)', 'Georgia', 'serif'],
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest: '0.3em',
      },
    },
  },
  plugins: [],
}
export default config
