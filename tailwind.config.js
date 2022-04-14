module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js}",
    "./src/*.js"
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}
