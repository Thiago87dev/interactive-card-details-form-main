import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        colorPrimary: 'hsl(278, 94%, 30%)',
        colorRedError: "hsl(0, 100%, 66%)",
        colorWhite: 'hsl(0, 0%, 100%)',
        colorLightGrayishViolet: 'hsl(270, 3%, 87%)',
        colorDarkGrayishViolet: 'hsl(279, 6%, 55%)',
        colorVeryDarkViolet: 'hsl(278, 68%, 11%)',
      },
    },
  },
  plugins: [],
} satisfies Config;
