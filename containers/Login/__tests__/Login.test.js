import React from 'react';
import { mount } from 'enzyme';

import { LoginContainer } from '../Login';

describe('Login Container', () => {
  it('should render Login', () => {
    const wrapper = mount(
      <LoginContainer labels={{ LOGIN_PAGE_HEADER: 'User Login' }} />
    );
    expect(wrapper.debug()).toMatchSnapshot();
  });
});
