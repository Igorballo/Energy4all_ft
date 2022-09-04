/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      colors: {
        eng: {
          100: "#03A678",
          300: "#02735E",
          500: "#014040",
          700: "#F27405",
          900: "#731702",
          "hover-btn-500": "#b45309",
          "hover-btn-800": "#7c2d12",

        },
      },
      fontFamily: {
        eng: ['DM Sans'],
        body: ["Arvo"],
      },
      screens: {
        sm: "640px",
        // => @media (min-width: 640px) { ... }
        // smd: "600px",
        // => @media (min-width: 640px) { ... }
        md: "768px",
        // => @media (min-width: 768px) { ... }
        lg: "1024px",
        // => @media (min-width: 1024px) { ... }
        xl: "1280px",
        // => @media (min-width: 1280px) { ... }
        "2xl": "1536px",
        // => @media (min-width: 1536px) { ... }
      },
    },
  },
  plugins: [],
}
