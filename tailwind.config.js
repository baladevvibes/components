/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "footer-texture": "url('../Image/teams/Teams002.webp')",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    screens: {
      sm: { max: "640px" },
      // => @media (min-width: 640px) { ... }
      mdsm: "641px",
      // => @media (min-width: 768px) { ... }
      md: "768px",
      // => @media (min-width: 768px) { ... }
      lge: "960px",
      // => @media (min-width: 1024px) { ... }
      lg: "1150px",
      // => @media (min-width: 1024px) { ... }
      xl: "1280px",
      // => @media (min-width: 1280px) { ... }
      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    colors: {
      primary: "#F19C1C",
      secondary: "#1E1E1E",
      white: "#ffffff",
      textcolor: "#5a5a5a",
    },
  },
  plugins: [],
};
