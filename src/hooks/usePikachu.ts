import { useQuery } from "@tanstack/react-query";
import { Pokemon } from "pokenode-ts";
import { fetchPikachu } from "./../api";

export const usePikachu = (initialData?: Pokemon) => {
  return useQuery(["pikachu"], fetchPikachu, {
    initialData,
  });
};
