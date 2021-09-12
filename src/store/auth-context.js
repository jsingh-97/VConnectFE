import React from "react";

const AuthContext = React.createContext({
  isLoggedin: false,
  onLogout: () => {},
});

export default AuthContext;
