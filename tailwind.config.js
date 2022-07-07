module.exports = {
  content: ["./src/**/*.{html,js, jsx, tsx}"],
  darkMode: 'class',
  important: true,
  theme: {
    extend: {
      fontFamily:{
        'Montserrat': ['Montserrat', 'Open_Sans']
      },
      colors: {
        blue: { primary: "#00183A", light: "#B9E6FF", bg: "#EAFBFF" },
      },
      minHeight: {
        36: "9rem"
      },
    },
  },

  plugins: [],
};
