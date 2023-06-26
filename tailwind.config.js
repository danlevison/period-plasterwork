/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        'xs': '375px',
        ...defaultTheme.screens,
      },
      fontFamily: {
				raleway: ["var(--font-raleway)"]
			},
			colors: {
				primaryBg: "#FAF9F6",
				primaryText: "#000",
				secondaryText: "#FAF9F6",
			},
    },
  },
  plugins: [],
}
