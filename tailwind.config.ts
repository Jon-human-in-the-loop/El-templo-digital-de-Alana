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
        'alana-white': '#FFFFFF',
        'alana-black': '#000000',
        'alana-grey': '#F0EEED',
      },
      fontFamily: {
        'sans': ['var(--font-cormorant)', 'serif'],
        'heading': ['var(--font-helvetica-ultra)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config
