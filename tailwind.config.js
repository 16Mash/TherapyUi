/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
     "./src/**/*.{html,ts}",
  ],
  theme: {
 
    extend: {
      colors:{
        'therapyBlue':'#49467E',
        'therapyLight':'#a29ef1',
        'white': '#ffffff',
        'purple':{
          100:'#f3e8ff'
        }
      },
    },
  },
  plugins: [],
}

