import React, { useEffect, useState } from "react";

import MouseEffect from "../MouseFollowingEffect/MouseFollowingEffect";

import logo from "../../img/logo2.png";
import styles from "./header.module.scss";

const Header = () => {
  const [enableMouseEffect, setEnableMouseEffect] = useState();

  // enabling mouse effect relaying on localstorage
  useEffect(() => {
    const item = JSON.parse(localStorage.getItem("enableMouseEffect"));
    setEnableMouseEffect(item);
  }, []);

  // enable/disable mouse effect
  const handleMouseEffectRadioClick = () => {
    setEnableMouseEffect(!enableMouseEffect);
    localStorage.setItem("enableMouseEffect", !enableMouseEffect);
  };

  return (
    <header className={styles.header}>
      <a href="/#">
        <img src={logo} className={styles.header__image} alt="" />
      </a>

      {/* TODO fix this grdon */}
      {/* TODO add mobile ignoring */}
      <div onClick={handleMouseEffectRadioClick}>
        <div
          className={`${styles.mouse_effect_radio} ${
            enableMouseEffect && styles.mouse_effect_radio__active
          }`}
        ></div>
        {enableMouseEffect && (
          <MouseEffect className={styles.mouse_effect} opacity={1} />
        )}
      </div>
    </header>
  );
};

export default Header;
