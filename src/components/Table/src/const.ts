import type { SorterResult } from './types/table';

export const ROW_KEY = 'key';

// __Some-New-Token__;
export const PAGE_SIZE_OPTIONS = ['10', '50', '80', '100'];

// __Some-New-Token__
export const PAGE_SIZE = ~~PAGE_SIZE_OPTIONS[0];

// __Some-New-Token__
// __Some-New-Token__ xxx.xxx.xxx__Some-New-Token__
export const FETCH_SETTING = {
  // __Some-New-Token__
  pageField: 'page',
  // __Some-New-Token__
  sizeField: 'pageSize',
  // __Some-New-Token__
  listField: 'items',
  // __Some-New-Token__
  totalField: 'total',
};

// __Some-New-Token__
export function DEFAULT_SORT_FN(sortInfo: SorterResult) {
  const { field, order } = sortInfo;
  return {
    // __Some-New-Token__
    field,
    // __Some-New-Token__  asc/desc
    order,
  };
}
