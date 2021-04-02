// tailwind.config.js
const { colors } = require('tailwindcss/defaultTheme')
module.exports = {
  purge: ['./pages/**/*.vue', './layouts/**/*.vue', './components/**/*.vue'],
  theme: {
    extend: {
      colors: {
        rss: '#f26522',
        xing: '#cfdc00',
        gitlab: '#fd7e14',
        github: '#6f42c1',
        docker: '#0db7ed',
        twitter: '#1DA1F2',
        flybytes: '#95c11f',
        codepen: '#ffdd40',
        primary: '#0F766E',
        'primary-darker': '#115E59',
        'primary-lighter': '#0D9488',
        email: colors.primary
      },
      /**
       * https://victoryoalli.me/how-to-create-an-animated-gradient-using-tailwin-css
       */
      animation: {
        'gradient-x': 'gradient-x 10s ease infinite'
      },
      keyframes: {
        'gradient-x': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          }
        }
      }
    },
    fontFamily: {
      sans: ['Manrope', 'sans-serif'],
      serif: ['serif'],
      mono: ['monospace'],
      headings: ['Inter', 'sans-serif']
    }
  },
  variants: {},
  plugins: [require('@tailwindcss/forms')]
}
