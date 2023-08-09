import { type Config } from "tailwindcss"

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        BarlowCondensed: "Barlow Condensed",
        Barlow: "Barlow",
        Bellefair: "Bellefair",
      },
    },
  },
  plugins: [],
} satisfies Config
