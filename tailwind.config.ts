import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#CF2D1E",
        secondary: "#FFFBE9",
      },
      backgroundImage: {
        gradient: "linear-gradient(135deg, #c83737, #FF6347)",
      },
      fontFamily: {
        'kanit' : ["Kanit", "serif"]
      }
    },
  },
  plugins: [],
} satisfies Config;
