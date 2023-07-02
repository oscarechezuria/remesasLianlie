/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "1140px",
      xl: "1440px",
    },
    colors: {
      one: "#fcc000",
      two: "#ffffff",
      three: "#242424",
    },
  },
  plugins: [],
};
