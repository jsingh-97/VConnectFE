import classes from "./SignupForm.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";
import React, { useState } from "react";
import Message from "../UI/Header/Message";
function SignUpForm(props) {
  const [formSent, setFormSent] = useState(false);
  const onFormSentHandler = () => {
    setFormSent(true);
  };
  return (
    <React.Fragment>
      {formSent ? (
        <Message />
      ) : (
        <Card className={classes.signup}>
          <form onSubmit={props.onSignup}>
            <div className={`${classes.control}`}>
              <label htmlFor="firstName">Name</label>
              <input type="text" placeholder="Name"></input>
            </div>
            <div className={`${classes.control}`}>
              <label htmlFor="email">E-Mail</label>
              <input type="text" placeholder="Email"></input>
            </div>
            <div className={`${classes.control}`}>
              <label htmlFor="password">Password</label>
              <input type="text" placeholder="password"></input>
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
