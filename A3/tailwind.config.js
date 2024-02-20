/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [`./views/**/*.html`],
  theme: {
    extend: {
      colors: {
        'gray-custom': '#EBEBEB'
      },
    },
  },
  daisyui: {
    themes: ['emerald'],
  },
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
}

