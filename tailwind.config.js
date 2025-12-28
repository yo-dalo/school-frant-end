/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      colors: {
        brand: {
          light: "#93C5FD",
          DEFAULT: "#3B82F6",
          dark: "#1E40AF",
        },
        main: "#34495E",
        mainOne: "#ECF0F1",
        accent: "#F97316",
      },

      animation: {
        'spin-slow': 'spin 30s linear infinite',

      },
      screens: {
        'phone': { max: '600px' },
        "md": { max: '1020px' },
      },







    },
  },
  plugins: [],
}

