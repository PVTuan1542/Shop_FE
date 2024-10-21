import React from 'react';

const KakaoLoginButton = () => {
  const handleLogin = () => {
    window.location.href = `https://kauth.kakao.com/oauth/authorize?client_id=675ef7fe4440c83c495073d0350e58ef&redirect_uri=http://localhost:3001&response_type=code`;
  };

  return (
    <button onClick={handleLogin}>
      Login with Kakao
    </button>
  );
};

export default KakaoLoginButton;
