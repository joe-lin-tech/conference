module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#60A5FA", // For lighter primary color
          DEFAULT: "#3482F6", // Normal primary color
          dark: "#2563EB", // Used for hover, active, etc.
        },
      },
    },
  },
  plugins: [
    require("kutty")
  ],
}
