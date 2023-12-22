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
        white: 'hsl(var(--color-white) / <alpha-value>)',
        lightPink: 'hsl(var(--color-lightPink) / <alpha-value>)',
        grayishPurple: 'hsl(var(--color-grayishPurple) / <alpha-value>)',
        darkPurple: 'hsl(var(--color-darkPuple) / <alpha-value>)',
      },
    },
  },
  plugins: [],
}
export default config
