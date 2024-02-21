import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        'xs': '450px',
        'mid': '1350px'
      },
      colors: {

        desaturatedRed: 'hsl(var(--color-desaturatedRed) / <alpha-value>)',
        softRed: 'hsl(var(--color-softRed) / <alpha-value>)',
        darkishRed: 'hsl(var(--color-darkishRed) / <alpha-value>)',
    
        gradOneStart: 'hsl(var(--color-gradOneStart) / <alpha-value>)',
        gradOneEnd: 'hsl(var(--color-gradOneEnd) / <alpha-value>)',
    
        gradTwoStart: 'hsl(var(--color-gradTwoStart) / <alpha-value>)',
        gradTwoEnd: 'hsl(var(--color-gradTwoEnd) / <alpha-value>)',

      }
    }
  },
  plugins: [],
}
export default config
