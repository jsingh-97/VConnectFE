import Card from "../UI/Card";
import classes from "./LogInForm.module.css";
import Button from "../UI/Button";
import { useRef, useState } from "react";
function LogInForm(props) {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const [errorObj, seterrorObj] = useState({
    isLoginError: false,
    msg: "",
  });
  const onLoginHandler = async (event) => {
    event.preventDefault();
    const response = await fetch(
      `http://bigbull.ap-south-1.elasticbeanstalk.com:5000/auth/user?email=${emailInputRef.current.value}&password=${passwordInputRef.current.value}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    let result = await response.json();
    if (result.isLogged == true) {
      props.onLogin();
    } else {
      seterrorObj({
        isLoginError: true,
        msg: result.text,
      });
    }
  };
  return (
    <Card className={classes.login}>
      <form onSubmit={onLoginHandler}>
        <div className={`${classes.control}`}>
          <label htmlFor="email">E-Mail</label>
          <input ref={emailInputRef} type="text" placeholder="Email"></input>
        </div>
        <div className={`${classes.control}`}>
          <label htmlFor="password">Password</label>
          <input
            ref={passwordInputRef}
            type="text"
            placeholder="password"
          ></input>
        </div>
        {errorObj.isLoginError && <p>{errorObj.msg}</p>}
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn}>
            Login
          </Button>
          <Button onClick={props.onSignup} className={classes.btn}>
            Signup
          </Button>
        </div>
      </form>
    </Card>
  );
}
export default LogInForm;
