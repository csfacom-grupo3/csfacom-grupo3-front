/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'azul': '#0099CB',
      }
    },
    fontFamily: {
      sans: ['Poppins', 'sans'],
    }
  },
  plugins: [],
}

