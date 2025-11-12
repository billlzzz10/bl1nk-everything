/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js}',
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
        'doc-bg': '#ffffff',
        'doc-header': '#1a1a2e',
        'doc-text': '#343a40',
        'doc-border': '#ddd',
        'doc-code-bg': '#f4f4f4',
      },
      fontFamily: {
        sans: ['Segoe UI', 'Tahoma', 'Geneva', 'Verdana', 'sans-serif'],
      },
      boxShadow: {
        'primary-glow': '0 0 40px rgba(76, 201, 240, 0.2)',
        'primary-hover': '0 0 30px rgba(76, 201, 240, 0.5)',
      },
    },
  },
  plugins: [],
}
