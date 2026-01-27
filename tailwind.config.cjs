/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        bgMain: "#00111d",
        bgSecondary: "#002136",
        accent: "#00d1b2",
        textPrimary: "#f5f7fa",
        textSecondary: "#c3ced9",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
