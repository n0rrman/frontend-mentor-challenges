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
        veryDarkBlue: 'hsl(var(--color-veryDarkBlue) / <alpha-value>)',
        desaturatedBlue: 'hsl(var(--color-desaturatedBlue) / <alpha-value>)',
        grayishBlue: 'hsl(var(--color-grayishBlue) / <alpha-value>)',
        lightGrayishBlue: 'hsl(var(--color-lightGrayishBlue) / <alpha-value>)',
      },
    },
  },
  plugins: [],
}
export default config
