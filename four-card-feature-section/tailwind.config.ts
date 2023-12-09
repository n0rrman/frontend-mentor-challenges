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
        primaryCyan: 'hsl(var(--color-primaryCyan) / <alpha-value>)',
        primaryOrange: 'hsl(var(--color-primaryOrange) / <alpha-value>)',
        primaryBlue: 'hsl(var(--color-primaryBlue) / <alpha-value>)',
        
        grayishBlue: 'hsl(var(--color-grayishBlue) / <alpha-value>)',
        veryDarkBlue: 'hsl(var(--color-veryDarkBlue) / <alpha-value>)',
        veryLightGray: 'hsl(var(--color-veryLightGray) / <alpha-value>)'
      },
    },
  },
  plugins: [],
}
export default config
