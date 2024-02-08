/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'xs': '400px',
      'sm': '576px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1180px',
    },
    container: {
      padding: {
        DEFAULT: '14px',
        xl: '0',
      },
      center: true,
    },
    fontFamily: {
      Chewy: ['Chewy', 'sans-serif'],
      Lucky: ['Lucky Dino', 'sans-serif'],
      Balsamiq: ['Balsamiq Sans', 'sans-serif']
    },
    extend: {},
  },
  plugins: [],
}