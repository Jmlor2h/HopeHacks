/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      colors: {
        grayGreen: "#C4D5C5",
        sage: "#6F8E74",
        peaGreen: "#A4B509",
        armyGreen: "#444003",
        deepGreen: "#162607",
        gray: "#F2F3F5",
      },
      fontFamily: {
        mukta: ["Mukta", "sans - serif"],
        ptSans: ["PT Sans", "sans - serif"],
      },
    },
  },
  plugins: [],
}
