/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  important: true,
  theme: {
    extend: {
      colors: {
        primary: "#161f26",
        secondary: "#1e2a33",
        charcoal: "#263C4D",
        cadet: "#636F78",
        bistre: "#463127",
        "powder-blue": "#CBD5E1",
        "steel-blue": "#6F818E",
        "cadet-gray": "#8796A2",
        "slate-gray": "#657079",
        "light-orange": "#F17336",
        "dark-orange": "#F05409",
        "dark-black": "#0B0F12",
        "raisin-black": "#27272A",
        "dark-coffee": "#674040",
        "light-coffee": "#675040",
        "light-blue": "#3398E4",
        "dark-blue": "#4C99D6",
        "gunmetal-dark": "#222E37",
        "gunmetal-green": "#2D3841",
        "pale-green": "#9DF587",
        "squid-ink": "#263541",
        "pale-copper": "#EB8959",
        "quick-silver": "#a1a1aa",
        "dark-cadet": "#66727B",
        "gray-asparagus": "#435B3D",
        "light-purple": "#6273F5",
        "dark-charcoal": "#30404D",
        "light-pink": "#EE6363",
        "zinc-100": "#F4F4F5",
      },
      lineHeight: {
        normal: "normal",
      },
      backgroundImage: {
        "gradient-liener":
          "linear-gradient(180deg, #F2873A 0%, rgba(168, 217, 255, 0.84) 100%)",
      },
    },
  },
  plugins: [],
};
