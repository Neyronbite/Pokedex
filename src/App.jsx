import React, { useEffect, useRef, useState } from "react";

import Pokemons from "./Components/Pokemons/Pokemons";
import Header from "./Components/Header/Header";
import MouseEffect from "./Components/MouseFollowingEffect/MouseFollowingEffect";

import styles from "./app.module.scss";

const App = (props) => {
  return (
    <>
      <div className={styles.app}>
        <Header text="Pokemoon" />
        <Pokemons />
        <MouseEffect className={styles.mouse_effect} opacity={1} />
      </div>
    </>
  );
};

export default App;
