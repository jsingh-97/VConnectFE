import Header from "../UI/Header";
import LogInForm from "./LogInForm";
import SignUpForm from "./SignUpForm";
import { useState } from "react";
import Feed from "../HomePage/Feed";
function Login() {
  const [signUp, setSignUp] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const loggedInHandler = () => {
    console.log("You  are logged in");
    setLoggedIn(true);
  };
  const createAccountHandler = () => {
    setSignUp(true);
  };
  return (
    <div>
      {loggedIn ? (
        <Feed></Feed>
      ) : signUp ? (
        <SignUpForm />
      ) : (
        <LogInForm
          createAccount={createAccountHandler}
          loggedIn={loggedInHandler}
        ></LogInForm>
      )}
    </div>
  );
}

export default Login;
