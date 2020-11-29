import { FormSchema } from '/@/components/Form/index';

export interface ListItem {
  key: string;
  title: string;
  description: string;
  extra?: string;
  avatar?: string;
  color?: string;
}

// tab__Some-New-Token__list
export const settingList = [
  {
    key: '1',
    name: '__Some-New-Token__',
    component: 'BaseSetting',
  },
  {
    key: '2',
    name: '__Some-New-Token__',
    component: 'SecureSetting',
  },
  {
    key: '3',
    name: '__Some-New-Token__',
    component: 'AccountBind',
  },
  {
    key: '4',
    name: '__Some-New-Token__',
    component: 'MsgNotify',
  },
];

// __Some-New-Token__ form
export const baseSetschemas: FormSchema[] = [
  {
    field: 'email',
    component: 'Input',
    label: '__Some-New-Token__',
    colProps: { span: 18 },
  },
  {
    field: 'name',
    component: 'Input',
    label: '__Some-New-Token__',
    colProps: { span: 18 },
  },
  {
    field: 'introduction',
    component: 'InputTextArea',
    label: '__Some-New-Token__',
    colProps: { span: 18 },
  },
  {
    field: 'phone',
    component: 'Input',
    label: '__Some-New-Token__',
    colProps: { span: 18 },
  },
  {
    field: 'address',
    component: 'Input',
    label: '__Some-New-Token__',
    colProps: { span: 18 },
  },
];

// __Some-New-Token__ list
export const secureSettingList: ListItem[] = [
  {
    key: '1',
    title: '__Some-New-Token__',
    description: '__Some-New-Token__：：__Some-New-Token__',
    extra: '__Some-New-Token__',
  },
  {
    key: '2',
    title: '__Some-New-Token__',
    description: '__Some-New-Token__：：138****8293',
    extra: '__Some-New-Token__',
  },
  {
    key: '3',
    title: '__Some-New-Token__',
    description: '__Some-New-Token__，__Some-New-Token__',
    extra: '__Some-New-Token__',
  },
  {
    key: '4',
    title: '__Some-New-Token__',
    description: '__Some-New-Token__：：ant***sign.com',
    extra: '__Some-New-Token__',
  },
  {
    key: '5',
    title: 'MFA __Some-New-Token__',
    description:
      '__Some-New-Token__ MFA __Some-New-Token__，__Some-New-Token__，__Some-New-Token__',
    extra: '__Some-New-Token__',
  },
];

// __Some-New-Token__ list
export const accountBindList: ListItem[] = [
  {
    key: '1',
    title: '__Some-New-Token__',
    description: '__Some-New-Token__',
    extra: '__Some-New-Token__',
    avatar: 'ant-design:taobao-outlined',
    color: '#ff4000',
  },
  {
    key: '2',
    title: '__Some-New-Token__',
    description: '__Some-New-Token__',
    extra: '__Some-New-Token__',
    avatar: 'ant-design:alipay-outlined',
    color: '#2eabff',
  },
  {
    key: '3',
    title: '__Some-New-Token__',
    description: '__Some-New-Token__',
    extra: '__Some-New-Token__',
    avatar: 'ri:dingding-fill',
    color: '#2eabff',
  },
];

// __Some-New-Token__ list
export const msgNotifyList: ListItem[] = [
  {
    key: '1',
    title: '__Some-New-Token__',
    description: '__Some-New-Token__',
  },
  {
    key: '2',
    title: '__Some-New-Token__',
    description: '__Some-New-Token__',
  },
  {
    key: '3',
    title: '__Some-New-Token__',
    description: '__Some-New-Token__',
  },
];
