import React from 'react';
import LayoutContainer from 'containers/LayoutContainer/LayoutContainer';
import { getProductList } from '@/ssrUtils';
import compose from 'utils/compose';

export default function DashBoard(props) {
  return <LayoutContainer {...props} />;
}

export const getStaticProps = compose(getProductList);
