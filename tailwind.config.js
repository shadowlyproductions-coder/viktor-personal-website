/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        midnight: "#100f0d",
        carbon: "#171614",
        graphite: "#24211d",
        steel: "#a79f94",
        electric: "#c6925f",
        ice: "#f4f1eb",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      boxShadow: {
        glow: "0 16px 44px rgba(198, 146, 95, 0.12)",
        premium: "0 24px 70px rgba(0, 0, 0, 0.28)",
      },
      backgroundImage: {
        "subtle-warm":
          "radial-gradient(circle at 22% 12%, rgba(198, 146, 95, 0.11), transparent 32%)",
      },
    },
  },
  plugins: [],
};
