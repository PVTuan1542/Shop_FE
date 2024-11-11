import React from 'react';
import GoogleLoginButton from '../Google/GoogleLogin';
import FacebookLoginButton from '../Facebook/FacebookLogin';
import KakaoLoginButton from '../Kakao/KakaoLogin';
import NaverLogin from '../Naver/NaverLogin';
import * as styles from './index.module.css';

const SignIn = () => {

  return (
    <div className={styles.wrapper_signin}>
      <div className={styles.signin_header}>
        <div className={styles.icon}>
          <svg height="40" viewBox="-3 -3 82 82" width="40" style={{ display: 'block' }}><title>Pinterest logo</title><circle cx="38" cy="38" fill="white" r="40"></circle><path d="M27.5 71c3.3 1 6.7 1.6 10.3 1.6C57 72.6 72.6 57 72.6 37.8 72.6 18.6 57 3 37.8 3 18.6 3 3 18.6 3 37.8c0 14.8 9.3 27.5 22.4 32.5-.3-2.7-.6-7.2 0-10.3l4-17.2s-1-2-1-5.2c0-4.8 3-8.4 6.4-8.4 3 0 4.4 2.2 4.4 5 0 3-2 7.3-3 11.4C35.6 49 38 52 41.5 52c6.2 0 11-6.6 11-16 0-8.3-6-14-14.6-14-9.8 0-15.6 7.3-15.6 15 0 3 1 6 2.6 8 .3.2.3.5.2 1l-1 3.8c0 .6-.4.8-1 .4-4.4-2-7-8.3-7-13.4 0-11 7.8-21 22.8-21 12 0 21.3 8.6 21.3 20 0 12-7.4 21.6-18 21.6-3.4 0-6.7-1.8-7.8-4L32 61.7c-.8 3-3 7-4.5 9.4z" fill="var(--color-red-pushpin-450)" fill-rule="evenodd"></path></svg>
        </div>
        <div className={styles.header}>Welcome to Pinterest</div>
      </div>

      <div className="information">
        <div className={styles.signin_email}>
          <div className={styles.label}>Email</div>
          <div className="text">
            <input className={styles.email_input} placeholder='Email'></input></div>
        </div>
        <div className={styles.signin_password}>
          <div className={styles.label}>Password</div>
          <div className="text">
            <input className={styles.email_input} type='password ' placeholder='Password'>
            </input>
          </div>
        </div>
        <div className={styles.forgot_pass}>
          <span>Forgot your password?</span>

        </div>
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
    </div>
  )
};

export default SignIn;