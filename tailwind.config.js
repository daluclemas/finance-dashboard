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
        denim: "#1A55AF",
        lightDenim: "rgba(26,85,175,0.2)",
        raven: "#6F767E",
        customOrange: "rgba(250,95,28,0.2)",
        customGreen: "rgba(66,122,10,0.2)",
        customPurple: "rgba(88,67,190,0.2)",
      },
      fontFamily: {
        googleSans: ["google-sans", "sans-serif"],
        tomorrowFont: ["Tomorrow", "sans-serif"],
      },
    },
  },
  plugins: [],
};
