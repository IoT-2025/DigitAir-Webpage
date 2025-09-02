/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'default-card': '0px 2px 20px 2px rgba(0, 0, 0, 0.1)', // x, y, blur, spread, color
        'navlink': '2px 0px 20px 2px rgba(0, 0, 0, 0.1)', // x, y, blur, spread, color
        'object-card': '0px 2px 20px 2px rgba(0, 0, 0, 0.2)', // x, y, blur, spread, color
      },
      backgroundImage: {
        'app-gradient': 'linear-gradient(to top, #2e2e2e 30%, #383838)',
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        white: '#FBFBFB',
        black: '#121212',
        primary: '#1A7358',
        secondary: '#C5D7C6',
        tertiary: '#135F48',
        base:"#1E1E1E",
        rose:"#EDD8D7",
        softblack: '#3D3D3D',
        coal:'#212121',
        glass:'#212121B3',
        darkglass:'#212121CC',
        lightgray:'#a8a8a8',
          "err-txt": "#B71C1C",
          "err-bg": "#EF9A9A",

        "warn-txt": "#CBA727",
        "warn-bg": "#FFFA8E",

        "ok-txt": "#295429",
        "ok-bg": "#6fd96f",

        "info-txt": "#1a5a8f",
        "info-bg": "#a2c2db",
      },
    },
  },
  plugins: [],
};
