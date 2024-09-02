/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./build/*.html'],
  theme: {
    extend: {
      
        'open-menu2' : {
          '0%' : {transform : 'rotate(72deg)'},
          '25%' : {transform : 'rotate(144deg)'},
          '50%' : {transform : 'rotate(216deg)'},
          '75%' : {transform : 'rotate(288deg)'},
          '100%' : {transform : 'rotate(360deg)'},
        },
      
      animation: {
        'open-menu2' : 'open-menu2 0.5s',
      }
    },
  },
  plugins: [],
}

