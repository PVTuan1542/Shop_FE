// src/components/FacebookLoginButton.js
import React from 'react';
import { FacebookProvider, LoginButton } from 'react-facebook';
import axios from 'axios';

const FacebookLoginButton = () => {
  const handleResponse = async (response: any) => {
    console.log('response', response)
    if (response?.authResponse?.accessToken) {
      try {
        const res = await axios.post('http://localhost:8080/auth/facebook', { token: response.authResponse.accessToken });
        const { facebookId, email, name, token } = res.data;

        localStorage.setItem('facebookId', facebookId);
        localStorage.setItem('email', email);
        localStorage.setItem('name', name);
        localStorage.setItem('token', token);

      } catch (error) {
        console.error('Login failed:', error);
      }
    }
  };

  const handleError = (error: any) => {
    console.error('Login Failed:', error);
  };

  return (
    <FacebookProvider appId="1868315577002676">
      <LoginButton
        scope="email"
        onSuccess={handleResponse}
        onError={handleError}
      >
        <span>Login with Facebook</span>
      </LoginButton>
    </FacebookProvider>
  );
};

export default FacebookLoginButton;
