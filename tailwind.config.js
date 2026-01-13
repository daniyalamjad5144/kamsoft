/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryRed: '#D1314B',
        primaryBlue: '#3B59F8',
        darkNavy: '#1A1A2E',
        accentYellow: '#FFDC00',
        accentCyan: '#4AF2A1',
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
