/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        gold: {
          50: '#fbf6e9',
          100: '#f5e9c8',
          200: '#ecd79a',
          300: '#e0c068',
          400: '#d4a84a',
          500: '#c19a3a',
          600: '#a87d2a',
          700: '#8a6420',
          800: '#6e4f1c',
          900: '#5a4019',
        },
        ink: {
          50: '#f5f5f5',
          100: '#e7e7e7',
          200: '#d0d0d0',
          300: '#a8a8a8',
          400: '#717171',
          500: '#4a4a4a',
          600: '#2e2e2e',
          700: '#1f1f1f',
          800: '#141414',
          900: '#0a0a0a',
          950: '#050505',
        },
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'serif'],
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-up': 'fadeUp 0.8s ease-out forwards',
        'fade-in': 'fadeIn 1s ease-out forwards',
        'shimmer': 'shimmer 3s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'pulse-gold': 'pulseGold 2.5s ease-in-out infinite',
        'scroll-down': 'scrollDown 2s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        pulseGold: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(212, 168, 74, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(212, 168, 74, 0.6)' },
        },
        scrollDown: {
          '0%': { transform: 'translateY(0)', opacity: '1' },
          '100%': { transform: 'translateY(12px)', opacity: '0' },
        },
      },
    },
  },
  plugins: [],
};
