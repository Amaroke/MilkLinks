import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        space: "url('../assets/img/space-bg.jpg')",
      },
    },
  },
  plugins: [],
};

export default config;
