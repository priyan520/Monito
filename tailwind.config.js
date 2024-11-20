/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {screens: {
      "xs" : "375px",
      "3xl" : "2000px",
    },
  }, 
  },
  plugins: [],
}