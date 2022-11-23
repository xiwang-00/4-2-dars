module.exports = {
	content: ['./src/**/*.html'],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				body: '#FAFAFA',
				darkbody: ' #202C36',
				darkComponent: '#2B3844',
			},
			boxShadow: {
				header: '0px 2px 4px rgba(0, 0, 0, 0.0562443)',
				form: '0px 2px 9px rgba(0, 0, 0, 0.0532439)',
				card: ' 0px 0px 7px 2px rgba(0, 0, 0, 0.0294384)',
			},
			fontFamily: {
				body: ['Nunito Sans'],
			},
		},
	},
	plugins: [],
};
