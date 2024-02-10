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
      '2xl': '1441px',
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
    extend: {
      animation: {
        flip: "plane 6s infinite linear",
        flip1: "plane1 6s infinite linear",
        flip3: "dragon 4s infinite linear alternate",
        cycle: "dino 20s linear infinite",
        cycle2: "dino2 20s linear infinite",
      },
      keyframes: {
        plane: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-500%)" },
        },
        plane1: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(500%)" },
        },
        dragon: {
          "0%": { transform: "translateY(0%)" },
          "100%": { transform: "translateY(-15%)" },
        },
        dino: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100vw)" },
        },
        dino2: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(350px)" },
        },
      }
    },
  },
  plugins: [],
}