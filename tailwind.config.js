/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
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
