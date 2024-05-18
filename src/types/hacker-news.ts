export interface News {
  author: string;
  created_at: Date;
  title: string;
  children: Array<NewsComment>;
}

export interface NewsComment {
  author: string;
  text: string;
  id: number;
  created_at: Date;
  type: "comment";
  children: Array<NewsComment>;
}

export interface NewsItem {
  title: string;
  created_at: Date;
  num_comments: number;
  points: number;
  objectID: string;
  created_at_i: number;
}
