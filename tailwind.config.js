/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      fontFamily: {
        'playfair': ['Playfair Display', 'serif'],
        'inter': ['Inter', 'sans-serif'],
      },
      colors: {
        'primary': {
          50: '#EEF4FF',
          100: '#E0EAFF',
          200: '#C7D9FF',
          300: '#9AB5FF',
          400: '#6B90FF',
          500: '#1E6EF5',
          600: '#1055CC',
          700: '#0A47BC',
          800: '#0E1E35',
          900: '#0A1628',
          950: '#050D1A',
        },
        'gold': {
          300: '#E8C97D',
          400: '#D4B96B',
          500: '#C9A84C',
          600: '#A07C28',
          700: '#7A5E1A',
        },
        'navy': {
          400: '#254B85',
          500: '#1A3460',
          600: '#112347',
          700: '#0A1628',
          800: '#070D1A',
          900: '#050D1A',
        },
        'dark': {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        },
        'cream': '#F7F9FC',
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-in-out',
        'fade-in-up': 'fadeInUp 0.8s ease-out',
        'fade-in-down': 'fadeInDown 0.8s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 9s ease-in-out infinite',
        'glow': 'glow 3s ease-in-out infinite alternate',
        'pulse-slow': 'pulse 5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
        'scale-in': 'scaleIn 0.5s ease-out',
        'marquee': 'marquee 30s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        fadeInDown: {
          '0%': { opacity: '0', transform: 'translateY(-40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-16px)' }
        },
        glow: {
          '0%': { boxShadow: '0 0 8px rgba(201,168,76,0.3)' },
          '100%': { boxShadow: '0 0 32px rgba(201,168,76,0.7), 0 0 64px rgba(201,168,76,0.3)' }
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' }
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.92)' },
          '100%': { opacity: '1', transform: 'scale(1)' }
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' }
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      boxShadow: {
        'gold-sm': '0 2px 8px rgba(201,168,76,0.2)',
        'gold-md': '0 4px 16px rgba(201,168,76,0.25)',
        'gold-lg': '0 8px 32px rgba(201,168,76,0.3)',
        'blue-sm': '0 2px 8px rgba(16,85,204,0.2)',
        'blue-md': '0 4px 16px rgba(16,85,204,0.3)',
        'blue-lg': '0 8px 32px rgba(16,85,204,0.4)',
        'blue-xl': '0 16px 48px rgba(16,85,204,0.35)',
      },
    },
  },
  plugins: [],
}
