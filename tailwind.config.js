/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        tech: {
          bg: '#0B1120',
          secondary: '#111827',
          card: '#172033',
          cardHover: '#1E293B',
          primary: '#3B82F6',
          bright: '#38BDF8',
          text: '#F8FAFC',
          muted: '#94A3B8',
          border: '#263244',
          borderHover: 'rgba(59, 130, 246, 0.4)',
        },
        brand: {
          primary: '#3B82F6',
          dark: '#1D4ED8',
          accent: '#38BDF8',
          bg: '#0B1120',
          surface: '#172033',
          text: '#F8FAFC',
          muted: '#94A3B8',
          border: '#263244',
        },
        dark: {
          950: '#050608',
          900: '#090a0f',
          850: '#0e1117',
          800: '#141820',
          750: '#1a202c',
          700: '#222938',
        },
        teal: {
          primary: '#0F766E',
          dark: '#115E59',
          accent: '#E6FFFA',
        },
        emerald: {
          glow: '#10b981',
          accent: '#059669',
          bright: '#34d399',
          faint: 'rgba(16, 185, 129, 0.08)',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        }
      }
    },
  },
  plugins: [],
}
