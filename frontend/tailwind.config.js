// tailwind.config.js
module.exports = {
  important: true,

  purge: ['./src/**/*.html', './src/**/*.vue', './src/**/*.jsx'],
  theme: {
    textColor: {
      primary: '#01b6ad',
      secondary: '#ffed4a',
      danger: '#e3342f'
    },
    colors: {
      primary: '#01b6ad',
      black: '#626262',
      white: '#ffffff',
      grey: '#b8c2cc',
      'grey-light': '#dae1e7'
    }
  },
  variants: {},
  plugins: []
};
