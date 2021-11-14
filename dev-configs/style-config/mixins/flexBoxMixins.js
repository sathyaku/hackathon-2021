const flexBoxMixins = {
  flexBox() {
    return {
      display: 'flex',
      'align-items': 'center',
      'justify-content': 'flex-start',
      'flex-wrap': 'wrap',
      '@mixin-content': {}
    };
  },
  flexBoxCenter() {
    return {
      display: 'flex',
      'align-items': 'center',
      'justify-content': 'center',
      'flex-wrap': 'wrap',
      '@mixin-content': {}
    };
  },
  flexFromStart() {
    return {
      display: 'flex',
      'align-items': 'flex-start',
      'justify-content': 'flex-start',
      'flex-wrap': 'wrap',
      '@mixin-content': {}
    };
  }
};

module.exports = flexBoxMixins;
