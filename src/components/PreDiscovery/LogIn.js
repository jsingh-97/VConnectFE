import Header from "../UI/Header";
import LogInForm from "./LogInForm";
import SignUpForm from "./SignUpForm"
import {useState} from "react";
function Login() {
  console.log("Inside login");
  const [signUp,setSignUp] = useState(false);
  const createAccountHandler= ()=>{
    setSignUp(true);
  }
  return (
    <div>
      <Header />
      {signUp ?<SignUpForm/>:<LogInForm createAccount={createAccountHandler}></LogInForm>}
    </div>
  );
}

export default Login;
