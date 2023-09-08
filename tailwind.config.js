/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        "xs": "375px",
        "2xs": "280px"
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        black: '#000',
        white: '#fff ',
        title: '#29292E',
        body1: '#727272',
        body2: '#9797A6',
        'text-link': '#237943',
        warning: '#EEAF22',
        error: '#F61B40',
        success: '#237943',
        info: '#F1F1F6',
        'pallet-green': '#237943',
        'pallet-green-light': '#BFF1D2',
        'pallet-orange': '#FA7514',
        'pallet-orange-light': '#FDE6D5',
        'primary-gray': '#DBDBDB',
        'secondary-gray': '#E1E1E1',
        'image-placeholder': '#E2E2EA',
        'progress-container': '#E1E1E1',
        'primary-text-field': '#373D49',
        'secondary-text-field': '#F6F6F7',
        disabled: '#E0E0E0'
      }
    },
  },
  plugins: [],
}