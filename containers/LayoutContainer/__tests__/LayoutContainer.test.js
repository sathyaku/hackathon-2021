import React from 'react';
import { mount } from 'enzyme';

import LayoutContainer from '../LayoutContainer';

describe('Title Component', () => {
  it('should render without crashing', () => {
    const wrapper = mount(<LayoutContainer />);
    expect(wrapper.debug()).toMatchSnapshot();
  });
});
