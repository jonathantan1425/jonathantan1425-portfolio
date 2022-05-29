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
      light_gray: '#D0CCD0',
      light_gray_2: '#CFD8D7',
      // opal: '#B0C7BD',
      // ash_gray: '#C7D3BF',
      dark_gray: '#364156',
      // charcoal: '#274156',
      // blue_sapphire: '#1C6E8C',
      // middle_blue: '#68C5DB',
      // powder_blue: '#B8DBD9',
      // middle_green: '#9DCDC0',
      // mint: '#B8EBD0',
      // tea_green: '#D9F4C7',
      // melon: '#F7B1AB',
      // apricot: '#FFC9B5',
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
    extend: {
      spacing: {
        'hero': '80rem',
      },
      fontFamily: {
        sans: ["Poppins", ...defaultTheme.fontFamily.sans],
        poppins: ["Poppins", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
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