import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          "50": "#F6F7F9",
          "100": "#d6e4fd",
          "200": "#aec8fc",
          "300": "#85a8f8",
          "400": "#658df1",
          "500": "#3563e9",
          "600": "#264bc8",
          "700": "#1a37a7",
          "800": "#102587",
          "900": "#0a196f",
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        success: {
          "100": "#f5fcd2",
          "200": "#e8faa6",
          "300": "#d3f178",
          "400": "#bce455",
          "500": "#9cd323",
          "600": "#7fb519",
          "700": "#659711",
          "800": "#4c7a0b",
          "900": "#3b6506",
        },
        error: {
          "100": "#ffe7d3",
          "200": "#ffc8a6",
          "300": "#ffa37a",
          "400": "#ff7f59",
          "500": "#ff4423",
          "600": "#db2719",
          "700": "#b71112",
          "800": "#930b16",
          "900": "#7a0619",
        },
        warning: {
          "100": "#FFF8D7",
          "200": "#FFEFB0",
          "300": "#FFE488",
          "400": "#FFD96B",
          "500": "#FFC73A",
          "600": "#DBA32A",
          "700": "#B7821D",
          "800": "#936312",
          "900": "#7A4D0B",
        },
        info: {
          "100": "#DCF3FF",
          "200": "#BAE5FF",
          "300": "#98D3FF",
          "400": "#7EC2FF",
          "500": "#54A6FF",
          "600": "#3D81DB",
          "700": "#2A60B7",
          "800": "#1A4393",
          "900": "#102E7A",
        },
        secondary: {
          "100": "#E0E9F4",
          "200": "#C3D4E9",
          "300": "#90A3BF",
          "400": "#596780",
          "500": "#1A202C",
          "600": "#131825",
          "700": "#0D121F",
          "800": "#080C19",
          "900": "#040815",
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        10: "10px",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
