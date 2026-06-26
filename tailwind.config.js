/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './js/**/*.js',
  ],
  theme: {
    extend: {
      colors: {
        lacquer:  { DEFAULT: '#7B1113', 600: '#9B1B1D', 700: '#7B1113', 800: '#5E0C0E', 900: '#430809' },
        gold:     { DEFAULT: '#C8A24B', 400: '#D9BC73', 500: '#C8A24B', 600: '#A9842F' },
        ink:      { DEFAULT: '#1A1310', soft: '#3A302B', muted: '#6B5D55' },
        ivory:    { DEFAULT: '#FBF7F0', 100: '#F6EFE3', 200: '#EFE5D4' },
        charcoal: { DEFAULT: '#14100E', 800: '#1C1714' },
      },
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'serif'],
        serif:   ['Fraunces', 'Georgia', 'serif'],
        sans:    ['"Hanken Grotesk"', 'system-ui', 'sans-serif'],
      },
      maxWidth: { '8xl': '88rem' },
    },
  },
  plugins: [],
}
