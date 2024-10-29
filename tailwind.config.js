/** @type {import('tailwindcss').Config} */
module.exports = {
   content: ["./src/**/*.{js,jsx,ts,tsx}"],
   theme: {
      extend: {
         colors: {
            bg: "rgba(28, 33, 38, 1)",
            white: "rgba(255, 255, 255, 1)",
            light: "rgba(239, 232, 227, 1)",
            dark: "rgba(23, 27, 31, 1)",
            black: "rgba(0, 0, 0, 1)",
            main: "rgba(221, 147, 102, 1)",
            secondary: "rgba(240, 232, 227, 1)",
            "secondary-low-opacity": "rgba(240, 232, 227, 0.1)",
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
            "fs-xxs": "clamp(0.7rem, 1.25vw + 0.5rem, 0.875rem)",
            "fs-xs": "clamp(0.75rem, 1.5vw + 0.5rem, 1rem)",
            "fs-s": "clamp(0.875rem, 1.75vw + 0.5rem, 1.125rem)",
            "fs-m": "clamp(1rem, 2vw + 1rem, 1.5rem)",
            "fs-l": "clamp(1.25rem, 2.5vw + 1rem, 2rem)",
            "fs-xl": "clamp(1.5rem, 3vw + 1rem, 2.5rem)",
            "fs-xxl": "clamp(2rem, 4vw + 1rem, 3rem)",
            "fs-special-ms": "clamp(0.95rem, 1.85vw + 1rem, 1.25rem)",
            "fs-hero-s": "clamp(0.96rem, 1.46vw + 1rem, 1.5rem)",
            "fs-hero-m": "clamp(1.5rem, 3vw + 1rem, 1.75rem)",
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
