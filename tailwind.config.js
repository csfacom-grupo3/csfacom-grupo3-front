/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'azul' : '#0099CB',
        'azul-10': '#0099CB1A',
        'azul-25' : '#CCEBF5',
        'azul-50' : '#7FCCE5',
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

