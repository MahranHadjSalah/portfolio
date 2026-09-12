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
        brand: {
          primary: '#0F766E',
          dark: '#115E59',
          accent: '#E6FFFA',
          bg: '#F8FAFC',
          surface: '#FFFFFF',
          text: '#0F172A',
          muted: '#475569',
          border: '#E2E8F0',
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
