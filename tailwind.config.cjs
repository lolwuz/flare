
/** @type {import('tailwindcss').Config} */
const config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)"],
      },
      backgroundImage: {
        "hero-pattern": "url('/hexagons.svg')",
      },
    },
  },
  plugins: [],
};

module.exports = config;
