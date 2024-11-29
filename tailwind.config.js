/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        kaushan: ['"Kaushan Script"', 'cursive'],
      },
      colors: {
        primary: '#007bff',
        heading: '#333',
        background: 'rgb(186, 185, 191)',
      },
      keyframes: {
        danceUpSideways: {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '25%': { transform: 'translate(-5px, -5px)' },
          '50%': { transform: 'translate(5px, 5px)' },
          '75%': { transform: 'translate(-5px, 5px)' },
        },
      },
      animation: {
        danceUpSideways: 'danceUpSideways 0.5s infinite',
      },
    },
  },
  plugins: [],
}

