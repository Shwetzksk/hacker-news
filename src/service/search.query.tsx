import * as apis from "./api-enpoints";
import { useQuery } from "@tanstack/react-query";
import { NewsItem } from "@/types/hacker-news";

interface News {
  hits: Array<NewsItem>;
}
async function fetchSearchedNews(query: string) {
  if (!query) return [];
  try {
    const res = await fetch(apis.hnSearch(query));
    const data: News = await res.json();
    return data.hits
      .toSorted((a: NewsItem, b: NewsItem) => b.created_at_i - a.created_at_i)
      .filter((data: NewsItem) => data.title);
  } catch (err) {
    throw new Error(err as string);
  }
}

export default function useSearchNews(query: string) {
  const data = useQuery({
    queryKey: ["search", { query }],
    queryFn: () => fetchSearchedNews(query),
  });

  return data;
}
