/** @type {import('tailwindcss').Config} */
export default {
  darkMode:'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
        section_font: ["Bebas Neue", "serif"],
        Vast_shadow: ["Vast Shadow", "serif"]
      },
      colors: {
        'purple-400': '#9b4d96',
        'yellow-500': '#fbbf24', 
        'teal-400': '#4e8b8b'
      },
    },
  },
  plugins: [],
}