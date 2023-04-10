/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'ubuntu-orange': '#E95420',
        'dark-aubergine': '#2C001E',
        'mid-aubergine': '#5E2750',
        'light-aubergine': '#77216F',
        'hover-aubergine': '#9F6986',
        'header-pop-up': '#E6E4E2',
        'warm-grey-10': '#F6F6F5',
        'warm-grey-20': '#EEEDEB',
        'warm-grey-40': '#DEDBD8',
        'warm-grey-50': '#D6D3CF',
        'warm-grey-60': '#CECAC5',
        'warm-grey-80': '#BEB8B2',
        'cool-grey':'#333333',
        'ubuntu-orange-100': '#E95420',
        'ubuntu-orange-80': '#ED764D'
      },
      backgroundImage:{
        'jammy-jellyfish': "url('/src/assets/jammy.jpeg')"
      }
    },
  },
  plugins: [],
}

