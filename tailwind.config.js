/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{html,js,jsx,ts,tsx}", // Include your source files
  ],
  theme: {
    extend: {
      fontFamily: {
        Manrope: ["Manrope", "serif"],
        Tiny5: ["Tiny5", "serif"],
      },
      colors: {
        tradeWhite: "#eeeef1",
        tradeFadeWhite: "#AAAAAA",
        tradeBlack: "#111116",
        tradeAsh: "#121212",
        tradeAshLight: "#282828",
        tradeAshExtraLight: "#464646",
        tradeBorder: "#404040",
        tradeGreen: "#00de82",
        tradePurple: "#9e62ff",
        tradeOrange: "#ffcb4d",
      },
      boxShadow: {
        tradeSpreadOut: "0 0 20px 2px rgba(34, 197, 94, -0.20)",
        tradeHoverInDefault: "inset 0 0 20px 2px rgba(255, 255, 255, 0.20)",
        tradeHoverIn: "inset 0 0 5px 2px rgba(255, 255, 255, 0.10)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [], // No need to add PostCSS here
};
