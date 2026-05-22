/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        midnight: "#030A1C",
        carbon: "#051024",
        graphite: "#061831",
        navyDark: "#0B1C3E",
        navyBase: "#11244A",
        steel: "#B7C8E8",
        electric: "#7DB3FF",
        ice: "#F2F7FF",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      boxShadow: {
        glow: "0 16px 44px rgba(125, 179, 255, 0.16)",
        premium: "0 24px 70px rgba(0, 6, 24, 0.42)",
      },
      backgroundImage: {
        "subtle-navy":
          "radial-gradient(circle at 22% 12%, rgba(125, 179, 255, 0.13), transparent 34%), radial-gradient(circle at 78% 8%, rgba(17, 36, 74, 0.26), transparent 30%)",
      },
    },
  },
  plugins: [],
};
