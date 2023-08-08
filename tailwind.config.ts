import { type Config } from "tailwindcss"

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Barlow: "Barlow Condensed",
        Bellefair: "Bellefair"
      },
    },
  },
  plugins: [],
} satisfies Config
