/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      spacing: {
        'sm': '24rem',
        'md': '28rem',
        'lg': '32rem',
        'xl': '36rem',
        '2xl': '40rem',
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

