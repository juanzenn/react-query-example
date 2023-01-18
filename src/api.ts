import { PokemonClient } from "pokenode-ts";

export const fetchPikachu = async () => {
  const api = new PokemonClient();

  return await api.getPokemonByName("pikachu");
};

export const fetchTogepi = async () => {
  const api = new PokemonClient();

  return await api.getPokemonByName("togepi");
};
