import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: { DEFAULT: "#5B8CFF", dark: "#101A2A", accent: "#15C39A" }
      }
    }
  }
} satisfies Config;
