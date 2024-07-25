import React, {
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import useOutsideClick from "../../hooks/useOutsideClick";
import { PokemonContext } from "../Context/PokemonContext";
import { getPokemonInfo } from "../../api/pokemon-info";
import Modal from "../Modal/Modal";

const PokemonInfo = () => {
  const { pokemonId, setPokemonId } = useContext(PokemonContext);
  // modal state
  const [isOpen, setIsOpen] = useState(false);
  const [pokemonData, setPokemonData] = useState();
  const ref = useRef(null);

  // getting pokemon data, and opening modal
  const getPokemonInfoAsync = useCallback(async () => {
    const data = await getPokemonInfo(pokemonId);
    setPokemonData(data);
    setIsOpen(true);
  }, [setPokemonData, pokemonId, setIsOpen]);

  // useffect on pokemon id change
  useEffect(() => {
    if (pokemonId) {
      getPokemonInfoAsync();
    }
  }, [pokemonId, getPokemonInfoAsync]);

  // closeing modal
  useOutsideClick(() => {
    if (isOpen) {
      setIsOpen(false);
      setPokemonId(null);
    }
  }, ref);

  return (
    <>
      <Modal isOpen={isOpen}>
        <div ref={ref}>{pokemonData}</div>
      </Modal>
    </>
  );
};

export default PokemonInfo;
