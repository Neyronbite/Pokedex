import React from "react";
import logo from "../../img/logo2.png";

import styles from "./header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <a href="/#">
        <img src={logo} className={styles.header__image} alt="" />
      </a>
    </header>
  );
};

export default Header;
