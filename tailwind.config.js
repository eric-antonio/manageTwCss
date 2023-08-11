/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screens:{
      sm:'480px',
      md:'768px',
      lg:'976px',
      xl:'1140px'
    },
    extend: {

      colors:{
        brighRed:'hsl(12 , 88%, 59%)',
        brighRedLight:'hsl(12,88%, 69%)',
        brighRedSupLight:'hsl(12,88%,95%)',

        darkBlue: 'hsl(228, 39%, 23%)',
        darkGrayishBlues:'hsl(227, 12%, 61%)',

        verDarkBlue:'hsl(223, 13%, 13%)',
        veryPlaedRed:'hsl(13%, 100%, 96%)',
        verLightGray:'hsl(0, 0%, 98%)',
      }
    },
  },
  plugins: [],
};
