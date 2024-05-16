import * as apis from "./api-enpoints";
import { useQuery } from "@tanstack/react-query";

async function fetchSearchedNews(query: string) {
  if (!query) return [];
  try {
    const res = await fetch(apis.hn_search(query));
    const data = await res.json();
    return data.hits
      .toSorted((a, b) => b.created_at_i - a.created_at_i)
      .filter((data) => data.title);
  } catch (err) {
    throw new Error(err);
  }
}

export default function useSearchNews(query: string) {
  const data = useQuery({
    queryKey: ["search", { query }],
    queryFn: () => fetchSearchedNews(query),
  });

  return data;
}
