/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
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
