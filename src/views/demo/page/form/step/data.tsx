import { FormSchema } from '/@/components/Form';

export const step1Schemas: FormSchema[] = [
  {
    field: 'account',
    component: 'Select',
    label: '__Some-New-Token__',
    required: true,
    defaultValue: '1',
    componentProps: {
      options: [
        {
          label: 'anncwb@126.com',
          value: '1',
        },
      ],
    },
  },
  {
    field: 'fac',
    component: 'InputGroup',
    label: '__Some-New-Token__',
    required: true,
    defaultValue: 'test@example.com',
    slot: 'fac',
  },
  {
    field: 'pay',
    component: 'Input',
    label: '',
    defaultValue: 'zfb',
    show: false,
  },
  {
    field: 'payeeName',
    component: 'Input',
    label: '__Some-New-Token__',
    defaultValue: 'Vben',
    required: true,
  },
  {
    field: 'money',
    component: 'Input',
    label: '__Some-New-Token__',
    defaultValue: '500',
    required: true,
    renderComponentContent: () => {
      return {
        prefix: () => '￥',
      };
    },
  },
];

export const step2Schemas: FormSchema[] = [
  {
    field: 'pwd',
    component: 'InputPassword',
    label: '__Some-New-Token__',
    required: true,
    defaultValue: '123456',
  },
];
