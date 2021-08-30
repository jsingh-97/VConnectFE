import React, { useState } from "react";
import Login from "./components/PreDiscovery/LogIn";
import MainHeader from "./components/UI/Header/MainHeader";
import AuthContext from "./store/auth-context";
function App() {
  const [isLoggedin, setIsLoggedin] = useState(false);
  const onLogoutHandler = () => {
    setIsLoggedin(false);
  };
  const onLoginHandler = () => {
    setIsLoggedin(true);
    console.log("signed in");
  };
  return (
    <AuthContext.Provider
      value={{ isLoggedin: isLoggedin, onLogout: onLogoutHandler }}
    >
      <MainHeader />
      <Login isLoggedin={isLoggedin} onLogin={onLoginHandler}></Login>
    </AuthContext.Provider>
  );
}

export default App;
