import react from "@vitejs/plugin-react";

export default {
  plugins: [react()],
  assetsInclude: ["**/*.JPG"],
  base: process.env.GITHUB_PAGES === "true" ? "/utra25-26/" : "/",
};
