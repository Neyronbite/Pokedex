import {
  ALT_IMG_URL,
  ALT_IMG_URL_FORMAT,
  IMG_URL,
  IMG_URL_FORMAT,
} from "../constants/global";

export function getPokemonImageUrl(id) {
  const idStr =
    id.toString().length < 2
      ? "00" + id.toString()
      : id.toString().length < 3
      ? "0" + id.toString()
      : id.toString();

  const calcId = id > 1025 ? 10000 + id - 1025 : id;

  const result =
    id.toString().length > 3
      ? IMG_URL + calcId + IMG_URL_FORMAT
      : ALT_IMG_URL + idStr + ALT_IMG_URL_FORMAT;
  return result;
}

export async function getPokemonInfo(id) {
  return "Test";
}
