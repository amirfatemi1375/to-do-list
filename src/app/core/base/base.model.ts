export interface ApiResponse<T> {
  pageSize: number;
  pageNumber: number;
  actionCode: string;
  messge: string;
  data: T;
}
