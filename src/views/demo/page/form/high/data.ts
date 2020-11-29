import { FormSchema } from '/@/components/Form';

const basicOptions: LabelValueOptions = [
  {
    label: '__Some-New-Token__',
    value: '1',
  },
  {
    label: '__Some-New-Token__',
    value: '2',
  },
];

const storeTypeOptions: LabelValueOptions = [
  {
    label: '__Some-New-Token__',
    value: '1',
  },
  {
    label: '__Some-New-Token__',
    value: '2',
  },
];

export const schemas: FormSchema[] = [
  {
    field: 'f1',
    component: 'Input',
    label: '__Some-New-Token__',
    required: true,
  },
  {
    field: 'f2',
    component: 'Input',
    label: '__Some-New-Token__',
    required: true,
    componentProps: {
      addonBefore: 'http://',
      addonAfter: 'com',
    },
    colProps: {
      offset: 2,
    },
  },
  {
    field: 'f3',
    component: 'Select',
    label: '__Some-New-Token__',
    componentProps: {
      options: basicOptions,
    },
    required: true,
    colProps: {
      offset: 2,
    },
  },
  {
    field: 'f4',
    component: 'Select',
    label: '__Some-New-Token__',
    componentProps: {
      options: basicOptions,
    },
    required: true,
  },
  {
    field: 'f5',
    component: 'RangePicker',
    label: '__Some-New-Token__',
    required: true,
    colProps: {
      offset: 2,
    },
  },
  {
    field: 'f6',
    component: 'Select',
    label: '__Some-New-Token__',
    componentProps: {
      options: storeTypeOptions,
    },
    required: true,
    colProps: {
      offset: 2,
    },
  },
];
export const taskSchemas: FormSchema[] = [
  {
    field: 't1',
    component: 'Input',
    label: '__Some-New-Token__',
    required: true,
  },
  {
    field: 't2',
    component: 'Input',
    label: '__Some-New-Token__',
    required: true,
    colProps: {
      offset: 2,
    },
  },
  {
    field: 't3',
    component: 'Select',
    label: '__Some-New-Token__',
    componentProps: {
      options: basicOptions,
    },
    required: true,
    colProps: {
      offset: 2,
    },
  },
  {
    field: 't4',
    component: 'Select',
    label: '__Some-New-Token__',
    componentProps: {
      options: basicOptions,
    },
    required: true,
  },
  {
    field: 't5',
    component: 'TimePicker',
    label: '__Some-New-Token__',
    required: true,
    componentProps: {
      style: { width: '100%' },
    },
    colProps: {
      offset: 2,
    },
  },
  {
    field: 't6',
    component: 'Select',
    label: '__Some-New-Token__',
    componentProps: {
      options: storeTypeOptions,
    },
    required: true,
    colProps: {
      offset: 2,
    },
  },
];
