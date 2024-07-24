import React from "react";

import Pokemons from "./Components/Pokemons/Pokemons";
import Header from "./Components/Header/Header";

import styles from "./app.module.scss";

const App = (props) => {
  return (
    <>
      <div className={styles.app}>
        <Header />
        <Pokemons />
      </div>
    </>
  );
};

export default App;
