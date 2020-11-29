import { FormSchema } from '/@/components/Form';

export const schemas: FormSchema[] = [
  {
    field: 'title',
    component: 'Input',
    label: '__Some-New-Token__',
    componentProps: {
      placeholder: '__Some-New-Token__',
    },
    required: true,
  },
  {
    field: 'time',
    component: 'RangePicker',
    label: '__Some-New-Token__',
    required: true,
  },
  {
    field: 'target',
    component: 'InputTextArea',
    label: '__Some-New-Token__',
    componentProps: {
      placeholder: '__Some-New-Token__',
      rows: 4,
    },
    required: true,
  },
  {
    field: 'metrics',
    component: 'InputTextArea',
    label: '__Some-New-Token__',
    componentProps: {
      placeholder: '__Some-New-Token__',
      rows: 4,
    },
    required: true,
  },
  {
    field: 'client',
    component: 'Input',
    label: '__Some-New-Token__',
    helpMessage: '__Some-New-Token__',
    subLabel: '( __Some-New-Token__ )',
    componentProps: {
      placeholder: '__Some-New-Token__，__Some-New-Token__ @__Some-New-Token__／__Some-New-Token__',
    },
  },
  {
    field: 'inviteer',
    component: 'Input',
    label: '__Some-New-Token__',
    subLabel: '( __Some-New-Token__ )',
    componentProps: {
      placeholder:
        '__Some-New-Token__ @__Some-New-Token__／__Some-New-Token__，__Some-New-Token__ 5 __Some-New-Token__',
    },
  },
  {
    field: 'weights',
    component: 'InputNumber',
    label: '__Some-New-Token__',
    subLabel: '( __Some-New-Token__ )',
    componentProps: {
      formatter: (value: string) => (value ? `${value}%` : ''),
      parser: (value: string) => value.replace('%', ''),
      placeholder: '__Some-New-Token__',
    },
  },
  {
    field: 'disclosure',
    component: 'RadioGroup',
    label: '__Some-New-Token__',
    itemProps: {
      extra: '__Some-New-Token__、__Some-New-Token__',
    },
    componentProps: {
      options: [
        {
          label: '__Some-New-Token__',
          value: '1',
        },
        {
          label: '__Some-New-Token__',
          value: '2',
        },
        {
          label: '__Some-New-Token__',
          value: '3',
        },
      ],
    },
  },
  {
    field: 'disclosurer',
    component: 'Select',
    label: ' ',
    show: ({ model }) => {
      return model.disclosure === '2';
    },
    componentProps: {
      placeholder: '__Some-New-Token__',
      mode: 'multiple',
      options: [
        {
          label: '__Some-New-Token__1',
          value: '1',
        },
        {
          label: '__Some-New-Token__2',
          value: '2',
        },
        {
          label: '__Some-New-Token__3',
          value: '3',
        },
      ],
    },
  },
];
