//typy Meta danych
export interface Meta {
  pagination: {
    total: number;
    pages: number;
    page: number;
    limit: number;
    links: {
      previous: null | string;
      current: string;
      next: null | string;
    };
  };
}
