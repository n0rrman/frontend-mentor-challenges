import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontSize: {
      xxl: '1.34rem',
    },
    screens: {
      'mobile': '375px',
      'desktop': '1440px',
    },
    colors: {
      white: 'hsl(var(--color-white) / <alpha-value>)',
      lightGray: 'hsl(var(--color-lightGray) / <alpha-value>)',
      grayishBlue: 'hsl(var(--color-grayishBlue) / <alpha-value>)',
      darkBlue: 'hsl(var(--color-darkBlue) / <alpha-value>)',
    },
    extend: {
    },
  },
  plugins: [],
}
export default config
