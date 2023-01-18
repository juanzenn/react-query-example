"use client";

import { useQuery } from "@tanstack/react-query";
import { fetchPikachu } from "./api";

export default function Content() {
  const { data, isLoading } = useQuery(["pikachu"], fetchPikachu);

  return <div>{isLoading ? "Loading..." : JSON.stringify(data)}</div>;
}
