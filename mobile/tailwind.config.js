/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        background: "#ffffff",
        foreground: "#0a0a0a",
        blue: {
          DEFAULT: "#1447E6",
          accent: "#E3E9FD",
        },
        red: {
          DEFAULT: "#E7000B",
          accent: "#FFE0E2",
        },
        pink: {
          DEFAULT: "#FF2056",
          accent: "#FFE0E8",
        },
        purple: {
          DEFAULT: "#AD46FF",
          accent: "#F1E0FF",
        },
        orange: {
          DEFAULT: "#FE9A00",
          accent: "#FFF3E0",
        },
        card: {
          DEFAULT: "#ffffff",
          foreground: "#0a0a0a",
        },
        primary: {
          DEFAULT: "#00bc7d",
          foreground: "#fafafa",
          accent: "#E0FFF5",
        },
        secondary: {
          DEFAULT: "#f5f5f5",
          foreground: "#171717",
        },
        muted: {
          DEFAULT: "#f5f5f5",
          foreground: "#737373",
        },
        accent: {
          DEFAULT: "#f5f5f5",
          foreground: "#171717",
        },
        destructive: {
          DEFAULT: "#e7000b",
          foreground: "#ffffff",
        },
        border: "#e5e5e5",
        input: "#e5e5e5",
        ring: "#00bc7d",
      },
    },
  },
  plugins: [],
};
