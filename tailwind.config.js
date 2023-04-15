/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{html,js}',
    './pages/**/*.{html,js}',
    './index.html',
  ],
  theme: {
    extend: {
      colors:{
        "color-primary" :"#01051e",
        "color-primary-light" :"#020726",
        "color-primary-dark" :"#010417",
        "color-secondary" :"#FF7d3b",
        "color-gray" :"#333",
        "color-white" :"#FFF",
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
  plugins: [],
}

