/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "utra-blue": "#0B3868",
        "utra-indigo": "#443186",
        "utra-purple": "#290536",
        "utra-pink": "#E2AFE2",
        "utra-gray": "#DDE5E7",
        "utra-light-purple": "#8686F3",

        // Gradient colors from design
        "gradient-start": "#4F4B60",
        "gradient-mid1": "#6D6886",
        "gradient-mid2": "#575078",
        "gradient-end": "#36397E",

        // Text gradient colors from Figma
        "text-gradient-purple": "#C286D3",
        "text-gradient-blue": "#7F7FFF",
      },

      fontFamily: {
        // Override default sans font to be Proxima Nova
        sans: ["proxima-nova", "sans-serif"],
        // Keep custom as backup
        custom: ["proxima-nova", "sans-serif"],
      },
    },
  },
  plugins: [],
};
