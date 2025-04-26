export interface IResponseMeta {
  page: number;
  limit: number;
  total: number;
  totalPage: number;
}

export interface IResponse<T> {
  status: string;
  message: string;
  meta: IResponseMeta;
  data: T;
}

export interface IParamsBase {
  page?: number;
  size?: number;
  search?: string;
  sort?: string;
  sortBy?: string;
}