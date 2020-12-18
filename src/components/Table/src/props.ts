import type { PropType } from 'vue';
import type { PaginationProps } from './types/pagination';
import type {
  BasicColumn,
  FetchSetting,
  TableSetting,
  SorterResult,
  TableCustomRecord,
  TableRowSelection,
} from './types/table';
import type { FormProps } from '/@/components/Form';
import { DEFAULT_SORT_FN, FETCH_SETTING } from './const';

// __Some-New-Token__ types/table
export const basicProps = {
  tableSetting: {
    type: Object as PropType<TableSetting>,
  },
  inset: {
    type: Boolean as PropType<boolean>,
    default: false,
  },
  sortFn: {
    type: Function as PropType<(sortInfo: SorterResult) => any>,
    default: DEFAULT_SORT_FN,
  },

  showTableSetting: {
    type: Boolean as PropType<boolean>,
    default: false,
  },
  autoCreateKey: {
    type: Boolean as PropType<boolean>,
    default: true,
  },
  striped: {
    type: Boolean as PropType<boolean>,
    default: true,
  },
  showSummary: {
    type: Boolean as PropType<boolean>,
    default: false,
  },

  summaryFunc: {
    type: [Function, Array] as PropType<(...arg: any[]) => any[]>,
    default: null,
  },

  canColDrag: {
    type: Boolean as PropType<boolean>,
    default: true,
  },
  isTreeTable: {
    type: Boolean as PropType<boolean>,
    default: false,
  },
  api: {
    type: Function as PropType<(...arg: any[]) => Promise<any>>,
    default: null,
  },
  beforeFetch: {
    type: Function as PropType<Fn>,
    default: null,
  },
  afterFetch: {
    type: Function as PropType<Fn>,
    default: null,
  },
  handleSearchInfoFn: {
    type: Function as PropType<Fn>,
    default: null,
  },
  fetchSetting: {
    type: Object as PropType<FetchSetting>,
    default: () => {
      return FETCH_SETTING;
    },
  },
  // __Some-New-Token__
  immediate: { type: Boolean as PropType<boolean>, default: true },

  emptyDataIsShowTable: {
    type: Boolean as PropType<boolean>,
    default: true,
  },
  // __Some-New-Token__
  searchInfo: {
    type: Object as PropType<any>,
    default: null,
  },
  // __Some-New-Token__
  useSearchForm: {
    type: Boolean as PropType<boolean>,
    default: false,
  },
  // __Some-New-Token__
  formConfig: {
    type: Object as PropType<Partial<FormProps>>,
    default: null,
  },
  columns: {
    type: [Array] as PropType<BasicColumn[]>,
    default: null,
  },
  showIndexColumn: {
    type: Boolean as PropType<boolean>,
    default: true,
  },
  indexColumnProps: {
    type: Object as PropType<BasicColumn>,
    default: null,
  },
  actionColumn: {
    type: Object as PropType<BasicColumn>,
    default: null,
  },
  ellipsis: {
    type: Boolean as PropType<boolean>,
    default: true,
  },
  canResize: {
    type: Boolean as PropType<boolean>,
    default: true,
  },
  clearSelectOnPageChange: {
    type: Boolean as PropType<boolean>,
    default: false,
  },
  resizeHeightOffset: {
    type: Number as PropType<number>,
    default: 0,
  },
  rowSelection: {
    type: Object as PropType<TableRowSelection | null>,
    default: null,
  },
  title: {
    type: [String, Function] as PropType<string | ((data: any) => any)>,
    default: null,
  },
  titleHelpMessage: {
    type: [String, Array] as PropType<string | string[]>,
  },
  maxHeight: {
    type: Number as PropType<number>,
  },
  dataSource: {
    type: Array as PropType<any[]>,
    default: null,
  },
  rowKey: {
    type: [String, Function] as PropType<string | ((record: any) => string)>,
    default: '',
  },
  bordered: {
    type: Boolean as PropType<boolean>,
    default: false,
  },
  pagination: {
    type: [Object, Boolean] as PropType<PaginationProps | boolean>,
    default: null,
  },

  loading: {
    type: Boolean as PropType<boolean>,
    default: false,
  },
  rowClassName: {
    type: Function as PropType<(record: TableCustomRecord<any>, index: number) => string>,
  },

  scroll: {
    type: Object as PropType<{ x: number | true; y: number }>,
    default: null,
  },

  filtersStorageKey: {
    type: String as PropType<string>,
  },

  pageStorageKey: {
    type: String as PropType<string>,
  },

  sortStorageKey: {
    type: String as PropType<string>,
  },
};
