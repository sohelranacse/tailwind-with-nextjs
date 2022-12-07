module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        13: "3.25rem",
      },
    },
    fontFamily: {
      sans: ['"Cambria"'],
      sans2: ['"Informal Roman"'],
    },
  },
  plugins: [],
};
