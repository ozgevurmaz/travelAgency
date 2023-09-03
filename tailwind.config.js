/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        header: ["Edu SA Beginner"],
        sans: ["Roboto"],
      },
      fontSize: {
        sm: "0.8rem",
        base: "1rem",
        xl: "1.1rem",
        "2xl": "1.563rem",
        "3xl": "1.953rem",
        "4xl": "2.441rem",
        "5xl": "3.052rem",
      },
      colors: {},
      backgroundImage: {
        img1: "url('https://images.pexels.com/photos/691919/pexels-photo-691919.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
        img2: "url('https://images.pexels.com/photos/4321802/pexels-photo-4321802.jpeg?auto=compress&cs=tinysrgb&w=1200')",
        img3: "url('/public/bg-3.jpeg')",,
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
  },
  plugins: [],
};
