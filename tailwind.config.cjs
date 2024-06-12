/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#03002e",
        secondary: "#d6cadd",
        tertiary: "rgba(59, 59, 59, 0.75)",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        'gradient': "radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%)",
      },
    },
  },
  plugins: [],
};
