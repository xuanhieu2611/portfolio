/**
 * Single source of truth for all colors used in the project.
 * Change values here to update the theme across the entire app.
 */
export const colors = {
  light: {
    background: "#FAFAFA",
    "background-elevated": "#FFFFFF",
    "background-card": "#F5F5F5",
    border: "#E5E5E5",
    "border-subtle": "#D4D4D4",
    // Contrast-checked against #FAFAFA / #FFFFFF for WCAG AA (4.5:1 body text).
    foreground: "#171717",
    "foreground-muted": "#6B6B6B", // 5.10:1 on background
    "foreground-subtle": "#525252", // 7.49:1 on background
    "foreground-faint": "#404040", // 10.4:1 on background-elevated
    selection: { bg: "#171717", text: "#FAFAFA" },
  },
  dark: {
    background: "#111111",
    "background-elevated": "#1A1A1A",
    "background-card": "#161616",
    border: "#222222",
    "border-subtle": "#333333",
    // Contrast-checked against #111111 / #1A1A1A for WCAG AA (4.5:1 body text).
    foreground: "#EAEAEA",
    "foreground-muted": "#9E9E9E", // 7.10:1 on background
    "foreground-subtle": "#808080", // 4.82:1 on background
    "foreground-faint": "#8A8A8A", // 5.04:1 on background-elevated
    selection: { bg: "#EAEAEA", text: "#111111" },
  },
}
