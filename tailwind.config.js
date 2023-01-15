/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

const constants = {
	blue: '#3861FB',
	dark: '#222531',
	white: '#fff',
	gray: '#58667E',
	gray2: '#808A9D',
	gray3: '#EFF2F5',
	gray4: '#A6B1C2',
	green: '#16C784',
	yellow: '#EDC240'
}

module.exports = {
	content: ['./pages/**/*.{js,ts,jsx,tsx}', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		colors: {
			transparent: colors.transparent,
			...constants
		}
	},
	plugins: []
}
