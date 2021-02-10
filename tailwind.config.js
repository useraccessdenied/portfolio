module.exports = {
  purge: ['./**/*.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        gray: {
          10: '#212121',
          9: '#333333',
          8: '#454545',
          7: '#777777',
          5: '#454545',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
  corePlugins: {
    float: false,
  },
};
