import React from 'react';
import styles from "./SingIn.module.css";

const SignIn = () =>  {

  return (
    <div className={styles["wrapper_signin"]}>
      <div className={styles['header_signin']}>
        <div className={styles["img"]}>

        </div>
        <div className={styles["title"]}>

        </div>
      </div>
      <div className={styles['form_signin']}>
        <div className={styles["email"]}>
          <label>Email</label>
          <div className={styles["input"]}>
            <input placeholder='Email' type='text'></input>
          </div>
        </div>
        <div className={styles["password"]}>
          <label>Password</label>
          <div className={styles["input"]}>
            <input placeholder='password' type='password'></input>
          </div>
        </div>
        <div>
          <a>Forgot your password?</a>
        </div>
      </div>
      <div className={styles['btn_login']}>
        <button>Log in</button>
      </div>
      <span>OR</span>
      <div className={styles['group_btn']}>
        <div className={styles['btn_facebook_login']}>
          <img></img>
          <button>Continue with Facebook</button>
        </div>
        <div className={styles['btn_google_login']}>
          <img></img>
          <button>Continue with Google</button>
        </div>
      </div>
    </div>)
}

export default SignIn;