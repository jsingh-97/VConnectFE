import LogInForm from "./LogInForm";
import SignUpForm from "./SignUpForm";
import React, { useState } from "react";
import Feed from "../HomePage/Feed";
function Login(props) {
  const [signup, setSignup] = useState(false);
  const signupHandler = () => {
    setSignup(true);
  };
  return (
    <React.Fragment>
      {props.isLoggedin ? (
        <Feed></Feed>
      ) : signup ? (
        <SignUpForm />
      ) : (
        <LogInForm onSignup={signupHandler} onLogin={props.onLogin}></LogInForm>
      )}
    </React.Fragment>
  );
}

export default Login;
