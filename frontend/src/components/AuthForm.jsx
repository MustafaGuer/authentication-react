// import { useState } from "react";
import {
  Form,
  Link,
  useSearchParams,
  useActionData,
  useNavigation,
} from "react-router-dom";

import styles from "./AuthForm.module.css";

const AuthForm = () => {
  // const [isLogin, setIsLogin] = useState(true);
  // const switchAuthHandler = () => {
  //   setIsLogin((isCurrentlyLogin) => !isCurrentlyLogin);
  // };

  const data = useActionData();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  const [searchParams /*, setSearchParams*/] = useSearchParams();
  const isLogin = searchParams.get("mode") === "login";

  return (
    <>
      <Form method="post" className={styles.form}>
        <h1>{isLogin ? "Log in" : "Create new user"}</h1>
        {data && data.errors && (
          <ul>
            {Object.values(data.errors).map((err) => (
              <li key={err}>{err}</li>
            ))}
          </ul>
        )}
        {data && data.message && <p>{data.message}</p>}
        <p>
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" required />
        </p>
        <p>
          <label htmlFor="password">Password</label>
          <input id="password" type="password" name="password" required />
        </p>
        <div className={styles.actions}>
          {/* <button onClick={switchAuthHandler} type="button">
            {isLogin ? "Create new user" : "Login"}
          </button> */}
          <Link to={`?mode=${isLogin ? "signup" : "login"}`}>
            {isLogin ? "Create new user" : "Login"}
          </Link>
          <button disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Save"}
          </button>
        </div>
      </Form>
    </>
  );
};

export default AuthForm;
