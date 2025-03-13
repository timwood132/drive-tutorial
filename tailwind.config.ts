import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", ...fontFamily.sans],
      },
      colors: {
        "black-op": {
          0: "#00000000",
          2: "#00000005",
          4: "#0000000A",
          8: "#00000014",
          16: "#00000029",
          24: "#0000003D",
          32: "#00000052",
          44: "#00000070",
          56: "#0000008F",
          68: "#000000AD",
          76: "#000000C2",
          84: "#000000D6",
          92: "#000000EB",
          98: "#000000FA",
        },
        "white-op": {
          0: "#FFFFFF00",
          2: "#FFFFFF05",
          4: "#FFFFFF0A",
          8: "#FFFFFF14",
          16: "#FFFFFF29",
          24: "#FFFFFF3D",
          44: "#FFFFFF70",
          56: "#FFFFFF8F",
          68: "#FFFFFFAD",
          76: "#FFFFFFC2",
          84: "#FFFFFFD6",
          92: "#FFFFFFEB",
          98: "#FFFFFFFA",
        },
        neutral: {
          25: "var(--color-neutral-25)",
          50: "var(--color-neutral-50)",
          100: "var(--color-neutral-100)",
          200: "var(--color-neutral-200)",
          300: "var(--color-neutral-300)",
          400: "var(--color-neutral-400)",
          500: "var(--color-neutral-500)",
          600: "var(--color-neutral-600)",
          700: "var(--color-neutral-700)",
          800: "var(--color-neutral-800)",
          900: "var(--color-neutral-900)",
        },
        purple: {
          25: "var(--color-purple-25)",
          50: "var(--color-purple-50)",
          100: "var(--color-purple-100)",
          200: "var(--color-purple-200)",
          300: "var(--color-purple-300)",
          400: "var(--color-purple-400)",
          500: "var(--color-purple-500)",
          600: "var(--color-purple-600)",
          700: "var(--color-purple-700)",
          800: "var(--color-purple-800)",
          900: "var(--color-purple-900)",
        },
        blue: {
          25: "var(--color-blue-25)",
          50: "var(--color-blue-50)",
          100: "var(--color-blue-100)",
          200: "var(--color-blue-200)",
          300: "var(--color-blue-300)",
          400: "var(--color-blue-400)",
          500: "var(--color-blue-500)",
          600: "var(--color-blue-600)",
          700: "var(--color-blue-700)",
          800: "var(--color-blue-800)",
          900: "var(--color-blue-900)",
        },
        bluelight: {
          25: "var(--color-bluelight-25)",
          50: "var(--color-bluelight-50)",
          100: "var(--color-bluelight-100)",
          200: "var(--color-bluelight-200)",
          300: "var(--color-bluelight-300)",
          400: "var(--color-bluelight-400)",
          500: "var(--color-bluelight-500)",
          600: "var(--color-bluelight-600)",
          700: "var(--color-bluelight-700)",
          800: "var(--color-bluelight-800)",
          900: "var(--color-bluelight-900)",
        },
        green: {
          25: "var(--color-green-25)",
          50: "var(--color-green-50)",
          100: "var(--color-green-100)",
          200: "var(--color-green-200)",
          300: "var(--color-green-300)",
          400: "var(--color-green-400)",
          500: "var(--color-green-500)",
          600: "var(--color-green-600)",
          700: "var(--color-green-700)",
          800: "var(--color-green-800)",
          900: "var(--color-green-900)",
        },
        yellow: {
          25: "var(--color-yellow-25)",
          50: "var(--color-yellow-50)",
          100: "var(--color-yellow-100)",
          200: "var(--color-yellow-200)",
          300: "var(--color-yellow-300)",
          400: "var(--color-yellow-400)",
          500: "var(--color-yellow-500)",
          600: "var(--color-yellow-600)",
          700: "var(--color-yellow-700)",
          800: "var(--color-yellow-800)",
          900: "var(--color-yellow-900)",
        },
        red: {
          25: "var(--color-red-25)",
          50: "var(--color-red-50)",
          100: "var(--color-red-100)",
          200: "var(--color-red-200)",
          300: "var(--color-red-300)",
          400: "var(--color-red-400)",
          500: "var(--color-red-500)",
          600: "var(--color-red-600)",
          700: "var(--color-red-700)",
          800: "var(--color-red-800)",
          900: "var(--color-red-900)",
        },
        pink: {
          25: "var(--color-pink-25)",
          50: "var(--color-pink-50)",
          100: "var(--color-pink-100)",
          200: "var(--color-pink-200)",
          300: "var(--color-pink-300)",
          400: "var(--color-pink-400)",
          500: "var(--color-pink-500)",
          600: "var(--color-pink-600)",
          700: "var(--color-pink-700)",
          800: "var(--color-pink-800)",
          900: "var(--color-pink-900)",
        },
        rose: {
          25: "var(--color-rose-25)",
          50: "var(--color-rose-50)",
          100: "var(--color-rose-100)",
          200: "var(--color-rose-200)",
          300: "var(--color-rose-300)",
          400: "var(--color-rose-400)",
          500: "var(--color-rose-500)",
          600: "var(--color-rose-600)",
          700: "var(--color-rose-700)",
          800: "var(--color-rose-800)",
          900: "var(--color-rose-900)",
        },
        orange: {
          25: "var(--color-orange-25)",
          50: "var(--color-orange-50)",
          100: "var(--color-orange-100)",
          200: "var(--color-orange-200)",
          300: "var(--color-orange-300)",
          400: "var(--color-orange-400)",
          500: "var(--color-orange-500)",
          600: "var(--color-orange-600)",
          700: "var(--color-orange-700)",
          800: "var(--color-orange-800)",
          900: "var(--color-orange-900)",
        },

        // Semantic Surface Colors
        "surface-primary": "var(--surface-defaults-primary)",
        "surface-primary-disabled": "var(--surface-defaults-primary-disabled)",
        "surface-secondary": "var(--surface-defaults-secondary)",
        "surface-tertiary": "var(--surface-defaults-tertiary)",
        "surface-tertiary-hover": "var(--surface-defaults-tertiary-hover)",
        "surface-tertiary-focus": "var(--surface-defaults-tertiary-focus)",
        "surface-overlay": "var(--surface-defaults-overlay)",

        // Interactive Surface Colors
        "surface-interactive-primary":
          "var(--surface-interactive-primary-default)",
        "surface-interactive-primary-hover":
          "var(--surface-interactive-primary-hover)",
        "surface-interactive-primary-focus":
          "var(--surface-interactive-primary-focus)",
        "surface-interactive-primary-press":
          "var(--surface-interactive-primary-press)",

        // Input Control Surface Colors
        "surface-input-default": "var(--surface-input-control-default)",
        "surface-input-hover": "var(--surface-input-control-hover)",
        "surface-input-focus": "var(--surface-input-control-focus)",
        "surface-input-press": "var(--surface-input-control-press)",
        "surface-input-disabled": "var(--surface-input-control-disabled)",

        // System Surface Colors
        "surface-system-info": "var(--surface-system-info)",
        "surface-system-success": "var(--surface-system-success)",
        "surface-system-warning": "var(--surface-system-warning)",
        "surface-system-danger": "var(--surface-system-danger)",
        "surface-system-neutral": "var(--surface-system-neutral)",

        // System Indicator Colors
        "indicator-primary": "var(--surface-system-indicator-primary)",
        "indicator-online": "var(--surface-system-indicator-online)",
        "indicator-away": "var(--surface-system-indicator-away)",
        "indicator-offline": "var(--surface-system-indicator-offline)",
        "indicator-notify": "var(--surface-system-indicator-notify)",

        // Foreground Colors
        "foreground-primary": "var(--foreground-primary)",
        "foreground-secondary": "var(--foreground-secondary)",
        "foreground-tertiary": "var(--foreground-tertiary)",
        "foreground-placeholder": "var(--foreground-placeholder)",
        "foreground-caption": "var(--foreground-caption)",
        "foreground-disabled": "var(--foreground-disabled)",

        // Interactive Foreground Colors
        "foreground-interactive": "var(--foreground-interactive-default)",
        "foreground-interactive-hover": "var(--foreground-interactive-hover)",
        "foreground-interactive-focus": "var(--foreground-interactive-focus)",
        "foreground-interactive-press": "var(--foreground-interactive-press)",

        // Border Colors
        "border-bounds": "var(--border-bounds)",
        "border-divider": "var(--border-divider)",
        "border-disabled": "var(--border-disabled)",

        // Interactive Border Colors
        "border-interactive": "var(--border-interactive-default)",
        "border-interactive-hover": "var(--border-interactive-hover)",
        "border-interactive-focus": "var(--border-interactive-focus)",
        "border-interactive-press": "var(--border-interactive-press)",

        // Accent Surface Colors
        "surface-accent-primary-lighter":
          "var(--surface-accent-primary-lighter)",
        "surface-accent-primary-light": "var(--surface-accent-primary-light)",
        "surface-accent-primary": "var(--surface-accent-primary-default)",
        "surface-accent-primary-dark": "var(--surface-accent-primary-dark)",
        "surface-accent-primary-darker": "var(--surface-accent-primary-darker)",

        // Input Control Border Colors
        "border-input-default": "var(--border-input-control-default)",
        "border-input-hover": "var(--border-input-control-hover)",
        "border-input-focus": "var(--border-input-control-focus)",
        "border-input-press": "var(--border-input-control-press)",
        "border-input-active": "var(--border-input-control-active)",

        // Input Control Selected States
        "border-input-selected": "var(--border-input-control-selected-default)",
        "border-input-selected-hover":
          "var(--border-input-control-selected-hover)",
        "border-input-selected-press":
          "var(--border-input-control-selected-press)",

        // System Border Colors
        "border-system-info": "var(--border-system-info)",
        "border-system-success": "var(--border-system-success)",
        "border-system-warning": "var(--border-system-warning)",
        "border-system-danger": "var(--border-system-destructive)",
        "border-system-neutral": "var(--border-system-neutral)",

        // System Foreground Colors
        "foreground-system-info": "var(--foreground-system-info)",
        "foreground-system-success": "var(--foreground-system-success)",
        "foreground-system-warning": "var(--foreground-system-warning)",
        "foreground-system-danger": "var(--foreground-system-destructive)",
        "foreground-system-neutral": "var(--foreground-system-neutral)",

        // Accent Foreground Colors
        "foreground-accent-primary-lighter":
          "var(--foreground-accent-primary-lighter)",
        "foreground-accent-primary-light":
          "var(--foreground-accent-primary-light)",
        "foreground-accent-primary": "var(--foreground-accent-primary-default)",
        "foreground-accent-primary-dark":
          "var(--foreground-accent-primary-dark)",
        "foreground-accent-primary-darker":
          "var(--foreground-accent-primary-darker)",
      },
    },
  },
  plugins: [],
} satisfies Config;
