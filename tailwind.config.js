/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        primary: '#7c3aed',
        'primary-hover': '#a855f7',
        bg: '#faf5ff',
        text: '#4c1d95',
      },
    },
  },
  plugins: [],
}