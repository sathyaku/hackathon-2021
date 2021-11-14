import { useState } from 'react';
import constate from 'constate';
import contextWrapper from 'utils/withContextWrapper';

function useLabelsContext({ labels: translations }) {
  const [labels] = useState(translations);
  return { labels };
}

const [LabelsProvider, LabelsContext] = constate(useLabelsContext);

const WithLabels = (WrappedComponent) =>
  contextWrapper(WrappedComponent, LabelsContext, 'WithLabels');

export default LabelsProvider;
export { WithLabels };
