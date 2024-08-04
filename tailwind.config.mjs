/** @type {import('tailwindcss').Config} */
import typographyPlugin from "@tailwindcss/typography";
import defaultTheme from "tailwindcss/defaultTheme";

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    darkMode: "class",
    container: {
      center: true,
    },
    fontFamily: {
      sans: ["Manrope", ...defaultTheme.fontFamily.sans],
    },
    extend: {
      colors: {
        primary: {
          50: "#f1f0ff",
          100: "#e7e4ff",
          200: "#d1cdff",
          300: "#b1a5ff",
          400: "#8b72ff",
          500: "#683aff",
          600: "#5812ff",
          700: "#4801ff",
          800: "#3b00d4", // Ana renk
          900: "#3302b0",
        },
        secondary: {
          50: "#ecfeff",
          100: "#cefcff",
          200: "#a4f6fd",
          300: "#43e8fa", //Ana renk
          400: "#1fd9f1",
          500: "#03bcd7",
          600: "#0695b4",
          700: "#0c7792",
          800: "#146176",
          900: "#154f64",
          950: "#073445",
        },

        dark: "#121212", // Koyu gri
        light: "#F7F7F7", // Beyaz
      },
      width: {
        40: "40%",
        60: "60%",
        95: "95%",
      },
      height: {
        3200: "3200px",
        900: "900px",
      },
      fontSize: {
        10: "10px",
        20: "20px",
        30: "30px",
        40: "40px",
        50: "50px",
        60: "60px",
        70: "70px",
        80: "80px",
        90: "90px",
        100: "100px",
      },
    },

    screens: {
      lg: "1440px", // Büyük ekranlar (1440px ve üzeri)
      md: "810px", // Tabletler (810px ile 1439px arasında)
      sm: "809px", // Mobil cihazlar (809px ve altı)
    },
  },
  plugins: [typographyPlugin],
};
