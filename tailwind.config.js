/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    extend: {  

      colors: {
        "dark-gray": "#242424",
        grey: "#F3F3F3",
        "dark-grey": "#6B6B6B",
        transparent: "transparent",
        pink: "#FF4081",
       "SecondaryDark": "#ce3447",
        Foreground: "#fbfbfb",
        Background: "#efeff1",
        Border: "#dfdde2",
      
      },
      
      fontFamily: {
        sans: ['"Noto Sans Lao"', 'sans-serif'], 
      },
    },
  },
  plugins: [],
}
