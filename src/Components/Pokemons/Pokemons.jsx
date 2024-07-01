import React, { useCallback, useEffect, useState } from "react";

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
import { DEFAULT_TYPE_TEXT } from "../../constants/global";

import styles from "./pokemons.module.scss";
import Loading from "../Loading/Loading";

const Pokemons = () => {
  const [allPokemonsWithIds, setAllPokemonsWithIds] = useState(null);
  const [allPokemons, setAllPokemons] = useState(null);
  const [pokemons, setPokemons] = useState(null);
  const [types, setTypes] = useState(null);

  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [type, setType] = useState("");

  const handleSearch = useCallback(
    (e) => {
      setSearch(e.target.value);
      setPage(1);
    },
    [search]
  );

  useEffect(() => {
    // Fetch Pokemon types on component mount
    const getTypesAsync = async () => {
      const data = await getTypes();
      data.push(DEFAULT_TYPE_TEXT);

      setTypes(data);
    };

    // Fetch Pokemon data with and give them IDs
    const getAllPokemonsWithIdsAsync = async () => {
      const data = await getAllPokemonsWithIds();

      setAllPokemonsWithIds(data);
    };

    getAllPokemonsWithIdsAsync();
    getTypesAsync();
  }, []);

  useEffect(() => {
    // Fetch all type specified Pokemons
    const getAllPokemonsAsync = async (pokemonType) => {
      const data = await getAllPokemons(pokemonType);
      setAllPokemons(data);
      setPage(1);
    };

    getAllPokemonsAsync(type);
  }, [type]);

  useEffect(() => {
    if (!allPokemons) return;

    // Filter allPokemons on search or page change
    const data = filterPokemons({
      allPokemons: allPokemons,
      filter: search,
      page: page,
    });

    setPokemons(data);
  }, [search, page, allPokemons]);

  if (!pokemons) {
    return <Loading />;
  }

  return (
    <div>
      <div className={styles.input_bar}>
        <div>
          <Input
            value="Random Pokemon"
            handleClick={(e) => console.log(e.target.value)}
            type="button"
            className={`${styles.rand_pokemon} ${styles.input_bar__item}`}
          />
        </div>
        <div>
          <Input
            value={search}
            handleChange={handleSearch}
            className={styles.input_bar__item}
            // datalistOptions={allPokemons.map((p) => p.name)}
          />
        </div>
        {/* TODO random pokemon */}
        <div>
          <Select
            selectedOption={type}
            setSelectedOption={setType}
            options={types}
            defaultText={DEFAULT_TYPE_TEXT}
            className={styles.input_bar__item}
          />
        </div>
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
      <div className={styles.pagination_container}>
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
