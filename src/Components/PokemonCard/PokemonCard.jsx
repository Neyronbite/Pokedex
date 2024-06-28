import React from "react";

import {
  ALT_IMG_URL,
  ALT_IMG_URL_FORMAT,
  IMG_URL,
  IMG_URL_FORMAT,
} from "../../constants/global";

import styles from "./pokemon-card.module.scss";

const PokemonCard = ({ name, allPokemonsWithIds }) => {
  //TODO fix this shit
  if (!allPokemonsWithIds) {
    return "Loading";
  }

  const id = allPokemonsWithIds[name];

  const idStr =
    id.toString().length < 2
      ? "00" + id.toString()
      : id.toString().length < 3
      ? "0" + id.toString()
      : id.toString();

  const calcId = id > 1025 ? 10000 + id - 1025 : id;

  const imgUrl =
    id.toString().length > 3
      ? IMG_URL + calcId + IMG_URL_FORMAT
      : ALT_IMG_URL + idStr + ALT_IMG_URL_FORMAT;

  return (
    <div className={styles["card"]}>
      <div className={styles["card-image"]}>
        {/* TODO fix hardcoded url */}
        <img src={imgUrl} alt="" />
      </div>
      <div>
        <h3 className={styles["card-heading"]}>{name}</h3>
      </div>
    </div>
  );
};

export default PokemonCard;
