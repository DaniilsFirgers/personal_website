/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/**/*.{html,js,svelte,ts}' // Include all relevant file types
	],
	theme: {
		extend: {}
	},
	plugins: [require('tailwind-scrollbar')]
};
