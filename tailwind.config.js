/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./views/**/*.{handlebars,html,js}", "./public/**/*.{html,js}"],
  theme: {
    colors: {
      'white': 'rgb(255,255,255)',
      'blue': 'rgb(0,255,210)',
      'purple': 'rgb(159,84,165)',
      'pink': 'rgb(235,63,103)',
      'orange': 'rgb(244,159,64)',
      'green': 'rgb(112,247,145)',
      'yellow': 'rgb(248,238,0)',
      'gray-dark': 'rgb(13,13,12)',
      'gray': 'rgb(37,36,35)',
      'gray-light': 'rgb(126,126,123)'
    },
    extend: {},
  },
  plugins: [],
}
