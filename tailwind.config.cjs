/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      fontFamily: {
        dmsans: ['"DM Sans"', 'sans-serif'],
      },
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
        'gradient': `
          radial-gradient(circle at center, #1e40af 0%, transparent 70%),
          linear-gradient(to bottom right, #0f172a 0%, #020617 100%)
        `,
      },
    },
  },
  plugins: [],
};
