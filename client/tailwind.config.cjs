/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        rowdies: ["Rowdies", "cursive"],
      },
      colors: {
        tomato: {
          100: "#ffe0dc",
          200: "#ffc1b9",
          300: "#fea395",
          400: "#fe8472",
          500: "#fe654f",
          550: "#f35b44",
          600: "#cb513f",
          700: "#983d2f",
          800: "#662820",
          900: "#331410"
        },
        sunset: {
          100: "#fff7eb",
          200: "#fff0d7",
          300: "#fee8c3",
          400: "#fee1af",
          500: "#fed99b",
          600: "#cbae7c",
          700: "#98825d",
          800: "#66573e",
          900: "#332b1f"
        },
        sage: {
          100: "#f6f4ec",
          200: "#edead9",
          300: "#e3dfc7",
          400: "#dad5b4",
          500: "#d1caa1",
          600: "#a7a281",
          700: "#7d7961",
          800: "#545140",
          900: "#2a2820"
        },
      },
    },
  },
  plugins: [],
};
