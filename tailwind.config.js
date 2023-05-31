/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {colors:{
      mainClr:'#0B3366',
      textLight:'#C6C6C6',
      darkBlue:'#0B3366'
    }},
  },
  plugins: [],
}