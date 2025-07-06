/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./layouts/**/*.html",
    "./content/**/*.{html,md}",
    "./themes/**/*.{html,js}",
    "./partials/**/*.html", // penting untuk komponen terpisah
  ],
  theme: {
    extend: {
      fontFamily: {
        firacode: ['"Fira Code"', "monospace"],
        plusjakarta: ['"Plus Jakarta Sans"', "ui-sans-serif", "system-ui"],
        sans: ['"Plus Jakarta Sans"', "ui-sans-serif", "system-ui"], // fallback global
      },
      colors: {
        primary: "#f07f48",
        secondary: "#659fb2",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/line-clamp"),
  ],
  safelist: [
    "text-4xl",
    "text-5xl",
    "text-6xl",
    "bg-[#659fb2]",
    "bg-[#558a9a]",
    // tambahkan jika ada class dinamis lain dari CMS
  ],
};
