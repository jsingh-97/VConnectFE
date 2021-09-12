import React, { useState } from "react";
import Login from "./components/PreDiscovery/LogIn";
import MainHeader from "./components/UI/Header/MainHeader";
import AuthContext from "./store/auth-context";
function App() {
  const [isLoggedin, setIsLoggedin] = useState(false);
  const onLogoutHandler = () => {
    console.log("Logged out");
    setIsLoggedin(false);
  };
  const onLoginHandler = async () => {
    setIsLoggedin(true);
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
