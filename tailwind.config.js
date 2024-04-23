/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Nunito: ["Nunito Sans", "sans-serif"],
        Josefin: ["Josefin Sans", "sans-serif"],
        Tilt: ["Tilt Neon", "sans-serif"],
      },
      backgroundImage: {
        "two-color":
          "url('https://img.freepik.com/premium-photo/summer-3d-style-with-papercut-background_266768-918.jpg')",
      },
    },
  },
  plugins: [],
};
