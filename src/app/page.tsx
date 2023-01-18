import { fetchPikachu } from "@/api";
import Content from "./Content";

export default async function Home() {
  const pikachu = await fetchPikachu();

  return <Content data={pikachu} />;
}
