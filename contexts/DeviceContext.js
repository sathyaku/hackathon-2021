import { useState, useEffect } from 'react';
import constate from 'constate';
import getDeviceType from 'utils/deviceDetectors';

function useDeviceContext({ initDeviceType }) {
  const [device, setDevice] = useState(initDeviceType);

  useEffect(() => {
    const type = getDeviceType();
    setDevice(type);
  }, []);

  return { device };
}

const [DeviceProvider, DeviceContext] = constate(useDeviceContext);

const WithDevice = (WrappedComponent) =>
  contextWrapper(WrappedComponent, DeviceContext, 'WithDevice');

export default DeviceProvider;
export { WithDevice };
