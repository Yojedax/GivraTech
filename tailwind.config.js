/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        neon: {
          DEFAULT: "#00d4ff",
          dark:    "#0099cc",
          light:   "#33e0ff",
        },
        surface: {
          0: "#06080d",
          1: "#0a0e18",
          2: "#0f1420",
          3: "#151c2c",
          4: "#1c2538",
        },
        ink: {
          DEFAULT: "#e8edf5",
          soft:    "#c0c8d8",
          muted:   "#8892a8",
          light:   "#556178",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        body:    ["var(--font-body)", "system-ui", "sans-serif"],
        mono:    ["var(--font-mono)", "monospace"],
      },
      boxShadow: {
        card:       "0 2px 8px rgba(0,0,0,.3), 0 8px 24px rgba(0,0,0,.2)",
        "card-hover":"0 0 30px rgba(0,212,255,.08), 0 12px 40px rgba(0,0,0,.4)",
        neon:       "0 0 20px rgba(0,212,255,.20), 0 0 40px rgba(0,212,255,.10)",
        "neon-sm":  "0 0 10px rgba(0,212,255,.15)",
      },
      animation: {
        "fade-up":  "fadeUp .6s ease both",
        "fade-in":  "fadeIn .5s ease both",
        "slide-in": "slideIn .5s ease both",
      },
      keyframes: {
        fadeUp:  { from: { opacity:"0", transform:"translateY(20px)" }, to: { opacity:"1", transform:"none" } },
        fadeIn:  { from: { opacity:"0" }, to: { opacity:"1" } },
        slideIn: { from: { opacity:"0", transform:"translateX(-20px)" }, to: { opacity:"1", transform:"none" } },
      },
    },
  },
  plugins: [],
}
