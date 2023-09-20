/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
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
