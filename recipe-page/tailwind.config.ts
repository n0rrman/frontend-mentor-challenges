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
        nutmeg: 'hsl(var(--color-nutmeg) / <alpha-value>)',
        darkRaspberry: 'hsl(var(--color-darkRaspberry) / <alpha-value>)',

        white: 'hsl(var(--color-white) / <alpha-value>)',
        roseWhite: 'hsl(var(--color-roseWhite) / <alpha-value>)',
        eggshell: 'hsl(var(--color-eggshell) / <alpha-value>)',
        lightGrey: 'hsl(var(--color-lightGrey) / <alpha-value>)',
        wengeBrown: 'hsl(var(--color-wengeBrown) / <alpha-value>)',
        darkCharcoal: 'hsl(var(--color-darkCharcoal) / <alpha-value>)',
      },
    },
  },
  plugins: [],
}
export default config
