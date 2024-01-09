import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        feature1: "url('/public/feature.jpeg')",
        feature2: "url('/public/feature-1.jpeg')",
        feature3: "url('/public/feature-2.jpeg')",
      },
    },
  },
  plugins: [],
}
export default config
