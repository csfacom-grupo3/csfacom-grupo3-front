/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'azul' : '#0099CB',
        'verde' : '#339967',
        'vermelho' : '#993400'
      }
    },
    fontFamily: {
      sans: ['Poppins', 'sans'],
    }
  },
  plugins: [],
}

