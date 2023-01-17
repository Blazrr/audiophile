/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  extend:
    {
      backgroundImage: {
        'header': "url('/HomeHeadphone.svg')",
      }
    },
  plugins: [],
}