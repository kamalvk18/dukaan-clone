/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      colors:{
        'dukaan-active-blue': '#336DAE',
        'dukaan-active-darkblue': '#254E7C',
        'dukaan-side-bar-blue': '#1F263E',
      }
    },
  },
  plugins: [],
}

