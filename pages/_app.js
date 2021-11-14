import React from 'react';
import get from 'lodash.get';
import PropTypes from 'prop-types';
import 'static/styles/globals.css';
import 'static/styles/fonts.css';
import AppCtxProvider from 'contexts/AppContext';
import LabelsProvider from 'contexts/LabelContext';
import DeviceProvider from 'contexts/DeviceContext';

const MyApp = ({ Component, pageProps }) => {
  const { appContext = {} } = pageProps;
  return (
    <AppCtxProvider initialAppCtx={get(appContext, {})}>
      <LabelsProvider labels={get(appContext, 'labels', {})}>
        <DeviceProvider
          initDeviceType={get(appContext, 'deviceType', 'mobile')}
        >
          <Component {...pageProps} />
        </DeviceProvider>
      </LabelsProvider>
    </AppCtxProvider>
  );
};

MyApp.propTypes = {
  pageProps: PropTypes.object.isRequired,
  Component: PropTypes.func.isRequired
};

export default MyApp;
