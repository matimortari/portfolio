import type { Config } from "tailwindcss"

export default <Partial<Config>>{
  darkMode: "class",
  theme: {
    fontFamily: {
      sans: ["Inter"],
      serif: ["Merriweather"],
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        muted: {
          DEFAULT: "var(--muted)",
          foreground: "var(--muted-foreground)",
        },
        accent: "var(--accent)",
        border: "var(--border)",
      },
    },
  },
}
