/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sfProDisplay: ["SF Pro Display"],
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".no-scroll": {
          overflow: "hidden",
        },
      });
    },
    require("tailwind-scrollbar-hide"),
  ],
};
