/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  purge: ['./views/**/*.{js, jsx, tx, tsx}', './public/**/*.{css}'],
  content: ['./public/**/*.{html,js}','./views/**/*.{handlebars.html}'],
  theme: {
    extend: {},
  },
  plugins: [],
}
