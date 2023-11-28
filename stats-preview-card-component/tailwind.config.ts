import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        mainBgColor: 'hsl(var(--color-bgColor) / <alpha-value>)',
        cardBgColor: 'hsl(var(--color-cardColor) / <alpha-value>)',
        accentColor: 'hsl(var(--color-accentColor) / <alpha-value>)',
        white: 'hsl(var(--color-white) / <alpha-value>)',
      },
    },
  },
  plugins: [],
}
export default config
