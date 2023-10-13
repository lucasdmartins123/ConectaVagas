/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        azul: {
          100: "#3CC6F1",
          200: "rgb(51, 51, 51)",
        },
        alura: {
          100: "#167BF7",
          200: "#051933",
        },
      },
    },
  },
  variants: {
    extend: {
      ringColor: ["focus"],
      ringWidth: ["focus"],
    },
  },
  plugins: [],
};
