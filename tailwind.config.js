/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4CC9F0',
        'primary-dark': '#3AAFE9',
        secondary: '#7B68EE',
        accent: '#FF6B9D',
        'bg-dark': '#0D1B2A',
        'bg-darker': '#0A121C',
        'text-light': '#FFFFFF',
        'text-muted': '#CCCCCC',
        border: 'rgba(255, 255, 255, 0.1)',
        'glass-bg': 'rgba(10, 10, 20, 0.85)',
        // Lighter glass background for internal panels (as seen in dashboard/settings)
        'light-glass-bg': 'rgba(255, 255, 255, 0.08)', 
        success: '#4ADE80',
        warning: '#FCD34D',
        error: '#EF4444',
      },
      fontFamily: {
        sans: ['Quicksand', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        'primary-glow': '0 0 40px rgba(76, 201, 240, 0.2)',
        'primary-hover': '0 0 30px rgba(76, 201, 240, 0.5)',
        'neon-glow': '0 0 10px rgba(76, 201, 240, 0.5), 0 0 20px rgba(123, 104, 238, 0.3)',
      },
      keyframes: {
        'spin-slow': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        }
      },
      animation: {
        'spin-slow': 'spin-slow 6s linear infinite',
      }
    },
  },
  plugins: [],
}
