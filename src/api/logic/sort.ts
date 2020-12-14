import {ParsedQuery} from "query-string";

const fixOrder = (sortOrder: string): string => {
  const sortOrders: any = {ascend: 'asc', descend: 'desc'};

  return sortOrders[sortOrder] || '';
}

export const fixSortParams = (params: ParsedQuery): ParsedQuery => {
  if (params.field) {
    params.sortField = params.field;
    delete params.field;
  }

  if (params.order) {
    params.sortDirection = fixOrder(<string>params.order);
    delete params.order;
  }

  return params;
}