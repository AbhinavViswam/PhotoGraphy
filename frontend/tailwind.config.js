/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
     
      animation: {
        flyIn: "flyIn 0.8s ease-out forwards",
      },
      keyframes: {
        flyIn: {
          "0%":{
            scale:"0.6"
          },
          "100":{
            scale:"1"
          }
        },
      },
    },
  },
  plugins: [],
};
