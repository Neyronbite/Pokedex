import { API, take, skip } from "../utils";
import { API_URL } from "../constants/global";

export function filterPokemons({
  allPokemons,
  filter = "",
  limit = 20,
  page = 1,
}) {
  const offset = (page - 1) * limit;
  const filteredPokemons = allPokemons.filter((x) => x.name.includes(filter));

  const pages = Math.ceil(filteredPokemons.length / limit);
  const pagePokemons = take(skip(filteredPokemons, offset), limit);

  return {
    pages: pages,
    results: pagePokemons,
  };
}

export async function getAllPokemons(type) {
  const url = type ? "type/" + type : "pokemon";
  const resultPokemons = await API.get(url + "?limit=-1");

  const res = resultPokemons.data.pokemon
    ? resultPokemons.data.pokemon.map((item) => item.pokemon)
    : resultPokemons.data.results;

  return res;
}

export async function getAllPokemonsWithIds() {
  const response = await API.get("pokemon?limit=-1");
  const data = response.data.results;

  const result = {};

  for (let i = 0; i < data.length; i++) {
    result[data[i].name] = Number(
      data[i].url
        .replace(API_URL + "pokemon/", "")
        .replace("/", "")
        .trim()
    );
  }

  return result;
}
