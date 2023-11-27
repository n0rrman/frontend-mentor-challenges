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
        darkerCyan: 'hsl(var(--color-darkerCyan) / <alpha-value>)',
        cream: 'hsl(var(--color-cream) / <alpha-value>)',
        darkBlue: 'hsl(var(--color-darkBlue) / <alpha-value>)',
        grayishBlue: 'hsl(var(--color-grayishBlue) / <alpha-value>)',
        white: 'hsl(var(--color-white) / <alpha-value>)',
      },
    },
  },
  plugins: [],
}

export default config;
