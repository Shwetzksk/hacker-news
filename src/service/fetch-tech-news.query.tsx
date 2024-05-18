import * as apis from "./api-enpoints";
import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { News } from "@/types/hacker-news";

export async function fetchTechNews(id: string | undefined) {
  try {
    const res = await fetch(apis.hnNews(id));
    const data: News = await res.json();

    return data;
  } catch (err) {
    throw new Error(err as string);
  }
}

export default function useFetchTechNews(
  id: string | undefined
): UseQueryResult<News, Error> {
  const data = useQuery({
    queryKey: ["news", { id }],
    queryFn: () => fetchTechNews(id),
  });

  return data;
}
