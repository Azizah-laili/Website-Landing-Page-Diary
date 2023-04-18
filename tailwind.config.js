/** @type {import('tailwindcss').Config} */

/*Pricing*/const plugin = require('tailwindcss/plugin');

const rotateY = plugin(function ({ addUtilities }){
  addUtilities({
    '.rotate-y-180': {
      transform: "rotateY(180deg)"
    },
    '.-rotate-y-180':{
      transform :"rotateY(-180deg)"
    }
  })
})

module.exports = {
  content: [
    './components/**/*.{html,js}',
    './pages/**/*.{html,js}',
    './index.html',
  ],
  theme: {
    extend: {
      colors:{
        "color-primary" :"#fff",
        "color-primary-light" :"#cadbe7",
        "color-primary-dark" :"#1b4769",
        "color-secondary" :"#E8B867",
        "color-third" :"#053B47",
        "color-gray" :"#333",
        "color-text" :"#5e9299",
        "color-blob" :"#A427DF",
      }
    },
    container:{
    center:"true",
    padding:{
        default: "20px",
        md :"50px" 
      }
    }
  },
  plugins: [rotateY],
}

