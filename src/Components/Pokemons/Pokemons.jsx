import React, { useEffect, useState } from "react";

import PokemonCard from "../PokemonCard/PokemonCard";
import {
  filterPokemons,
  getAllPokemons,
  getAllPokemonsWithIds,
  getTypes,
} from "../../api";
import Paginate from "../Paginate/Paginate";
import Input from "../Input/Input";
import Select from "../Select/Select";

import styles from "./pokemons.module.scss";

const Pokemons = () => {
  const [allPokemonsWithIds, setAllPokemonsWithIds] = useState(null);
  const [allPokemons, setAllPokemons] = useState(null);
  const [pokemons, setPokemons] = useState(null);
  const [types, setTypes] = useState(null);

  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [type, setType] = useState("");

  const handleSearch = (value) => {
    setSearch(value);
    setPage(1);
  };

  useEffect(() => {
    const getTypesAsync = async () => {
      const data = await getTypes();
      data.push("");

      setTypes(data);
    };

    const getAllPokemonsWithIdsAsync = async () => {
      const data = await getAllPokemonsWithIds();
      console.log(data);

      setAllPokemonsWithIds(data);
    };

    getAllPokemonsWithIdsAsync();
    getTypesAsync();
  }, []);

  useEffect(() => {
    const getAllPokemonsAsync = async (pokemonType) => {
      const data = await getAllPokemons(pokemonType);
      setAllPokemons(data);
      setPage(1);
    };
    getAllPokemonsAsync(type);
  }, [type]);

  useEffect(() => {
    try {
      const data = filterPokemons({
        allPokemons: allPokemons,
        filter: search,
        page: page,
      });

      setPokemons(data);
    } catch {}
  }, [search, page, allPokemons]);

  if (!pokemons) {
    return <p>Loading . . .</p>;
  }

  return (
    <div>
      <div className={styles["input-bar"]}>
        <Input value={search} handleChange={handleSearch} />
        <Select
          selectedOption={type}
          setSelectedOption={setType}
          options={types}
        />
      </div>
      <div className={styles.cards}>
        {pokemons.results.map((item) => (
          <PokemonCard
            key={item.name}
            name={item.name}
            allPokemonsWithIds={allPokemonsWithIds}
          />
        ))}
      </div>
      <div className="container">
        <Paginate
          setPage={setPage}
          currentPage={page}
          pageCount={pokemons.pages}
        />
      </div>
    </div>
  );
};

export default Pokemons;
