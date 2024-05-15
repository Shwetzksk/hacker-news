import * as apis from "./api-enpoints";
import { useQuery } from "@tanstack/react-query";

async function fetchSearchedNews(query: string) {
  try {
    const res = await fetch(apis.hn_search(query));
    const data = await res.json();
    console.log(data);
    return data;
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
