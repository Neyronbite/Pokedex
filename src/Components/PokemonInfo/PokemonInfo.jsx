import React, {
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import useOutsideClick from "../../hooks/useOutsideClick";
import { PokemonContext } from "../Context/PokemonContext";
import { getPokemonImageUrl, getPokemonInfo } from "../../api/pokemon-info";
import { getAllPokemonsWithIds } from "../../api";
import Modal from "../Modal/Modal";
import styles from "./pokemon-info.module.scss";
import Column from "../Column/Column";
import PokemonCard from "../PokemonCard/PokemonCard";

const PokemonInfo = () => {
  const { pokemonId, setPokemonId } = useContext(PokemonContext);
  // modal state
  const [isOpen, setIsOpen] = useState(false);
  const [pokemonData, setPokemonData] = useState();
  // TODO use Context for pokemonsWithIds and card click handler
  const [allPokemonsWithIds, setAllPokemonsWithIds] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const ref = useRef(null);

  // getting pokemon data, and opening modal
  const getPokemonInfoAsync = useCallback(async () => {
    const data = await getPokemonInfo(pokemonId);
    setPokemonData(data);
    setIsOpen(true);
  }, [setPokemonData, pokemonId, setIsOpen]);

  // getting image url
  const setUrlAsync = useCallback(async () => {
    if (pokemonId) {
      const url = await getPokemonImageUrl(pokemonId);
      setImageUrl(url);
    }
  }, [pokemonId]);

  useEffect(() => {
    // Fetch Pokemon data with and give them IDs
    const getAllPokemonsWithIdsAsync = async () => {
      const data = await getAllPokemonsWithIds();

      setAllPokemonsWithIds(data);
    };

    getAllPokemonsWithIdsAsync();
  }, []);

  // useffect on pokemon id change
  useEffect(() => {
    if (pokemonId) {
      getPokemonInfoAsync();
      setUrlAsync();
    }
  }, [pokemonId, getPokemonInfoAsync, setUrlAsync]);

  // closeing modal
  useOutsideClick(() => {
    if (isOpen) {
      setIsOpen(false);
      setPokemonId(null);
    }
  }, ref);

  console.log(pokemonData);
  return (
    <>
      {pokemonData && (
        <Modal isOpen={isOpen}>
          <div ref={ref} className={`${styles.container} ${styles.flex_col}`}>
            {/* Header */}
            <h1 className={styles.heading}>
              {" "}
              {pokemonData.name} #{pokemonId}
            </h1>
            {/* Content */}
            <div
              className={`${styles.flex} ${styles.flex_row} ${styles.flex_between}`}
            >
              {/* Left side */}
              <div className={`${styles.flex} ${styles.flex_col}`}>
                <div className={`${styles.flex} ${styles.flex_row}`}>
                  {/* Image */}
                  <div>
                    <img className={styles.image} src={imageUrl} alt="" />
                  </div>
                  {/* main info */}
                  <div className={`${styles.flex} ${styles.flex_col}`}>
                    <div>
                      <span className={styles.stat_text}>Height: </span>{" "}
                      {pokemonData.height / 10} m
                    </div>
                    <div>
                      {" "}
                      <span className={styles.stat_text}>Weight: </span>{" "}
                      {pokemonData.weight / 10} kg
                    </div>
                    <div>
                      <span className={styles.stat_text}>Category: </span>
                      Seed
                    </div>
                    <div>
                      <span className={styles.stat_text}>Types: </span> grass
                      poison
                    </div>
                    <div>
                      <span className={styles.stat_text}>Abilities: </span>
                      {pokemonData.abilities.map((a) => a.ability.name + " ")}
                    </div>
                    <div>
                      <span className={styles.stat_text}>Genders: </span>
                      male female
                    </div>
                  </div>
                </div>
                {/* TODO */}
                {/* <h5>
                  When the bulb on its back grows large, it appears to lose the
                  ability to stand on its hind legs.
                </h5> */}
              </div>
              {/* Right side */}
              <div className={`${styles.flex} ${styles.flex_col}`}>
                <h4>Stats</h4>
                <div
                  className={`${styles.flex} ${styles.flex_col} ${styles.no_gap}`}
                >
                  <Column name="name" count="5" />
                  <Column name="name" count="5" />
                  <Column name="name" count="5" />
                  <Column name="name" count="5" />
                  <Column name="name" count="5" />
                  <Column name="name" count="5" />
                </div>
                <h4>Evolution</h4>
                <div
                  className={`${styles.flex} ${styles.flex_row} ${styles.align_center}`}
                >
                  <PokemonCard
                    name="bulbasaur"
                    allPokemonsWithIds={allPokemonsWithIds}
                  />
                  <h1>{" > "}</h1>
                  <PokemonCard
                    name="ivysaur"
                    allPokemonsWithIds={allPokemonsWithIds}
                  />
                  <h1>{" > "}</h1>
                  <PokemonCard
                    name="venusaur"
                    allPokemonsWithIds={allPokemonsWithIds}
                  />
                </div>
              </div>

              {/* <div className={`${styles.flex} ${styles.flex_col}`}>
              <div>
                
              </div>
              <div className={`${styles.flex} ${styles.flex_row}`}>
                <div>
                  <Column name="name" count="5" />
                  <Column name="name" count="5" />
                  <Column name="name" count="5" />
                  <Column name="name" count="5" />
                  <Column name="name" count="5" />
                  <Column name="name" count="5" />
                  <Column name="name" count="5" />
                </div>
                <div>
                  <PokemonCard
                    name="bulbasaur"
                    allPokemonsWithIds={allPokemonsWithIds}
                  />
                  <PokemonCard
                    name="ivysaur"
                    allPokemonsWithIds={allPokemonsWithIds}
                  />
                  <PokemonCard
                    name="venusaur"
                    allPokemonsWithIds={allPokemonsWithIds}
                  />
                </div>
              </div>
            </div> */}
            </div>
          </div>
        </Modal>
      )}
    </>
  );
};

export default PokemonInfo;
