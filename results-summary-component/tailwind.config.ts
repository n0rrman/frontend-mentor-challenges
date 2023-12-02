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
        primaryRed: 'hsl(var(--color-primaryRed) / <alpha-value>)',
        primaryYellow: 'hsl(var(--color-primaryYellow) / <alpha-value>)',
        primaryTeal: 'hsl(var(--color-primaryTeal) / <alpha-value>)',
        primaryCobalt: 'hsl(var(--color-primaryCobalt) / <alpha-value>)',
        
        gradientSlate: 'hsl(var(--color-gradientSlate) / <alpha-value>)',
        gradientRoyal: 'hsl(var(--color-gradientRoyal) / <alpha-value>)',
        gradienetViolet: 'hsl(var(--color-gradientViolet) / <alpha-value>)',
        gradientPersian: 'hsl(var(--color-gradientPersian) / <alpha-value>)',
        
        neutralWhite: 'hsl(var(--color-neutralWhite) / <alpha-value>)',
        neutralBlue: 'hsl(var(--color-neutralBlue) / <alpha-value>)',
        neutralLavender: 'hsl(var(--color-neutralLavender) / <alpha-value>)',
        neutralGray: 'hsl(var(--color-neutralGray) / <alpha-value>)',

      }
    }
  },
  plugins: [],
}
export default config
