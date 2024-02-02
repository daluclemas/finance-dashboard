/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        quartz: "#F6F7FC",
        blueViolet: "#623CE7",
        seashell: "#FFF0E6",
        ghostwhite: "#ECEAFE",
        aliceBlue: "#E5F7FF",
        shadyLady: "#979797",
        radicalRed: "#FF4267",
        ceruleanBlue: "#3629B7",
        whiteSmoke: "#ECECEC",
        dodgerBlue: "#0890FE",
        superNova: "#FFAF2A",
        mediumTurquoise: "#52D5BA",
        lightBlueViolet: "rgba(98,60,231,0.2)",
        ghost: "#BCBDC2",
      },
      fontFamily: {
        googleSans: ["google-sans", "sans-serif"],
        tomorrowFont: ["Tomorrow", "sans-serif"],
      },
    },
  },
  plugins: [],
};
