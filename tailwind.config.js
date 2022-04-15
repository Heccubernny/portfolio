const colors = require("tailwindcss/colors");
const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      transitionDuration: {
        0: "0ms",
        2000: "2000ms",
        4000: "4000ms",
      },
      fontFamily: {
        'sans': ['Poppins', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {
    extend: {},
    display: ["responsive", "group-hover", "group-focus"],
  },

  plugins: [],
};
