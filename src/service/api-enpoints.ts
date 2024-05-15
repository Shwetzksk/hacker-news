export const hn_search = (query: string) =>
  `https://hn.algolia.com/api/v1/search?query=${query}`;

export const hn_news = (id: number) =>
  `https://hn.algolia.com/api/v1/items/${id}`;
