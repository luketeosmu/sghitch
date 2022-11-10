/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'home-background': "url('/src/images/backgroundHome.jpg')",
        'fav-background': "url('/src/images/backgroundFav.jpg')",
        'profile-background': "url('/src/images/profileBG.jpg')",
        'settings-background': "url('/src/images/settingsBG.jpg')",
        'merlion-background': "url('/src/images/Merlion.png')",
      },
      fontFamily: {
        bebas: "'Bebas Neue', cursive",
        roboto: "'Roboto', sans-serif",
        bree: "'Bree Serif', serif"

      }
    },
  },
  plugins: [require("daisyui")],
}
