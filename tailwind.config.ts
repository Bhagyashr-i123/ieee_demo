import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ieeeBlue: "#00629B",
        signalNavy: "#0A1628",
        signalNavyLight: "#101F36",
        signalCyan: "#3FD0FF",
        signalViolet: "#6C63FF",
        paper: "#F7F9FC",
        ink: "#0D1321",
        mist: "#8A94A6",
        success: "#2ECC71",
        warning: "#F5A623",
        danger: "#EF4444",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      backgroundImage: {
        "signal-gradient": "linear-gradient(135deg, #0A1628 0%, #6C63FF 120%)",
        "cta-gradient": "linear-gradient(90deg, #3FD0FF 0%, #6C63FF 100%)",
      },
      boxShadow: {
        card: "0 8px 24px -12px rgba(10, 22, 40, 0.25)",
        cardHover: "0 16px 32px -12px rgba(10, 22, 40, 0.35)",
      },
      borderRadius: {
        xl2: "1.25rem",
      },
    },
  },
  plugins: [],
};

export default config;
