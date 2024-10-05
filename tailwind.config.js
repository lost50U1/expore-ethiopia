/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
      },
      colors: {
        lightgray: "#B3B3B3",
        lightergray: "rgba(26,26,26,0.36)",
        darkgray: "rgba(13,13,13,0.7)",
      },
    },
  },
  plugins: [],
};
