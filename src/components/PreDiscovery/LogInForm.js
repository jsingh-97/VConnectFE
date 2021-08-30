import Card from "../UI/Card";
import classes from "./LogInForm.module.css";
import Button from "../UI/Button";
function LogInForm(props) {
  return (
    <Card className={classes.login}>
      <form onSubmit={props.onLogin}>
        <div className={`${classes.control}`}>
          <label htmlFor="email">E-Mail</label>
          <input type="text" placeholder="Email"></input>
        </div>
        <div className={`${classes.control}`}>
          <label htmlFor="password">Password</label>
          <input type="text" placeholder="password"></input>
        </div>
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
