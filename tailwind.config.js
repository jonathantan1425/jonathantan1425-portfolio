const defaultTheme = require('tailwindcss/defaultTheme')
const plugin = require('tailwindcss/plugin')

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    './src/**/*.{html,js}',
    './node_modules/tw-elements/dist/js/**/*.js',
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      currentColor: 'currentColor',
      ivory: '#F9F9ED',
      white: '#FBFCFF',
      black: '#000000',
      light_gray: '#D0CCD0',
      light_gray_2: '#CFD8D7',
      dark_gray: '#364156',
      mint: '#97C3B8',
      green: '#59736D',
      orange_light: '#E5B299',
      orange_dark: '#D79771',
      blue: '#37718E',
      pink: '#E87EA1',
    },
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    minWidth: {
      '1/2': '50%',
    },
    extend: {
      spacing: {
        'hero': '80rem',
      },
      fontFamily: {
        sans: ["Poppins", ...defaultTheme.fontFamily.sans],
        poppins: ["Poppins", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      aspectRatio: {
        '2/3': '2 / 3',
      },
    },
  },
  variants: {
    fill: ['hover', 'focus'],
    animation: ["motion-safe"],
  },
  plugins: [
    require('tw-elements/dist/plugin'),
  ],
  darkMode: `class`,
  animation: {
    fadeIn: "fadeIn 2s ease-in forwards"
  },
  keyframes: {
    fadeIn: {
      "0%": { opacity: 0 },
      "100%": { opacity: 1 }
    }
  },
}