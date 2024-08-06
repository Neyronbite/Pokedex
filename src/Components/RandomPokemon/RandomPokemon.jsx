import React, { useContext } from "react";
import Input from "../Input/Input";
import { PokemonContext } from "../Context/PokemonContext";
import { randomIntFromInterval } from "../../utils/";

const RandomPokemon = ({ className }) => {
  const { setPokemonId } = useContext(PokemonContext);

  return (
    <Input
      value="Random Pokemon"
      handleClick={(e) => setPokemonId(randomIntFromInterval(0, 800))}
      type="button"
      className={className}
    />
  );
};

export default RandomPokemon;
