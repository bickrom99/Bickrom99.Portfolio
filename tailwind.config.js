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
      },
      backgroundImage: {
        'light-gradient': 'linear-gradient(to bottom, #ffffff, #f4eafc, #e8f8ff)',
      },
      boxShadow: {
        custom: '0 0 3px #ffdb4d, 0 0 6px #ffaf45, 0 0 9px #ff8225',
      },
    },
  },
  plugins: [],
}