import React from "react";

import { useContext } from "react";
import AuthContext from "../../../store/auth-context";
import classes from "./Navigation.module.css";
const Navigation = (props) => {
  const ctx = useContext(AuthContext);
  console.log(ctx);
  return (
    <nav className={classes.nav}>
      <ul>
        {ctx.isLoggedin && (
          <li>
            <a href="/">Users</a>
          </li>
        )}
        {ctx.isLoggedin && (
          <li>
            <a href="/">Admin</a>
          </li>
        )}
        {ctx.isLoggedin && (
          <li>
            <a href="/" onClick={props.onLogout}>
              Logout
            </a>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
