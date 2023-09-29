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

