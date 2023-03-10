/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        tablet: "576px",
        desktop: "1024px",
      },
      colors: {
        darkViolet: "hsl(256, 26%, 20%)",
        grayishBlue: "hsl(216, 30%, 68%)",
        veryDarkViolet: "hsl(270, 9%, 17%)",
        darkGrayishViolet: "hsl(273, 4%, 51%)",
        veryLightGray: "hsl(0, 0%, 98%)",
      },
      fontFamily: {
        karla: ["Karla", "sans-serif"],
        dm: ["DM Serif Display", "sans-serif"],
      },
      backgroundImage: {
        ctaDesktop: "url(./assets/images/bg-pattern-how-we-work-desktop.svg)",
        ctaMobile: "url(./assets/images/bg-pattern-how-we-work-mobile.svg)",
        mobileNavPattern: "url(./assets/images/bg-pattern-mobile-nav.svg)",
        footerDesktop: "url(./assets/images/bg-pattern-footer-desktop.svg)",
        footerMobile: "url(./assets/images/bg-pattern-footer-mobile.svg)",
      },
      boxShadow: {
        header: "0 5px 5px 0 rgb(0 0 0 / .3)",
      },
    },
  },
  plugins: [],
};
