export interface BasicTableFetchResult<T extends any> {
  data: T;
  total: number;
  current_page: number;
}
