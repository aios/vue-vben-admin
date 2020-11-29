import type { FieldMapToTime, FormSchema } from './types/form';
import type { PropType } from 'vue';
import type { ColEx } from './types';
import { TableActionType } from '/@/components/Table';

export const basicProps = {
  model: {
    type: Object as PropType<any>,
    default: {},
  },
  // __Some-New-Token__  __Some-New-Token__
  labelWidth: {
    type: [Number, String] as PropType<number | string>,
    default: 0,
  },
  fieldMapToTime: {
    type: Array as PropType<FieldMapToTime>,
    default: () => [],
  },
  compact: Boolean as PropType<boolean>,
  // __Some-New-Token__
  schemas: {
    type: [Array] as PropType<FormSchema[]>,
    default: () => [],
    required: true,
  },
  mergeDynamicData: {
    type: Object as PropType<any>,
    default: null,
  },
  baseRowStyle: {
    type: Object as PropType<any>,
  },
  baseColProps: {
    type: Object as PropType<any>,
  },
  autoSetPlaceHolder: {
    type: Boolean,
    default: true,
  },
  submitOnReset: {
    type: Boolean,
    default: false,
  },
  size: {
    type: String as PropType<'default' | 'small' | 'large'>,
    default: 'default',
  },
  // __Some-New-Token__
  disabled: Boolean as PropType<boolean>,
  emptySpan: {
    type: [Number, Object] as PropType<number>,
    default: 0,
  },
  // __Some-New-Token__
  showAdvancedButton: { type: Boolean as PropType<boolean>, default: false },
  // __Some-New-Token__
  transformDateFunc: {
    type: Function as PropType<Fn>,
    default: (date: any) => {
      return date._isAMomentObject ? date.format('YYYY-MM-DD HH:mm:ss') : date;
    },
  },
  rulesMessageJoinLabel: {
    type: Boolean,
    default: true,
  },
  // __Some-New-Token__3__Some-New-Token__
  autoAdvancedLine: {
    type: Number as PropType<number>,
    default: 3,
  },

  // __Some-New-Token__
  showActionButtonGroup: {
    type: Boolean as PropType<boolean>,
    default: true,
  },
  // __Some-New-Token__Col__Some-New-Token__
  actionColOptions: Object as PropType<ColEx>,
  // __Some-New-Token__
  showResetButton: {
    type: Boolean as PropType<boolean>,
    default: true,
  },
  // __Some-New-Token__
  resetButtonOptions: Object as PropType<any>,

  // __Some-New-Token__
  showSubmitButton: {
    type: Boolean as PropType<boolean>,
    default: true,
  },
  // __Some-New-Token__
  submitButtonOptions: Object as PropType<any>,

  // __Some-New-Token__
  resetFunc: Function as PropType<Fn>,
  submitFunc: Function as PropType<Fn>,

  // __Some-New-Token__props
  hideRequiredMark: Boolean as PropType<boolean>,

  labelCol: Object as PropType<ColEx>,

  layout: {
    type: String as PropType<'horizontal' | 'vertical' | 'inline'>,
    default: 'horizontal',
  },
  tableAction: {
    type: Object as PropType<TableActionType>,
  },

  wrapperCol: Object as PropType<any>,

  colon: {
    type: Boolean as PropType<boolean>,
    default: false,
  },

  labelAlign: String as PropType<string>,
};
