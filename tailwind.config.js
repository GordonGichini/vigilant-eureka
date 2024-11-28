/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        dance: 'sidewaysDance 0.3s ease-in-out infinite',
      },
      keyframes: {
        sidewaysDance: {
          '0%, 100%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(8px)' },
        },
      },
    },
  },
  plugins: [],
}

