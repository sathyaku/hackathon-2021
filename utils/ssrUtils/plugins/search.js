/* eslint-disable no-param-reassign */
import { httpFetchService } from '../../httpService';
import get from 'lodash.get';

const getProductList = async (ctx, pageProps, next) => {
  const base = process.env.SRVERLESS_BASE;
  const resposne = await httpFetchService(
    `https://www.falabella.com/s/browse/v1/search/cl?Ntt=sweater`,
    'GET'
  );
  const data = resposne.success ? get(resposne, 'data.data', {}) : '';
  pageProps.props.products = data;
  return next();
};

export default getProductList;
