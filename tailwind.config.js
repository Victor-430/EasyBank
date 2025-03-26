/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        LimeGreen: "hsl(136, 65%, 51%)",
        Cyan: "hsl(192, 70%, 51%)",
      },
      backgroundColor: {
        DarkBlue: "hsl(233, 26%, 24%)",
        GrayBlue: "hsl(233, 8%, 62%)",
        LightGrayBlue: " hsl(220, 16%, 96%)",
        LightGray: "hsl(0, 0%, 98%)",
      },
      textColor: {
        DarkBlue: "hsl(233, 26%, 24%)",
        GrayBlue: "hsl(233, 8%, 62%)",
        LimeGreen: "hsl(136, 65%, 51%)",
        LightGray: "hsl(0, 0%, 98%)",
        LightGrayBlue: " hsl(220, 16%, 96%)",
      },

      background: {
        desktop: "url('/src/assets/images/bg-intro-desktop.svg')",
        mobile: "url('/src/assets/images/bg-intro-mobile.svg')",
      },
      fontFamily: {
        font: "Public San",
      },
    },
  },
  plugins: [],
};
