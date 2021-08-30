import React from "react";

import Navigation from "./Navigation";
import classes from "./Header.module.css";

const MainHeader = () => {
  return (
    <header className={classes.header}>
      <h1>Lets Connect</h1>
      <Navigation />
    </header>
  );
};

export default MainHeader;
