/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,ts,scss}"],
  theme: {
    extend: {
      colors: {
        dpeA: "#1FC3AC",
        dpeADark: "#1A9F8D",

        dpeB: "#6BDCCE",
        dpeBDark: "#58B8AD",

        dpeC: "#CDF3EF",
        dpeCDark: "#A3DBD9",

        dpeD: "#FEE4AC",
        dpeDDark: "#E5C98D",

        dpeE: "#FECAAD",
        dpeEDark: "#E6B093",

        dpeF: "#FCCAD3",
        dpeFDark: "#E0A9B5",

        dpeG: "#F7718A",
        dpeGDark: "#D65E75",

        gesA: "#EFF3FF",
        gesADark: "#D8E0F0",

        gesB: "#DDE5FC",
        gesBDark: "#C2D1F0",

        gesC: "#CCD7FB",
        gesCDark: "#AABBE3",

        gesD: "#A8BCF8",
        gesDDark: "#869EDC",

        gesE: "#86A1F6",
        gesEDark: "#6B86D6",

        gesF: "#7594F5",
        gesFDark: "#5D79D0",

        gesG: "#537AF3",
        gesGDark: "#4060CF",
        primary: "#00007A",
        secondary: "#FB9031",
        accent: "#FF4081",
        neutral: "#3D4451",
        info: "#3ABFF8",
        success: "#36D399",
        warning: "#FBBD23",
        error: "#F87272",
        myzinc:"#193252",
        mygrey:"#636D7B",
        myblue: "#020B78",
        myblue2: "#F2F3F8",
        myorange: "#FF8B37",
        myorange2: "#FFF9F5",

      },
      fontFamily: {
        quicksand: ["Quicksand", "sans-serif"],
        paytone: ["Paytone One", "sans-serif"],
        open: ["Open Sans Variable", "sans-serif"],
        jakarta: ["Plus Jakarta Sans", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
        alternates: ["Montserrat Alternates", "sans-serif"],
      },
      spacing: {
        128: "32rem",
        144: "36rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      fontSize: {
        xxs: ".625rem",
        mega: "4rem",
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#020B78", 
          "base-100": "#ffffff", 
        },
      },
    ],
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("daisyui"),
  ],
};
