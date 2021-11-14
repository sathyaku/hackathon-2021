import { useState } from 'react';
import constate from 'constate';

function useApplicationContext({ initialAppCtx }) {
  const [appCtx, setAppCtx] = useState(initialAppCtx);
  return { appCtx, setAppCtx };
}

const [AppCtxProvider, ApplicationContext] = constate(useApplicationContext);

const WithAppCtx = (WrappedComponent) =>
  contextWrapper(WrappedComponent, ApplicationContext, 'WithAppCtx');

export default AppCtxProvider;
export { WithAppCtx };
