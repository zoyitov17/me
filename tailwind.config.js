/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'custom-500': '500px',
        'custom-400': '400px',
        'custom-300': '300px',
      },
    },
  },
  plugins: [],
}
