import React from "react";

import Pokemons from "./Components/Pokemons/Pokemons";

import styles from "./app.module.scss";

const App = (props) => {
  return (
    <div className={styles.app}>
      {/* <Header text="Pokemoon" /> */}
      <Pokemons />
    </div>
  );
};

export default App;
