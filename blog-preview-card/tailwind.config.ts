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
        primaryYellow: 'hsl(var(--color-primaryYellow) / <alpha-value>)',
        neutralWhite: 'hsl(var(--color-neutralWhite) / <alpha-value>)',
        neutralGrey: 'hsl(var(--color-neutralGrey) / <alpha-value>)',
        neutralBlack: 'hsl(var(--color-neutralBlack) / <alpha-value>)',
      },
    },

  },
  plugins: [],
}
export default config
