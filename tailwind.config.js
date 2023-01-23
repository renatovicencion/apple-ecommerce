/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
		"./app/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			colors: {
				primary: "e7ecee",
				secondary: "#232428",
				terciary: "#1b1b1b",
				darkGray: "#35383c",
				grayLight: "#747474",
			},
			fontFamily: {
				body: ["Poppins", "sans-serif"],
			},
		},
	},
	plugins: [],
};
