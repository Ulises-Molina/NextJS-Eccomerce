/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['"Montserrat"', "sans-serif"], // Opción adicional
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary : "#81a78a",
        letra : "#111d15",
      },
    },
  },
  plugins: [],
};
