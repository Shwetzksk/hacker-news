import * as apis from "./api-enpoints";

export default async function fetchSearchedNews(query: string) {
  try {
    const res = await fetch(apis.hn_search(query));

    return res;
  } catch (err) {}
}
