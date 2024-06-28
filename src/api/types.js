import { API } from "../utils";

export async function getTypes() {
  const { data } = await API.get("type");
  console.log(data);
  const result = data.results.map((x) => x.name);

  return result;
}
