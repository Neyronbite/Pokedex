import React, { useCallback, useContext, useEffect, useState } from "react";

import Loading from "../Loading/Loading";
import { getPokemonImageUrl } from "../../api/pokemon-info";

import styles from "./pokemon-card.module.scss";
import { PokemonContext } from "../Context/PokemonContext";

const PokemonCard = ({ name, allPokemonsWithIds, onClick = null }) => {
  const { setPokemonId } = useContext(PokemonContext);
  const [imgUrl, setImgUrl] = useState(null);
  const [id, setId] = useState(null);

  const handleClick = useCallback(() => {
    setPokemonId(id);
  }, [setPokemonId, id]);

  // This useEffect calculating url for pokemon image,
  // because the image resource api does not support all pokemons from pokeapi
  useEffect(() => {
    if (!allPokemonsWithIds) return;

    setId(allPokemonsWithIds[name]);

    const getPokemonImageUrlAsync = async () => {
      const url = await getPokemonImageUrl(allPokemonsWithIds[name]);
      setImgUrl(url);
    };
    getPokemonImageUrlAsync();
  }, [allPokemonsWithIds, name, setId]);

  return (
    <div className={styles.card} onClick={handleClick}>
      {!allPokemonsWithIds && <Loading />}
      {allPokemonsWithIds && (
        <>
          <div className={styles.card__image}>
            <img src={imgUrl} alt="" onClick={onClick} />
          </div>
          <div>
            <h3 className={styles.card__heading}>{name}</h3>
          </div>
        </>
      )}
    </div>
  );
};

export default PokemonCard;
