import React from 'react';
import GoogleLoginButton from '../Google/GoogleLogin';
import FacebookLoginButton from '../Facebook/FacebookLogin';
import KakaoLoginButton from '../Kakao/KakaoLogin';
import NaverLogin from '../Naver/NaverLogin';
import styles from './styles.module.css';

const SignIn = () => {

  return (
    <div className={styles.wrapper_signin}>
      <div className="signin_header">
        <div className='icon'></div>
        <div className="header">Welcome to Pinterest</div>
      </div>

      <div className="signin_email">
        <div className='label'>Email</div>
        <div className="text"><input placeholder='Email'></input></div>
      </div>
      <div className="signin_password">
        <div className='label'>Password</div>
        <div className="text"><input type='password ' placeholder='Password'></input></div>
      </div>
      <span>Forgot your password?</span>
      <div className="button_signin">
        <div className='btn_login'>
          <button>Login</button>
        </div>
        <span>OR</span>
        <div className='btn_login_facebook'>
          <button>Continue with Facebook</button>
        </div>
        <div className='btn_login_google'>
          <button>Continue with Google</button>
        </div>
      </div>
    </div>
  )
};

export default SignIn;