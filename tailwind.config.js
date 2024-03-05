/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'third': '600px',
      // => @media (min-width: 640px) { ... }

      'second': '835px',
      // => @media (min-width: 1024px) { ... }

      'first': '1100px',
      // => @media (min-width: 1280px) { ... }
    },
  },
  plugins: [],
}