/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      spacing: {
        GNB_HEIGHT: "5rem",
        BOTTOM_BAR_HEIGHT: "6.25rem",

        MAX_MAIN_WIDTH: "62.5rem",
        MAIN_PADDING_X: "1.25rem",
      },

      zIndex: {
        BOTTOM_BAR: "40",
        GNB: "50",
      },

      animation: {
        "slide-up": "slideUp 0.35s ease-out forwards",
      },
      keyframes: {
        slideUp: {
          "0%": { transform: "translateY(100%)" },
          "100%": { transform: "translateY(0)" },
        },
      },
    },

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
