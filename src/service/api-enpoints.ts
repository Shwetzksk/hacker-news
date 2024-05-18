export const hnSearch = (query: string) =>
  `https://hn.algolia.com/api/v1/search?query=${query}`;

export const hnNews = (id: string | undefined) =>
  `https://hn.algolia.com/api/v1/items/${id}`;
