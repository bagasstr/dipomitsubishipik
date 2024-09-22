/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/component/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: { max: "575px" },
      md: { max: "767px" },
      lg: { max: "1023px" },
      xl: "1024px",
    },
    extend: {
      gridTemplateColumns: {
        20: "repeat(20, minmax(200px, 1fr))",
      },
    },
  },
  plugins: [],
};
