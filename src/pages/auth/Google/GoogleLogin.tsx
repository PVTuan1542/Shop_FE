// src/components/GoogleLoginButton.js
import React from 'react';
import { useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';

const GoogleLoginButton = () => {
  const login = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      const { access_token } = tokenResponse;
      // const idToken = response.credential;
      console.log('tokenResponse', tokenResponse)

      try {
        const response = await axios.post('http://localhost:8080/auth/google', { token: access_token });
        const { data } = response;
        console.log('data', data)
        localStorage.setItem('token', data.token);
        window.location.href = `/sign-in?access_token=${access_token}`;
      } catch (error) {
        console.error('Login failed:', error);
      }
    },
    onError: (error) => {
      console.error('Login Failed:', error);
    },
  });

  return (
    <button onClick={() => login()}>
      Login with Google
    </button>
  );
};

export default GoogleLoginButton;
