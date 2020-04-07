import React, { useContext } from 'react';

import { AuthContext } from '../context/Auth';

const Auth = (props) => {
  const authContext = useContext(AuthContext);
  const loginHandler = () => {
    console.log('authcontext', authContext);
    authContext.login();
  };

  return (
    <div>
      <h2>You are not authenticated!</h2>
      <p>Please log in to continue.</p>
      <button onClick={loginHandler}>Log In</button>
    </div>
  );
};

export default Auth;
