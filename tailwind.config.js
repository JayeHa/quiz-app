/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    colors: {
      ...colors,
      red: "#b91c1c",
      "red-dark": "#991b1b",
      "red-weak": "#fef2f2",
      green: "#115e59",
      primary: "#262626",
    },
  },
  plugins: [],
};
