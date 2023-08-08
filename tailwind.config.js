/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'header' : ['Edu SA Beginner'],
        'sans': ['Roboto'],
      },
      fontSize: {
        sm: '0.8rem',
        base: '1rem',
        xl: '1.1rem',
        '2xl': '1.563rem',
        '3xl': '1.953rem',
        '4xl': '2.441rem',
        '5xl': '3.052rem',
      },
      colors: {
        'red-600': '#370511',
        'red-500':'#643843',
        'red-400':'#77580',
        'white-red':'#fef2f2',
        'gray':'#595959',
        'gray-200':'#a19f9f',
        'gray-100':'#b3b3b3',
        'black': '#000000',
      },
      backgroundImage: {
        'img1': "url('https://images.pexels.com/photos/691919/pexels-photo-691919.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
        'img4': "url('https://images.pexels.com/photos/417344/pexels-photo-417344.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
      },
    },
    screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px'
    },
    
  },
  plugins: [],
}
