/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
    fontFamily:{
      poppins:["Poppins","sans-serif"],
      ubuntu:["Ubuntu","sans-serif"]
    },
    screens:{
      "sm":"480px",
      "md":"700px",
      "lg":"976px",
      "xl":"1440px"

    }
  },
  plugins: [],
}
