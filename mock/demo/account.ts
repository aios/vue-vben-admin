import { MockMethod } from 'vite-plugin-mock';
import { resultSuccess } from '../_util';

const userInfo = {
  name: 'Vben',
  userid: '00000001',
  email: 'test@gmail.com',
  signature: '__Some-New-Token__，__Some-New-Token__',
  introduction: '__Some-New-Token__，__Some-New-Token__，__Some-New-Token__',
  title: '__Some-New-Token__',
  group: '__Some-New-Token__－__Some-New-Token__－__Some-New-Token__－UED',
  tags: [
    {
      key: '0',
      label: '__Some-New-Token__',
    },
    {
      key: '1',
      label: '__Some-New-Token__',
    },
    {
      key: '2',
      label: '__Some-New-Token__~',
    },
    {
      key: '3',
      label: '__Some-New-Token__',
    },
    {
      key: '4',
      label: '__Some-New-Token__',
    },
    {
      key: '5',
      label: '__Some-New-Token__',
    },
  ],
  notifyCount: 12,
  unreadCount: 11,
  country: 'China',
  address: 'Xiamen City 77',
  phone: '0592-268888888',
};

export default [
  {
    url: '/api/account/getAccountInfo',
    timeout: 1000,
    method: 'get',
    response: () => {
      return resultSuccess(userInfo);
    },
  },
] as MockMethod[];
