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
        darkCyan: 'hsl(var(--color-darkCyan) / <alpha-value>)',
        paleBlue: 'hsl(var(--color-paleBlue) / <alpha-value>)',
        brightBlue: 'hsl(var(--color-brightBlue) / <alpha-value>)',
        
        veryPaleBlue: 'hsl(var(--color-veryPaleBlue) / <alpha-value>)',
        desaturatedBlue: 'hsl(var(--color-desaturatedBlue) / <alpha-value>)',
        darkBlue: 'hsl(var(--color-darkBlue) / <alpha-value>)',
      }
    }
  },
  plugins: [],
}
export default config





