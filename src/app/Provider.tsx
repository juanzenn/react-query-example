import { dehydrate, QueryClient } from "@tanstack/query-core";
import React from "react";
import { ReactQuery } from "./ReactQuery";

export default async function Provider({
  children,
}: {
  children: React.ReactNode;
}) {
  const queryClient = new QueryClient();

  const provider = (
    <ReactQuery dehydratedState={dehydrate(queryClient)}>{children}</ReactQuery>
  );

  queryClient.clear();
  return provider;
}
