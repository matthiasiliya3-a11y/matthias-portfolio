/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'graphite': '#1a1a1a',
        'dark-gray': '#0f0f0f',
        'premium-black': '#000000',
        'silver': '#f5f5f7',
        'premium-white': '#ffffff',
        'subtle-blue': '#0071e3',
        // Light mode colors
        'light-bg': '#f8f8fa',
        'light-bg-secondary': '#ffffff',
        'light-text': '#1a1a1a',
        'light-text-secondary': '#555555',
        'light-border': '#e5e5e7',
        'light-glass': 'rgba(255, 255, 255, 0.7)',
        'light-glass-hover': 'rgba(255, 255, 255, 0.85)',
        'light-card': '#ffffff',
        'light-card-hover': '#f5f5f5',
      },
      fontFamily: {
        'display': ['Inter Tight', 'system-ui', 'sans-serif'],
        'body': ['Inter', 'system-ui', 'sans-serif'],
      },
      backdropBlur: {
        'xl': '20px',
      },
      boxShadow: {
        'premium': '0 20px 60px rgba(0, 0, 0, 0.3)',
        'soft': '0 8px 32px rgba(0, 0, 0, 0.1)',
        'glow': '0 0 20px rgba(0, 113, 227, 0.3)',
        'light-soft': '0 2px 8px rgba(0, 0, 0, 0.08)',
      },
      animation: {
        'gradient': 'gradient 8s ease infinite',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
    },
  },
  plugins: [],
}
