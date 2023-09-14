/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'darkBlue': '#0D1B2A',
        'blue': '#1B263B',
        'ligthBlue': '#415A77',
        'grey': '#778DA9',
        'myWhite': '#E0E1DD'
      }
    },
  },
  plugins: [],
}