import "./SignUpForm.css";
function SignUpForm() {
  const singUpHandler = () => {
    console.log("Sign up");
  };
  return (
    <div className="signup__control">
      <form onSubmit={singUpHandler}>
        <div className="signup__controls">
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Surname" />
          <input type="text" placeholder="Email" />
          <button type="submit">Create Account</button>
        </div>
      </form>
    </div>
  );
}
export default SignUpForm;
