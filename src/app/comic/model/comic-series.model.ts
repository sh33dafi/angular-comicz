export interface ComicSeries {
  id?: number;
  title: string;
  image?: string;
  author?: string;
  comics?: Array<Comic>;
}

export interface Comic {
  number: number;
  title: string;
  image: string;
}
