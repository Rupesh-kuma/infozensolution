/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        heading: ['"Plus Jakarta Sans"', 'sans-serif'],
        body: ['"DM Sans"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      colors: {
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
          950: '#172554',
        },
        accent: {
          400: '#fb923c',
          500: '#f97316',
          600: '#ea580c',
        },
        navy: {
          900: '#020B18',
          800: '#060F1E',
          700: '#0A1628',
          600: '#0E1E36',
          500: '#142440',
        },
      },
      animation: {
        'float': 'float 7s ease-in-out infinite',
        'float-r': 'float 9s ease-in-out 1.5s infinite reverse',
        'gradient-x': 'gradientX 6s ease infinite',
        'slide-up': 'slideUp 0.7s cubic-bezier(0.16,1,0.3,1) forwards',
        'fade-in': 'fadeIn 0.6s ease forwards',
        'spin-slow': 'spin 20s linear infinite',
        'border-spin': 'borderSpin 4s linear infinite',
        'marquee': 'marquee 30s linear infinite',
        'counter': 'counter 2s ease forwards',
        'beam': 'beam 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%,100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-18px) rotate(2deg)' },
        },
        gradientX: {
          '0%,100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        slideUp: {
          from: { opacity: '0', transform: 'translateY(40px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        borderSpin: {
          '0%': { '--angle': '0deg' },
          '100%': { '--angle': '360deg' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        beam: {
          '0%,100%': { opacity: '0.4', transform: 'scaleY(1)' },
          '50%': { opacity: '1', transform: 'scaleY(1.1)' },
        },
      },
      backgroundSize: { '200%': '200%', '300%': '300%' },
      boxShadow: {
        'glow-blue': '0 0 40px rgba(59,130,246,0.4), 0 0 80px rgba(59,130,246,0.15)',
        'glow-orange': '0 0 40px rgba(249,115,22,0.4)',
        'card': '0 4px 24px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.05)',
        'card-hover': '0 20px 60px rgba(0,0,0,0.6), 0 0 0 1px rgba(59,130,246,0.2)',
      },
    },
  },
  plugins: [],
};
