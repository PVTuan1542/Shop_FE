import React from "react";
import GoogleLoginButton from "../Google/GoogleLogin";
import FacebookLoginButton from "../Facebook/FacebookLogin";
import KakaoLoginButton from "../Kakao/KakaoLogin";
import NaverLogin from "../Naver/NaverLogin";
import styles from "./index.module.css";

const SignIn = () => {
  return (
    <div className={styles.container_signin}>
      <div className={styles.wrapper_signin}>
        <div className={styles.close_wrapper}>
          <div
            className="x8f _O1 KS5 mQ8 uwe OGJ"
            style={{ height: " 40px; width: 40px;" }}
          >
            <svg
              aria-hidden="true"
              aria-label=""
              className="Uvi gUZ U9O kVc"
              height="18"
              role="img"
              viewBox="0 0 24 24"
              width="18"
            >
              <path d="m15.18 12 7.16-7.16a2.25 2.25 0 1 0-3.18-3.18L12 8.82 4.84 1.66a2.25 2.25 0 1 0-3.18 3.18L8.82 12l-7.16 7.16a2.25 2.25 0 1 0 3.18 3.18L12 15.18l7.16 7.16a2.24 2.24 0 0 0 3.18 0c.88-.88.88-2.3 0-3.18z"></path>
            </svg>
          </div>
        </div>
        <div className={styles.signin_header}>
          <div className={styles.icon}>
            <svg
              height="40"
              viewBox="-3 -3 82 82"
              width="40"
              style={{ display: "block" }}
            >
              <title>Pinterest logo</title>
              <circle cx="38" cy="38" fill="white" r="40"></circle>
              <path
                d="M27.5 71c3.3 1 6.7 1.6 10.3 1.6C57 72.6 72.6 57 72.6 37.8 72.6 18.6 57 3 37.8 3 18.6 3 3 18.6 3 37.8c0 14.8 9.3 27.5 22.4 32.5-.3-2.7-.6-7.2 0-10.3l4-17.2s-1-2-1-5.2c0-4.8 3-8.4 6.4-8.4 3 0 4.4 2.2 4.4 5 0 3-2 7.3-3 11.4C35.6 49 38 52 41.5 52c6.2 0 11-6.6 11-16 0-8.3-6-14-14.6-14-9.8 0-15.6 7.3-15.6 15 0 3 1 6 2.6 8 .3.2.3.5.2 1l-1 3.8c0 .6-.4.8-1 .4-4.4-2-7-8.3-7-13.4 0-11 7.8-21 22.8-21 12 0 21.3 8.6 21.3 20 0 12-7.4 21.6-18 21.6-3.4 0-6.7-1.8-7.8-4L32 61.7c-.8 3-3 7-4.5 9.4z"
                fill="#ee376a"
                fill-rule="evenodd"
              ></path>
            </svg>
          </div>
          <div className={styles.header}>Welcome to Pinterest</div>
        </div>

        <div className="information">
          <div className={styles.signin_email}>
            <div className={styles.label}>Email</div>
            <div className="text">
              <input className={styles.email_input} placeholder="Email"></input>
            </div>
          </div>
          <div className={styles.signin_password}>
            <div className={styles.label}>Password</div>
            <div className="text">
              <input
                className={styles.email_input}
                type="password "
                placeholder="Password"
              ></input>
            </div>
          </div>
          <div className={styles.forgot_pass}>
            <span>Forgot your password?</span>
          </div>
          <div className={styles.button_signin}>
            <div className={styles.btn_login}>
              <button>Login</button>
            </div>
            <div className={styles.content_or}>
              <span>OR</span>
            </div>
            <div className={styles.google_login}>
              <div className={styles.google_icon}>
                <svg
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 48 48"
                  className="LgbsSe-Bz112c"
                >
                  <g>
                    <path
                      fill="#EA4335"
                      d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
                    ></path>
                    <path
                      fill="#4285F4"
                      d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
                    ></path>
                    <path
                      fill="#FBBC05"
                      d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
                    ></path>
                    <path
                      fill="#34A853"
                      d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
                    ></path>
                    <path fill="none" d="M0 0h48v48H0z"></path>
                  </g>
                </svg>
              </div>
              <div className={styles.content_login}>
                <span>Continue with Google</span>
              </div>
            </div>
            <div className={styles.google_login}>
              <div className={styles.google_icon}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="20"
                  height="20"
                  viewBox="0 0 48 48"
                >
                  <linearGradient
                    id="Ld6sqrtcxMyckEl6xeDdMa_uLWV5A9vXIPu_gr1"
                    x1="9.993"
                    x2="40.615"
                    y1="9.993"
                    y2="40.615"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0" stop-color="#2aa4f4"></stop>
                    <stop offset="1" stop-color="#007ad9"></stop>
                  </linearGradient>
                  <path
                    fill="url(#Ld6sqrtcxMyckEl6xeDdMa_uLWV5A9vXIPu_gr1)"
                    d="M24,4C12.954,4,4,12.954,4,24s8.954,20,20,20s20-8.954,20-20S35.046,4,24,4z"
                  ></path>
                  <path
                    fill="#fff"
                    d="M26.707,29.301h5.176l0.813-5.258h-5.989v-2.874c0-2.184,0.714-4.121,2.757-4.121h3.283V12.46 c-0.577-0.078-1.797-0.248-4.102-0.248c-4.814,0-7.636,2.542-7.636,8.334v3.498H16.06v5.258h4.948v14.452 C21.988,43.9,22.981,44,24,44c0.921,0,1.82-0.084,2.707-0.204V29.301z"
                  ></path>
                </svg>
              </div>
              <div className={styles.content_login}>
                <span>Continue with Facebook</span>
              </div>
            </div>
            <a href="">
              <div className={styles.sign_up}>
                <span>Not on Pinterest yet? Sign up</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
