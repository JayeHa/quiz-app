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
      "green-dark": "#134e4a",
      "green-weak": "#f0fdfa",
      gray: "#262626",
      "gray-dark": "#171717",
      "gray-weak": "#fafafa",

      skeleton: "#d4d4d4",
    },
  },
  plugins: [],
};
