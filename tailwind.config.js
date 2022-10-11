/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#5D5FEF",

          "secondary": "#44403c",

          "accent": "#06b6d4",

          "neutral": "#15141F",

          "base-100": "#FFFFFF",

          "info": "#92BFDD",

          "success": "#137650",

          "warning": "#BE830E",

          "error": "#F44349",
        },
      },
    ],

  },
}
