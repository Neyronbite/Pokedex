import React, { useEffect, useState } from "react";

import {
  ALT_IMG_URL,
  ALT_IMG_URL_FORMAT,
  IMG_URL,
  IMG_URL_FORMAT,
} from "../../constants/global";
import Loading from "../Loading/Loading";

import styles from "./pokemon-card.module.scss";

const PokemonCard = ({ name, allPokemonsWithIds, onClick = null }) => {
  const [imgUrl, setImgUrl] = useState(null);

  // This useEffect calculating url for pokemon image,
  // because the image resource api does not support all pokemons from pokeapi
  useEffect(() => {
    if (!allPokemonsWithIds) return;

    const id = allPokemonsWithIds[name];

    const idStr =
      id.toString().length < 2
        ? "00" + id.toString()
        : id.toString().length < 3
        ? "0" + id.toString()
        : id.toString();

    const calcId = id > 1025 ? 10000 + id - 1025 : id;

    setImgUrl(
      id.toString().length > 3
        ? IMG_URL + calcId + IMG_URL_FORMAT
        : ALT_IMG_URL + idStr + ALT_IMG_URL_FORMAT
    );
  }, [allPokemonsWithIds]);

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
