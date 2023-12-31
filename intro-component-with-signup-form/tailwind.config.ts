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
        primaryRed: 'hsl(var(--color-primaryRed) / <alpha-value>)',
        primaryGreen: 'hsl(var(--color-primaryGreen) / <alpha-value>)',

        accentBlue: 'hsl(var(--color-accentBlue) / <alpha-value>)',

        neutralBlue: 'hsl(var(--color-neutralBlue) / <alpha-value>)',
        neutralGrayish: 'hsl(var(--color-neutralGrayish) / <alpha-value>)',
      },
    },
  },
  plugins: [],
}
export default config
