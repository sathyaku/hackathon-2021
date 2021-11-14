const breakpointMixins = require('./dev-configs/style-config/mixins/breakpointMixing');
const placeholderMixins = require('./dev-configs/style-config/mixins/placeHolderMixin');
const flexBoxMixins = require('./dev-configs/style-config/mixins/flexBoxMixins');

module.exports = {
  plugins: {
    'postcss-nested': {},
    'postcss-simple-vars': {},
    'postcss-mixins': {
      mixins: { ...breakpointMixins, ...placeholderMixins, ...flexBoxMixins }
    },
    'postcss-import': {
      path: '.'
    }
  }
};
