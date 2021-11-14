const breakpoints = require('../breakPoint');

const breakpointMixins = {
  fallback() {
    return {
      [`@media (min-width: 0px) and (max-width:${breakpoints.mobile - 1}px)`]: {
        '@mixin-content': {}
      }
    };
  },
  smallerMobile() {
    return {
      [`@media (min-width: 0px) and (max-width:370px)`]: {
        '@mixin-content': {}
      }
    };
  },
  smallMobileOnly() {
    return {
      [`@media (min-width: 0px) and (max-width:${
        breakpoints.smallMobile - 1
      }px)`]: {
        '@mixin-content': {}
      }
    };
  },
  mobileOnly() {
    return {
      [`@media (min-width: ${breakpoints.mobile}px) and (max-width:${
        breakpoints.phablet - 1
      }px)`]: {
        '@mixin-content': {}
      }
    };
  },
  mobileToPhablet() {
    return {
      [`@media (min-width: ${breakpoints.mobile}px) and (max-width: ${
        breakpoints.tablet - 1
      }px)`]: {
        '@mixin-content': {}
      }
    };
  },
  mobileToTablet() {
    return {
      [`@media (min-width: 0px) and (max-width: ${breakpoints.tablet - 1}px)`]:
        {
          '@mixin-content': {}
        }
    };
  },
  mobileToDesktop() {
    return {
      [`@media (min-width: ${breakpoints.mobile}px)`]: {
        '@mixin-content': {}
      }
    };
  },
  phabletOnly() {
    return {
      [`@media (min-width: ${breakpoints.phablet}px) and (max-width: ${
        breakpoints.tablet - 1
      }px)`]: {
        '@mixin-content': {}
      }
    };
  },
  phabletToTablet() {
    return {
      [`@media (min-width: ${breakpoints.phablet}px) and (max-width: ${
        breakpoints.desktop - 1
      }px)`]: {
        '@mixin-content': {}
      }
    };
  },
  phabletToDesktop() {
    return {
      [`@media (min-width: ${breakpoints.phablet}px)`]: {
        '@mixin-content': {}
      }
    };
  },
  tabletOnly() {
    return {
      [`@media (min-width: ${breakpoints.tablet}px) and (max-width: ${
        breakpoints.desktop - 1
      }px)`]: {
        '@mixin-content': {}
      }
    };
  },
  tabletToDesktop() {
    return {
      [`@media (min-width: ${breakpoints.tablet}px)`]: {
        '@mixin-content': {}
      }
    };
  },
  desktop() {
    return {
      [`@media (min-width: ${breakpoints.desktop}px)`]: {
        '@mixin-content': {}
      }
    };
  }
};

module.exports = breakpointMixins;
