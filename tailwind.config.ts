import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './sections/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f4ff',
          100: '#e0e9ff',
          200: '#c7d8ff',
          300: '#a3baff',
          400: '#7a97ff',
          500: '#5b75ff',
          600: '#4152ff',
          700: '#3538ff',
          800: '#2b26dd',
          900: '#1e1aa5',
        },
        secondary: {
          50: '#f5f3ff',
          100: '#ede9ff',
          200: '#ddd3ff',
          300: '#c7afff',
          400: '#ad87ff',
          500: '#945dff',
          600: '#8540ff',
          700: '#7c2eff',
          800: '#6b2dd8',
          900: '#591db5',
        },
        dark: {
          50: '#f9f9fa',
          100: '#f3f3f5',
          200: '#e8e8eb',
          300: '#d5d5db',
          400: '#a1a1aa',
          500: '#71717a',
          600: '#52525b',
          700: '#3f3f46',
          800: '#27272a',
          900: '#18181b',
        },
      },
      backdropBlur: {
        xs: '2px',
        sm: '4px',
        md: '12px',
        lg: '16px',
        xl: '24px',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'glow-lg': 'radial-gradient(circle at center, rgba(91, 117, 255, 0.15) 0%, transparent 70%)',
        'glow-sm': 'radial-gradient(circle at center, rgba(148, 93, 255, 0.1) 0%, transparent 50%)',
      },
      boxShadow: {
        'glow-sm': '0 0 20px rgba(91, 117, 255, 0.1)',
        'glow-md': '0 0 40px rgba(91, 117, 255, 0.15)',
        'glow-lg': '0 0 60px rgba(148, 93, 255, 0.2)',
        'glow-xl': '0 0 80px rgba(91, 117, 255, 0.25)',
        'inner-glow': 'inset 0 0 20px rgba(91, 117, 255, 0.1)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'rotate-slow': 'rotate-slow 20s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(10px)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '0.5', boxShadow: '0 0 20px rgba(91, 117, 255, 0.1)' },
          '50%': { opacity: '1', boxShadow: '0 0 40px rgba(91, 117, 255, 0.3)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '0% 0%' },
          '100%': { backgroundPosition: '-200% 0%' },
        },
        'rotate-slow': {
          'from': { transform: 'rotate(0deg)' },
          'to': { transform: 'rotate(360deg)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
