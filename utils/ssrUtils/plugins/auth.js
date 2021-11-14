/* eslint-disable consistent-return */
/* eslint-disable no-param-reassign */

const auth = async (ctx, pageProps, next) => {
  // session deciding logic goes here
  const currentSession = {
    user: 'User Abc'
  };

  if (!currentSession) {
    pageProps.redirect = {
      destination: '/register',
      permanent: false
    };
    // Stop middlewares chain execution
    // because user not authorized to check this page
    return;
  }

  // Populate user to page props and continue middlewares execution
  pageProps.props.user = currentSession.user;
  return next();
};

export default auth;
