import { useState } from "react";
import { Form } from "react-router-dom";

import styles from "./AuthForm.module.css";

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);

  const switchAuthHandler = () => {
    setIsLogin((isCurrentlyLogin) => !isCurrentlyLogin);
  };

  return (
    <>
      <Form method="post" className={styles.form}>
        <h1>{isLogin ? "Log in" : "Create new user"}</h1>
        <p>
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" required />
        </p>
        <p>
          <label htmlFor="password">Password</label>
          <input id="password" type="password" name="password" required />
        </p>
        <div className={styles.actions}>
          <button onClick={switchAuthHandler} type="button">
            {isLogin ? "Create new user" : "Login"}
          </button>
          <button>Save</button>
        </div>
      </Form>
    </>
  );
};

export default AuthForm;
