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
        cyan: 'hsl(var(--color-cyan) / <alpha-value>)',
        lightCyan: 'hsl(var(--color-lightCyan) / <alpha-value>)',
        brightYellow: 'hsl(var(--color-brightYellow) / <alpha-value>)',
        lightGray: 'hsl(var(--color-lightGray) / <alpha-value>)',
        grayish: 'hsl(var(--color-grayish) / <alpha-value>)',
      }
    }
  },
  plugins: [],
}
export default config
