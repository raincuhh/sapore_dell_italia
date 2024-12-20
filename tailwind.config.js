/** @type {import('tailwindcss').Config} */

module.exports = {
   content: ["./src/**/*.{js,jsx,ts,tsx}"],
   theme: {
      extend: {
         screens: {
            xs: "470px",
            "sm-md": "500px",
            "md-sm": "600px",
         },
         colors: {
            bg: "rgba(28, 33, 38, 1)",
            "bg-secondary": "rgba(38, 43, 48, 1)",
            "bg-secondary-alt": "rgba(48, 53, 58, 1)",
            white: "rgba(255, 255, 255, 1)",
            light: "rgba(239, 232, 227, 1)",
            dark: "rgba(23, 27, 31, 1)",
            black: "rgba(0, 0, 0, 1)",
            main: "rgba(221, 147, 102, 1)",
            "main-alt": "rgba(221, 147, 102, 0.8)",
            secondary: "rgba(240, 232, 227, 1)",
            "secondary-low-opacity": "rgba(240, 232, 227, 0.2)",
            "secondary-middle-opacity": "rgba(240, 232, 227, 0.5)",
            "secondary-alt": "rgba(229, 222, 217, 1)",
            tertiary: "rgba(237, 225, 218, 1)",
         },
         spacing: {
            "m-em-m": "1em",
            "m-em-s": "calc(1em / 1.618)",
            "m-em-xs": "calc((1em / 1.618) / 1.618)",
            "m-em-xxs": "calc(((1em / 1.618) / 1.618) / 1.618)",
            "m-em-l": "calc(1em * 1.618)",
            "m-em-xl": "calc((1em * 1.618) * 1.618)",
            "m-em-xxl": "calc(((1em * 1.618) * 1.618) * 1.618)",
            "max-width": "clamp(76rem, 53vw, 84rem)",
         },
         fontSize: {
            "fs-xxs": "0.625rem",
            "fs-xs": "0.75rem",
            "fs-s": "0.875rem",
            "fs-m": "1rem",
            "fs-l": "1.5rem",
            "fs-xl": "2rem",
            "fs-2xl": "2.5rem",
            "fs-3xl": "3.5rem",
            "fs-4xl": "5.5rem",
            "fs-5xl": "7.125rem",
         },
         zIndex: {
            loader: "4000",
            cursor: "3000",
            nav: "2048",
            "scroll-nav": "2047",
            "page-scroll-wrapper": "100",
         },
         fontFamily: {
            libre: ['"Libre Baskerville"', "serif"],
            raleway: ['"Raleway"', "sans-serif"],
            inter: ['"Inter"', "sans-serif"],
            playfair: ['"Playfair Display"', "serif"],
            main: ['"Satoshi-Variable"', "sans-serif"],
         },
         transitionProperty: {
            "hover-base": "all",
         },
         transitionTimingFunction: {
            "ease-in-out": "ease-in-out",
         },
         transitionDuration: {
            100: "100ms",
         },
      },
   },
   plugins: [],
};
