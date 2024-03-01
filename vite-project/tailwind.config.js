/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter:["inter", "sans-serif"]
      },
      colors: {
        primary: "#6153CD",
      },
      container: {
        center: true,
        padding: {
          default: "1rem",
          sm: "3rem",
        

        }
      }
    },
  },
  plugins: [],
}

