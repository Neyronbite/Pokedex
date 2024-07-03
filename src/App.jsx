import React, { useEffect, useRef, useState } from "react";

import Pokemons from "./Components/Pokemons/Pokemons";
import Header from "./Components/Header/Header";
import MouseEffect from "./Components/MouseEffect/MouseEffect";

import styles from "./app.module.scss";

const App = (props) => {
  return (
    <>
      <div className={styles.app}>
        <Header text="Pokemoon" />
        <Pokemons />
        <MouseEffect count={100} delay={1} interval={1} opacity={0.5} />
      </div>
    </>
  );
};

export default App;
