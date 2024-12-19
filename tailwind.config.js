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
        inter: ["Inter", "serif"],
        Dm_font: ["DM Sans", "serif"],
        Vast_shadow: ["Vast Shadow", "serif"]
      }
    },
  },
  plugins: [],
}