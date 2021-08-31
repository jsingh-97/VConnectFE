import LogInForm from "./LogInForm";
import SignUpForm from "./SignUpForm";
import React, { useState } from "react";
import Feed from "../HomePage/Feed";
import Card from "../UI/Card";
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
