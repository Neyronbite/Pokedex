import React, { createContext, useState } from "react";

// Create context object
export const PokemonContext = createContext();

// Create a provider component
export const PokemonContextProvider = ({ children }) => {
  const [pokemonId, setPokemonId] = useState(null);

  return (
    <PokemonContext.Provider value={{ pokemonId, setPokemonId }}>
      {children}
    </PokemonContext.Provider>
  );
};
