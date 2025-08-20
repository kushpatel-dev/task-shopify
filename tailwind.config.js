module.exports = {
  content: [
    "./**/*.liquid",   // all your Shopify templates
    "./**/*.html",
    "./**/*.js"
  ],
  theme: {
    extend: {
      screens: {
        xs: "400px", // 👈 your custom breakpoint
      },
    },
  },
  plugins: [],
};
