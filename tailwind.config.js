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
        'hover-aubergine': '#9F6986'
      },
      backgroundImage:{
        'jammy-jellyfish': "url('/src/assets/jammy.jpeg')"
      }
    },
  },
  plugins: [],
}

