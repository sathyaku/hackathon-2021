const placeholderMixins = {
  placeholder() {
    return {
      '&::placeholder': {
        '@mixin-content': {}
      },

      '&::-ms-input-placeholder': {
        '@mixin-content': {}
      },

      '&:-ms-input-placeholder': {
        '@mixin-content': {}
      }
    };
  }
};

module.exports = placeholderMixins;
