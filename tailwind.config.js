/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  darkMode: 'class',
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      colors: {
        darkRed: '#D80033',
        whiteLike: '#EBE5E7',
        darkBlue: '#474E5C'
      },
      fontFamily: {
        "graphikBold": ['graphik-bold'],
        "graphikRegular": ['graphik-regular'],
        "graphikSuper": ['graphik-super'],
        "graphikSemibold": ['graphik-semibold']
      }
    }
  },
  plugins: [],
}
