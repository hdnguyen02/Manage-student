/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: '1rem',
      screens: {
        // lg:'1124px',  
        // xl:'1280px'
      }
    },
    
    extend: {},
  },

  plugins: [],
}