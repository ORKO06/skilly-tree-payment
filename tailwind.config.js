module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    maxWidth: {
      "8xl": "1440px",
      300: "300px",
      250: "250px",
    },
    minWidth: {
      250: "250px",
    },
    width: {
      250: "300px",
    },
    extend: {
      color: {
        light: "#8C8C8C",
        medium: "#6b6b6b",
        greener: "#15C11C",
      },
      gridTemplateColumns: {
        // Simple 16 column grid
        main: "7fr 3fr",
        navbar: "1fr 2fr 1fr",
      },
      boxShadow: {
        main: "[-3px 4px 11px rgba(0, 0, 0, 0.18)",
      },
    },
  },
  plugins: [],
};
