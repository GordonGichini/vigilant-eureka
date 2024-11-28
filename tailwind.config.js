/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
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

