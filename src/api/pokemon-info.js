import {
  ALT_IMG_URL,
  ALT_IMG_URL_FORMAT,
  IMG_URL,
  IMG_URL_FORMAT,
} from "../constants/global";
import { API } from "../utils/index";

export async function getPokemonImageUrl(id) {
  const idStr =
    id.toString().length < 2
      ? "00" + id.toString()
      : id.toString().length < 3
      ? "0" + id.toString()
      : id.toString();

  const result =
    id.toString().length > 3
      ? IMG_URL + id + IMG_URL_FORMAT
      : ALT_IMG_URL + idStr + ALT_IMG_URL_FORMAT;
  return result;
}

export async function getPokemonInfo(id) {
  const { data } = await API.get("pokemon/" + id);

  return data;
}
