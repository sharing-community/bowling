const { guessProductionMode } = require("@ngneat/tailwind");

process.env.TAILWIND_MODE = guessProductionMode() ? "build" : "watch";

module.exports = {
  prefix: "",
  mode: process.env.NODE_ENV ? "jit" : undefined,
  purge: {
    content: [
      "./src/**/*.{html,ts,css,scss,sass,less,styl}"
    ]
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      sm: { max: "767px" },
      md: { max: "1023px", min: "768px" },
      lg: { max: "1439px", min: "1024px" },
      xl: { min: "1440px" }
    },
    extend: {
      fontFamily: {
        "ibm": ["IBM Plex Mono"],
      },
      fontSize: {
        h1: ['3.875rem', { lineHeight: '4.875rem', letterSpacing: '0' }],
        h2: ['3rem', { lineHeight: '3.75rem', letterSpacing: '0' }],
        h3: ['2rem', { lineHeight: '2.5rem', letterSpacing: '0' }],
        h4: ['1.75rem', { lineHeight: '2.25rem', letterSpacing: '0' }],
        h5: ['1.5rem', { lineHeight: '1.875rem', letterSpacing: '0' }],
        h6: ['1.25rem', { lineHeight: '1.625rem', letterSpacing: '0' }],
        h7: ['1rem', { lineHeight: '1.5rem', letterSpacing: '0' }],
        h8: ['0.875rem', { lineHeight: '1.25rem', letterSpacing: '0' }],
        h9: ['0.75rem', { lineHeight: '1rem', letterSpacing: '0.01rem' }],
        h10: ['0.625rem', { lineHeight: '1rem', letterSpacing: '0.02rem' }],
        b1: ['1.125rem', { lineHeight: '1.5rem', letterSpacing: '0' }],
        b2: ['1rem', { lineHeight: '1.5rem', letterSpacing: '0' }],
        b3: ['0.875rem', { lineHeight: '1.25rem', letterSpacing: '0' }],
        b4: ['0.75rem', { lineHeight: '1rem', letterSpacing: '0.01rem' }],
        b5: ['0.625rem', { lineHeight: '1rem', letterSpacing: '0.02rem' }],
      },
    }
  },
  variants: {
    extend: {
      borderColor: ["responsive", "dark", "group-hover", "focus-within", "hover", "focus", "active"],
      textColor: ["responsive", "dark", "group-hover", "focus-within", "hover", "focus", "active"],
      backgroundColor: ["responsive", "dark", "group-hover", "focus-within", "hover", "focus", "active"]
    }
  },
  plugins: []
};
