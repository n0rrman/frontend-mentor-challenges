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
        softBlue: 'hsl(var(--color-softBlue) / <alpha-value>)',
        cyan: 'hsl(var(--color-cyan) / <alpha-value>)',
        mainBlue: 'hsl(var(--color-mainBlue) / <alpha-value>)',
        cardBlue: 'hsl(var(--color-cardBlue) / <alpha-value>)',
        lineBlue: 'hsl(var(--color-lineBlue) / <alpha-value>)',
        white: 'hsl(var(--color-white) / <alpha-value>)',
      },
    },
  },
  plugins: [],
}
export default config
