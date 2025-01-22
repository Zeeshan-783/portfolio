/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        bounce: 'bounce 0.5s ease-in-out', // Define the custom animation
      },
      keyframes: {
        bounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' }, // Move the button up and down
        },
      },
    },
  },
  darkMode: 'class', // Enables dark mode by adding a 'dark' class to the root element
  plugins: [],
}
