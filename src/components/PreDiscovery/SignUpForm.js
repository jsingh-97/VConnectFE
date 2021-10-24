import classes from "./SignupForm.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";
import React, { useRef, useState } from "react";
import Message from "../UI/Header/Message";
function SignUpForm(props) {
  const [signUpMessage, setSignUpMessage] = useState("");
  const emailInputRef = useRef();
  const nameInputRef = useRef();
  const passwordInputRef = useRef();
  const onFormSentHandler = async (event) => {
    event.preventDefault();
    const response = await fetch(
      "http://vconnect.ap-south-1.elasticbeanstalk.com/auth/user",
      {
        method: "POST",
        body: JSON.stringify({
          name: nameInputRef.current.value,
          email: emailInputRef.current.value,
          password: passwordInputRef.current.value,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const res = await response.json();
    setSignUpMessage(res.text);
  };
  return (
    <React.Fragment>
      {signUpMessage.length > 0 ? (
        <Message>{signUpMessage}</Message>
      ) : (
        <Card className={classes.signup}>
          <form>
            <div className={`${classes.control}`}>
              <label htmlFor="firstName">Name</label>
              <input ref={nameInputRef} type="text" placeholder="Name"></input>
            </div>
            <div className={`${classes.control}`}>
              <label htmlFor="email">E-Mail</label>
              <input
                ref={emailInputRef}
                type="text"
                placeholder="Email"
              ></input>
            </div>
            <div className={`${classes.control}`}>
              <label htmlFor="password">Password</label>
              <input
                ref={passwordInputRef}
                type="text"
                placeholder="password"
              ></input>
            </div>
            <div className={classes.actions}>
              <Button
                type="submit"
                onClick={onFormSentHandler}
                className={classes.btn}
              >
                Signup
              </Button>
            </div>
          </form>
        </Card>
      )}
    </React.Fragment>
  );
}
export default SignUpForm;
