/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        "black":"#261C2C",
        "navy":"#5C527F",
        "blue":"#6E85B2",
        "chocolate":"#3E2C41",
      },
      fontFamily:{
        aclonica: ['Aclonica', 'sans-serif'],
        // alfa: ['Alfa Slab One', 'sans-serif']
      }
    },
  },
  plugins: [],
}
