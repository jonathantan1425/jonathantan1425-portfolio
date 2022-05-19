const defaultTheme = require('tailwindcss/defaultTheme')
const plugin = require('tailwindcss/plugin')

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    // if you have other folder, add its path too, like this:
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      currentColor: 'currentColor',
      ivory: '#F9F9ED',
      white: '#FBFCFF',
      light_gray: '#D0CCD0',
      light_gray_2: '#CFD8D7',
      opal: '#B0C7BD',
      ash_gray: '#C7D3BF',
      dark_gray: '#364156',
      charcoal: '#274156',
      blue_sapphire: '#1C6E8C',
      middle_blue: '#68C5DB',
      powder_blue: '#B8DBD9',
      middle_green: '#9DCDC0',
      mint: '#B8EBD0',
      tea_green: '#D9F4C7',
      melon: '#F7B1AB',
      apricot: '#FFC9B5',
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
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
  darkMode: `class`,
}