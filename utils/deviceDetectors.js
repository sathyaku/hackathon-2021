import get from 'lodash.get';

const getDeviceType = (ctx) => {
  const isMobileView = (
    get(ctx, "req.headers['user-agent']") || navigator.userAgent
  ).match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i);

  return isMobileView ? 'mobile' : 'desktop';
};

export default getDeviceType;
