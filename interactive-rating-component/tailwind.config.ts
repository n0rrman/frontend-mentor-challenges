import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))'
      },
      colors: {
        primaryOrange: 'hsl(var(--color-primaryOrange) / <alpha-value>)',

        white: 'hsl(var(--color-white) / <alpha-value>)',
        lightGray: 'hsl(var(--color-lightGray) / <alpha-value>)',
        mediumGray: 'hsl(var(--color-mediumGray) / <alpha-value>)',
        darkBlue: 'hsl(var(--color-darkBlue) / <alpha-value>)',
        darkerBlue: 'hsl(var(--color-darkerBlue) / <alpha-value>)',
        veryDarkBlue: 'hsl(var(--color-veryDarkBlue) / <alpha-value>)',
      },
    },
  },
  plugins: [],
}
export default config
