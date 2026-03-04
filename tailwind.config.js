export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      colors: {
        background: "var(--color-background)",
        "background-elevated": "var(--color-background-elevated)",
        "background-card": "var(--color-background-card)",
        border: "var(--color-border)",
        "border-subtle": "var(--color-border-subtle)",
        foreground: "var(--color-foreground)",
        "foreground-muted": "var(--color-foreground-muted)",
        "foreground-subtle": "var(--color-foreground-subtle)",
        "foreground-faint": "var(--color-foreground-faint)",
        primary: "var(--color-foreground)",
        "primary-foreground": "var(--color-background)",
        accent: "var(--color-background-elevated)",
        "accent-foreground": "var(--color-foreground)",
        input: "var(--color-border)",
        destructive: "#ef4444",
        "destructive-foreground": "#ffffff",
        ring: "var(--color-foreground)",
      },
    },
  },
  plugins: [],
}
