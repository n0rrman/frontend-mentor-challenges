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
        darkMagenta: 'hsl(var(--color-darkMagenta) / <alpha-value>)',
        softPink: 'hsl(var(--color-softPink) / <alpha-value>)',
    
        grayishMagenta: 'hsl(var(--color-grayishMagenta) / <alpha-value>)',
        lightMagenta: 'hsl(var(--color-lightMagenta) / <alpha-value>)',
        white: 'hsl(var(--color-white) / <alpha-value>)'
      },
    },
  },
  plugins: [],
}
export default config
