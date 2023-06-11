/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        main: ["bpg", "serif"],
        main2: ["Saira Condensed"],
        main3: ["Staatliches", "cursive"],
      },
      height: {
        halfScreen: "80vh",
        smallerSection: "15vh",
        section: "50vh",
        largerSection: "70vh",
        xlSection: "90vh",
        bigPic: "55vh",
        biggerPic: "70vh",
      },
      width: {
        mid: "40rem",
        xs: "30rem",
        xl: "90vh",
      },
      colors: {
        white: "#FFF",
        footer: "#212529",
        footerSecndary: "#1C2023",
      },
    },
  },
  plugins: [],
};
