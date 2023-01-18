import { dehydrate, QueryClient } from "@tanstack/query-core";
import { fetchPikachu } from "./api";
import Content from "./Content";
import { ReactQuery } from "./ReactQuery";

export default async function Home() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(["pikachu"], fetchPikachu);

  queryClient.clear();

  return <Content />;
}
