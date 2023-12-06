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
        brightOrange: 'hsl(var(--color-brightOrange) / <alpha-value>)',
        darkCyan: 'hsl(var(--color-darkCyan) / <alpha-value>)',
        veryDarkCyan: 'hsl(var(--color-veryDarkCyan) / <alpha-value>)',
        
        transparentWhite: 'hsl(var(--color-transparentWhite) / <alpha-value>)',
        veryLightGray: 'hsl(var(--color-veryLightGray) / <alpha-value>)',
      }
    }
  },
  plugins: [],
}
export default config
