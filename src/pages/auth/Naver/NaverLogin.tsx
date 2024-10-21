import React from 'react';

const NaverLogin: React.FC = () => {
  const handleLogin = () => {
    const clientId = 'dIC8uOYul9WwfphdM_8o';
    const redirectUri = encodeURIComponent('http://localhost:3001/');
    const responseType = 'code';
    
    const loginUrl = `https://nid.naver.com/oauth2.0/authorize?response_type=${responseType}&client_id=${clientId}&redirect_uri=${redirectUri}`;
    
    window.location.href = loginUrl;
  };

  return (
    <button onClick={handleLogin}>
      Login with Naver
    </button>
  );
};

export default NaverLogin;
