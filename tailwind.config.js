/** @type {import('tailwindcss').Config} */
export default {
   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
   theme: {
      extend: {
         colors: {
            primary: "#2B3939",
            secondary: "#5CA5A5",
            tertiary: "#7C8F8F",
            secondaryOpacity: "rgb(92, 165, 165, 0.1)",
            mainBg: "#EFFAFA",
         },
         boxShadow: {
            card: "0px 15px 20px -5px rgba(13, 113, 130, 0.15)",
         },
      },
      container: {
         padding: {
            DEFAULT: "1rem",
            sm: "2rem",
            lg: "4rem",
            xl: "5rem",
            "2xl": "6rem",
         },
      },
   },
   plugins: [],
};
