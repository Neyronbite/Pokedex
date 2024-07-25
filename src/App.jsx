import React from "react";

import Pokemons from "./Components/Pokemons/Pokemons";
import Header from "./Components/Header/Header";
import { PokemonContextProvider } from "./Components/Context/PokemonContext";
import PokemonInfo from "./Components/PokemonInfo/PokemonInfo";

import styles from "./app.module.scss";

const App = (props) => {
  return (
    <>
      <div className={styles.app}>
        <PokemonContextProvider>
          <Header />
          <Pokemons />
          <PokemonInfo />
        </PokemonContextProvider>
      </div>
    </>
  );
};

export default App;
