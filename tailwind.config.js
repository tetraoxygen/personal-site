/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Portland Text", "sans-serif"],
      display: ["Portland Display", "sans-serif"],
      monospace: ["Portland Mono", "mono"],
    },
    extend: {},
  },
  plugins: [],
};
