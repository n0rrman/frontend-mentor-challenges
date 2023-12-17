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
        primaryBlue: 'hsl(var(--color-primaryBlue) / <alpha-value>)',
   
        secondaryBlue: 'hsl(var(--color-secondaryBlue) / <alpha-value>)',
        secondaryRed: 'hsl(var(--color-secondaryRed) / <alpha-value>)',
    
        gray: 'hsl(var(--color-gray) / <alpha-value>)',
        veryDarkBlue: 'hsl(var(--color-veryDarkBlue) / <alpha-value>)',

      }
    },
  },
  plugins: [],
}
export default config
