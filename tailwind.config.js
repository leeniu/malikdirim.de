// tailwind.config.js
const { colors } = require('tailwindcss/defaultTheme')
module.exports = {
  mode: 'jit',
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
        'gradient-x': 'gradient-x 10s ease infinite',
        'spin-slow': 'spin 10s linear infinite',
        'fly-around': 'fly-around 60s linear infinite'
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
        },
        spin: {
          from: {
            transform: 'rotate(0deg)'
          },
          to: {
            transform: 'rotate(360deg)'
          }
        },
        /**
         * https://support.cargo.site/Make-an-Image-Fly-Across-the-Screen
         */
        'fly-around': {
          '0%': {
            transform: 'translateX(-170%) translateY(150%) rotate(0deg)'
          },
          '25%': {
            transform: 'translateX(250%) translateY(-100%) rotate(180deg)'
          },
          '25.001%': {
            transform: 'translateX(250%) translateY(100%)'
          },
          '50%': {
            transform: 'translateX(-250%) translateY(10%) rotate(360deg)'
          },
          '50.001%': {
            transform: 'translateX(-10%) translateY(-250%)'
          },
          '75%': {
            transform: 'translateX(50%) translateY(250%) rotate(180deg)'
          },
          '75.001%': {
            transform: 'translateX(250%) translateY(250%)'
          },
          '100%': {
            transform: 'translateX(-250%) translateY(-250%) rotate(360deg)'
          }
        }
      },
      zIndex: {
        '-10': '-10'
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
