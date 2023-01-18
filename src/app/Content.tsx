"use client";

import { usePikachu } from "@/hooks/usePikachu";
import { Pokemon } from "pokenode-ts";

type HomeProps = {
  data: Pokemon;
};

export default function Home({ data: initialData }: HomeProps) {
  const { data, isLoading } = usePikachu(initialData);

  if (isLoading) return <div>Loading...</div>;

  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}
