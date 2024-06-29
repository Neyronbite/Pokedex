import React from "react";
import logo from "../../img/logo2.png";

import styles from "./header.module.scss";

const Header = (props) => {
  return (
    <header className={styles.header}>
      <a href="#">
        <img src={logo} />
      </a>
    </header>
  );
};

Header.defaultProps = {
  text: "header",
};

export default Header;
