export default {
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
        card: {
          DEFAULT: "var(--card)",
          foreground: "var(--card-foreground)",
        },
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
