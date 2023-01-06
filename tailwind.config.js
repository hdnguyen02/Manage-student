/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'primarily': '#1F2937',
      'white': 'rgb(255,255,255)', 
      'gray': '#AABBCC'
    },
    extend: {},
  },

  plugins: [],
}