/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      spacing: {
        'sm': '24rem',
        'md': '28rem'
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

