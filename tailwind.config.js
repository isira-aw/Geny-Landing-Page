/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: '#0f172a', // Slate 900
        surface: '#1e293b',    // Slate 800
        primary: {
          DEFAULT: '#3b82f6', // Blue 500
          glow: '#60a5fa',    // Blue 400
        },
        neon: {
          blue: '#00f3ff',
          purple: '#bc13fe',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: 1, boxShadow: '0 0 20px rgba(0, 243, 255, 0.5)' },
          '50%': { opacity: .5, boxShadow: '0 0 10px rgba(0, 243, 255, 0.2)' },
        }
      }
    },
  },
  plugins: [],
};