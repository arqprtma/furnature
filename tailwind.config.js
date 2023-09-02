/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'banner-home' : "url('/src/assets/banner1.png')",
      }
    },
  },
  plugins: [require("daisyui")],
}