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
        primaryGreen: 'hsl(var(--color-primaryGreen) / <alpha-value>)',

        white: 'hsl(var(--color-neutralWhite) / <alpha-value>)',
        grey: 'hsl(var(--color-neutralGrey) / <alpha-value>)',
        darkGrey: 'hsl(var(--color-neutralDarkGrey) / <alpha-value>)',
        offBlack: 'hsl(var(--color-neutralOffBlack) / <alpha-value>)',
      },
    },
  },
  plugins: [],
}
export default config
