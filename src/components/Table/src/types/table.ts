import type { VNodeChild } from 'vue';
import type { PaginationProps } from './pagination';
import type { FormProps } from '/@/components/Form';
import type {
  ColumnProps,
  TableRowSelection as ITableRowSelection,
} from 'ant-design-vue/lib/table/interface';
import { ComponentType } from './componentType';
// import { ColumnProps } from './column';
export declare type SortOrder = 'ascend' | 'descend';
export interface TableCurrentDataSource<T = any> {
  currentDataSource: T[];
}

export interface TableRowSelection<T = any> extends ITableRowSelection {
  /**
   * Callback executed when selected rows change
   * @type Function
   */
  onChange?: (selectedRowKeys: string[] | number[], selectedRows: T[]) => any;

  /**
   * Callback executed when select/deselect one row
   * @type FunctionT
   */
  onSelect?: (record: T, selected: boolean, selectedRows: Object[], nativeEvent: Event) => any;

  /**
   * Callback executed when select/deselect all rows
   * @type Function
   */
  onSelectAll?: (selected: boolean, selectedRows: T[], changeRows: T[]) => any;

  /**
   * Callback executed when row selection is inverted
   * @type Function
   */
  onSelectInvert?: (selectedRows: string[] | number[]) => any;
}

export interface TableCustomRecord<T> {
  record?: T;
  index?: number;
}

export interface ExpandedRowRenderRecord<T> extends TableCustomRecord<T> {
  indent?: number;
  expanded?: boolean;
}
export interface ColumnFilterItem {
  text?: string;
  value?: string;
  children?: any;
}

export interface TableCustomRecord<T = any> {
  record?: T;
  index?: number;
}

export interface SorterResult {
  column: ColumnProps;
  order: SortOrder;
  field: string;
  columnKey: string;
}

export interface RenderEditableCellParams {
  dataIndex: string;
  component?: ComponentType;
  componentProps?: any;
  placeholder?: string;
}

export interface FetchParams {
  searchInfo?: any;
  page?: number;
  sortInfo?: any;
  filterInfo?: any;
}

export interface GetColumnsParams {
  ignoreIndex?: boolean;
  ignoreAction?: boolean;
}

export type SizeType = 'default' | 'middle' | 'small' | 'large';

export interface TableActionType {
  reload: (opt?: FetchParams) => Promise<void>;
  getSelectRows: <T = any>() => T[];
  clearSelectedRowKeys: () => void;
  getSelectRowKeys: () => string[];
  deleteSelectRowByKey: (key: string) => void;
  setPagination: (info: Partial<PaginationProps>) => void;
  setTableData: <T = any>(values: T[]) => void;
  getColumns: (opt?: GetColumnsParams) => BasicColumn[];
  setColumns: (columns: BasicColumn[] | string[]) => void;
  getDataSource: <T = any>() => T[];
  setLoading: (loading: boolean) => void;
  setProps: (props: Partial<BasicTableProps>) => void;
  redoHeight: () => void;
  setSelectedRowKeys: (rowKeys: string[] | number[]) => void;
  getPaginationRef: () => PaginationProps | boolean;
  getSize: () => SizeType;
}

export interface FetchSetting {
  // __Some-New-Token__
  pageField: string;
  // __Some-New-Token__
  sizeField: string;
  // __Some-New-Token__  __Some-New-Token__ a.b.c
  listField: string;
  // __Some-New-Token__  __Some-New-Token__ a.b.c
  totalField: string;
}

export interface TableSetting {
  redo?: boolean;
  size?: boolean;
  setting?: boolean;
  fullScreen?: boolean;
}

export interface BasicTableProps<T = any> {
  // __Some-New-Token__
  sortFn?: (sortInfo: SorterResult) => any;
  // __Some-New-Token__padding
  inset?: boolean;
  // __Some-New-Token__
  showTableSetting?: boolean;
  tableSetting?: TableSetting;
  // __Some-New-Token__
  striped?: boolean;
  // __Some-New-Token__key
  autoCreateKey?: boolean;
  // __Some-New-Token__
  summaryFunc?: (...arg: any) => any[];
  // __Some-New-Token__
  showSummary?: boolean;
  // __Some-New-Token__
  canColDrag?: boolean;
  // __Some-New-Token__
  isTreeTable?: boolean;
  // __Some-New-Token__
  api?: (...arg: any) => Promise<any>;
  // __Some-New-Token__
  beforeFetch?: Fn;
  // __Some-New-Token__
  afterFetch?: Fn;
  // __Some-New-Token__
  handleSearchInfoFn?: Fn;
  // __Some-New-Token__
  fetchSetting?: FetchSetting;
  // __Some-New-Token__
  immediate?: boolean;
  // __Some-New-Token__，__Some-New-Token__
  emptyDataIsShowTable?: boolean;
  // __Some-New-Token__
  searchInfo?: any;
  // __Some-New-Token__
  useSearchForm?: boolean;
  // __Some-New-Token__
  formConfig?: Partial<FormProps>;
  // __Some-New-Token__
  columns: BasicColumn[];
  // __Some-New-Token__
  showIndexColumn?: boolean;
  // __Some-New-Token__
  indexColumnProps?: BasicColumn;
  actionColumn?: BasicColumn;
  // __Some-New-Token__。。。
  ellipsis?: boolean;
  // __Some-New-Token__
  canResize?: boolean;
  // __Some-New-Token__， __Some-New-Token__-__Some-New-Token__
  resizeHeightOffset?: number;

  // __Some-New-Token__
  clearSelectOnPageChange?: boolean;
  //
  rowKey?: string | ((record: any) => string);
  // __Some-New-Token__
  dataSource?: any[];
  // __Some-New-Token__
  titleHelpMessage?: string | string[];
  // __Some-New-Token__
  maxHeight?: number;
  // __Some-New-Token__
  bordered?: boolean;
  // __Some-New-Token__
  pagination?: PaginationProps | boolean;
  // loading__Some-New-Token__
  loading?: boolean;

  /**
   * The column contains children to display
   * @default 'children'
   * @type string | string[]
   */
  childrenColumnName?: string | string[];

  /**
   * Override default table elements
   * @type object
   */
  components?: object;

  /**
   * Expand all rows initially
   * @default false
   * @type boolean
   */
  defaultExpandAllRows?: boolean;

  /**
   * Initial expanded row keys
   * @type string[]
   */
  defaultExpandedRowKeys?: string[];

  /**
   * Current expanded row keys
   * @type string[]
   */
  expandedRowKeys?: string[];

  /**
   * Expanded container render for each row
   * @type Function
   */
  expandedRowRender?: (record?: ExpandedRowRenderRecord<T>) => VNodeChild | JSX.Element;

  /**
   * Customize row expand Icon.
   * @type Function | VNodeChild
   */
  expandIcon?: Function | VNodeChild | JSX.Element;

  /**
   * Whether to expand row by clicking anywhere in the whole row
   * @default false
   * @type boolean
   */
  expandRowByClick?: boolean;

  /**
   * The index of `expandIcon` which column will be inserted when `expandIconAsCell` is false. default 0
   */
  expandIconColumnIndex?: number;

  /**
   * Table footer renderer
   * @type Function | VNodeChild
   */
  footer?: Function | VNodeChild | JSX.Element;

  /**
   * Indent size in pixels of tree data
   * @default 15
   * @type number
   */
  indentSize?: number;

  /**
   * i18n text including filter, sort, empty text, etc
   * @default { filterConfirm: 'Ok', filterReset: 'Reset', emptyText: 'No Data' }
   * @type object
   */
  locale?: object;

  /**
   * Row's className
   * @type Function
   */
  rowClassName?: (record: TableCustomRecord<T>) => string;

  /**
   * Row selection config
   * @type object
   */
  rowSelection?: TableRowSelection;

  /**
   * Set horizontal or vertical scrolling, can also be used to specify the width and height of the scroll area.
   * It is recommended to set a number for x, if you want to set it to true,
   * you need to add style .ant-table td { white-space: nowrap; }.
   * @type object
   */
  scroll?: { x?: number | true; y?: number };

  /**
   * Whether to show table header
   * @default true
   * @type boolean
   */
  showHeader?: boolean;

  /**
   * Size of table
   * @default 'default'
   * @type string
   */
  size?: SizeType;

  /**
   * Table title renderer
   * @type Function | ScopedSlot
   */
  title?: VNodeChild | JSX.Element;

  /**
   * Set props on per header row
   * @type Function
   */
  customHeaderRow?: (column: ColumnProps, index: number) => object;

  /**
   * Set props on per row
   * @type Function
   */
  customRow?: (record: T, index: number) => object;

  /**
   * `table-layout` attribute of table element
   * `fixed` when header/columns are fixed, or using `column.ellipsis`
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/table-layout
   * @version 1.5.0
   */
  tableLayout?: 'auto' | 'fixed' | string;

  /**
   * the render container of dropdowns in table
   * @param triggerNode
   * @version 1.5.0
   */
  getPopupContainer?: (triggerNode?: HTMLElement) => HTMLElement;

  /**
   * Data can be changed again before rendering.
   * The default configuration of general user empty data.
   * You can configured globally through [ConfigProvider](https://antdv.com/components/config-provider-cn/)
   *
   * @version 1.5.4
   */
  transformCellText?: Function;

  /**
   * Callback executed when pagination, filters or sorter is changed
   * @param pagination
   * @param filters
   * @param sorter
   * @param currentDataSource
   */
  onChange?: (pagination: any, filters: any, sorter: any, extra: any) => void;

  /**
   * Callback executed when the row expand icon is clicked
   *
   * @param expanded
   * @param record
   */
  onExpand?: (expande: boolean, record: T) => void;

  /**
   * Callback executed when the expanded rows change
   * @param expandedRows
   */
  onExpandedRowsChange?: (expandedRows: string[] | number[]) => void;

  filtersStorageKey?: string;

  pageStorageKey?: string;

  sortStorageKey?: string;
}

export interface BasicColumn extends ColumnProps {
  children?: BasicColumn[];

  //
  flag?: 'INDEX' | 'DEFAULT' | 'CHECKBOX' | 'RADIO' | 'ACTION';

  slots?: Indexable;
}
