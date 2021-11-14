import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import Router from 'next/router';
import Button from '@/ui/Button';
import ContainerWrap from '@/ui/Container';
import layOutStyle from './Login.style';
import { WithLabels } from 'contexts/LabelContext';
import { WithDevice } from 'contexts/DeviceContext';
import { useRouter } from 'next/router';
import FormInput from '@/ui/FormInput';

const signin = async (email, password) => {
  // axios.post(`/api/test?email=${email}&password=${password}`)
  const body = {
    email,
    password
  };
  axios({
    method: 'post',
    url: '/api/test',
    data: body
  }).then(
    (res) => {
      Router.push('/dashboard');
    },
    () => {}
  );
};

const LoginContainer = ({ labels }) => {
  const [userData, setUserData] = useState({
    email: '',
    password: '',
    error: ''
  });
  const router = useRouter();

  const { LOGIN_PAGE_HEADER } = labels;

  async function handleSubmit() {
    setUserData({ ...userData, error: '' });

    const { email } = userData;
    const { password } = userData;

    try {
      await signin(email, password);
    } catch (error) {
      //   console.error(error);
      setUserData({ ...userData, error: error.message });
    }
  }

  useEffect(() => {
    router.prefetch('/dashboard');
  }, []);

  return (
    <ContainerWrap direction="column">
      <div className="login">
        <h1> {LOGIN_PAGE_HEADER} </h1>
        <form>
          <FormInput
            label="Email"
            onChangeHandler={(event) =>
              setUserData({ ...userData, email: event.target.value })
            }
            value={userData.email}
            name="email"
            id="email"
            type="text"
          />

          <FormInput
            label="Password"
            onChangeHandler={(event) =>
              setUserData({ ...userData, password: event.target.value })
            }
            value={userData.email}
            name="password"
            id="password"
            type="password"
          />

          <div className="btn-container">
            <Button
              key="login-btn"
              id="loginButton"
              label="Login"
              strech={'full'}
              size="medium"
              onClick={handleSubmit}
            />
          </div>
        </form>
      </div>
      <style jsx>{layOutStyle}</style>
    </ContainerWrap>
  );
};

LoginContainer.defaultProps = {
  labels: {}
};

LoginContainer.propTypes = {
  labels: PropTypes.object
};

export default WithLabels(LoginContainer);
export { LoginContainer };
