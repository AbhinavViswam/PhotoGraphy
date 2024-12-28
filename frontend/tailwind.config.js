/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    theme: {
      extend: {
        colors: {
          avocado: {
            dark: "#3B5323", // Dark avocado green
            medium: "#6B8E23", // Medium avocado green
            light: "#D0E1A4", // Light avocado green
            highlight: "#A9BA9D", // Highlight avocado green
          },
        },
      },
    },
  },
  plugins: [],
}