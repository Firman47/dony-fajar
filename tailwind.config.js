// /** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Inter', 'sans-serif'],
      },
      colors: {
        "light-blue": {
          50: "#fafdfe",
          100: "#f0f8fd",
          200: "#e8f4fb",
          300: "#def0fa",
          400: "#d8edf9",
          500: "#cee8f7",
          600: "#bbd3e1",
          700: "#92a5af",
          800: "#718088",
          900: "#576168",
        },
        "dark-blue": {
          50: "#eaebf3",
          100: "#bdc1da",
          200: "#9da3c8",
          300: "#7178af",
          400: "#555ea0",
          500: "#2b3688",
          600: "#27317c",
          700: "#1f2661",
          800: "#181e4b",
          900: "#181e4b",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
