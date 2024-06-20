/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				grayDark: "rgb(212 212 212)",
				grayLight: "rgb(64 64 64)",
			},
			boxShadow: {
				"custom": "0 2px 6px rgba(0, 0, 0, 0.7)",
			},
		},
	},
	plugins: [],
};
