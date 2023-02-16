/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
	  "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
	fontFamily: {
		'body': ["Nunito"],
	},
    extend: {
		colors: {
			primary: "rgb(50, 56, 71)",
			secondary: "rgb(50, 50, 50)",
			tertiary: "rgb(30, 35, 50)"
		}
	},
  },
  plugins: [],
}
