import React from 'react';
import LoginContainer from 'containers/Login/Login';
import compose from 'utils/compose';
import { getApplicationContext, auth } from '@/ssrUtils';

const Login = (props) => {
  return <LoginContainer {...props} />;
};

export const getServerSideProps = compose(auth, getApplicationContext);

export default Login;
