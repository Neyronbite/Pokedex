import React, { useEffect, useState } from "react";

import Loading from "../Loading/Loading";
import { getPokemonImageUrl } from "../../api/pokemon-info";

import styles from "./pokemon-card.module.scss";

const PokemonCard = ({ name, allPokemonsWithIds, onClick = null }) => {
  const [imgUrl, setImgUrl] = useState(null);

  // This useEffect calculating url for pokemon image,
  // because the image resource api does not support all pokemons from pokeapi
  useEffect(() => {
    if (!allPokemonsWithIds) return;

    setImgUrl(getPokemonImageUrl(name, allPokemonsWithIds));
  }, [allPokemonsWithIds, name]);

  return (
    <div className={styles.card}>
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
