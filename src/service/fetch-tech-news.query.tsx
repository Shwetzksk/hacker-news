import * as apis from "./api-enpoints";
import { useQuery } from "@tanstack/react-query";

async function fetchTechNews(id: string) {
  try {
    const res = await fetch(apis.hn_news(id));
    const data = await res.json();

    return data;
  } catch (err) {
    throw new Error(err);
  }
}

export default function useFetchTechNews(id: string) {
  const data = useQuery({
    queryKey: ["news", { id }],
    queryFn: () => fetchTechNews(id),
  });

  return data;
}
