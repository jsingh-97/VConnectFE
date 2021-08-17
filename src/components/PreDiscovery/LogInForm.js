import "./LogInForm.css";
function LogInForm(props) {
  return (
    <div className="login__control">
      <form>
        <div className="login__controls">
          <input
            type="text"
            className="login__controls__input__email"
            placeholder="Email"
          ></input>
          <input
            type="text"
            className="login__controls__input__password"
            placeholder="password"
          ></input>
          <button onClick={props.createAccount}>Create Account</button>
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
}
export default LogInForm;
