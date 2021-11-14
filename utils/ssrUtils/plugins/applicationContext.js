/* eslint-disable no-param-reassign */
import { httpFetchService } from '../../httpService';
import getDeviceType from 'utils/deviceDetectors';

const getApplicationContext = async (ctx, pageProps, next) => {
  const base = process.env.SRVERLESS_BASE;
  const deviceTypeOnPageLoad = getDeviceType(ctx);
  const resposne = await httpFetchService(`${base}/api/config`, 'GET');
  const data = resposne.success ? resposne.data : '';
  data.deviceType = deviceTypeOnPageLoad;
  pageProps.props.appContext = data;
  return next();
};

export default getApplicationContext;
