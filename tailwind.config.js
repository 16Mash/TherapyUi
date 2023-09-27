/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
     "./src/**/*.{html,ts}",
  ],
  theme: {
 
    extend: {
      colors:{
        'therapyBlue':'#49467E',
        'therapyLight':'#9491d8E',
        'white': '#ffffff',
        'purple':{
          100:'#f3e8ff'
        }
      },
    },
  },
  plugins: [],
}

