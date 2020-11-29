export interface ListItem {
  id: string;
  avatar: string;
  title: string;
  datetime: string;
  type: string;
  read?: boolean;
  description: string;
  clickClose?: boolean;
  extra?: string;
  color?: string;
}

export interface TabItem {
  key: string;
  name: string;
  list: ListItem[];
  unreadlist?: ListItem[];
}

export const tabListData: TabItem[] = [
  {
    key: '1',
    name: '__Some-New-Token__',
    list: [
      {
        id: '000000001',
        avatar: 'https://gw.alipayobjects.com/zos/rmsportal/ThXAXghbEsBCCSDihZxY.png',
        title: '__Some-New-Token__ 14 __Some-New-Token__',
        description: '',
        datetime: '2017-08-09',
        type: '1',
      },
      {
        id: '000000002',
        avatar: 'https://gw.alipayobjects.com/zos/rmsportal/OKJXDXrmkNshAMvwtvhu.png',
        title: '__Some-New-Token__ __Some-New-Token__ __Some-New-Token__',
        description: '',
        datetime: '2017-08-08',
        type: '1',
      },
      {
        id: '000000003',
        avatar: 'https://gw.alipayobjects.com/zos/rmsportal/kISTdvpyTAhtGxpovNWd.png',
        title: '__Some-New-Token__',
        description: '',
        datetime: '2017-08-07',
        // read: true,
        type: '1',
      },
      {
        id: '000000004',
        avatar: 'https://gw.alipayobjects.com/zos/rmsportal/GvqBnKhFgObvnSGkDsje.png',
        title: '__Some-New-Token__',
        description: '',
        datetime: '2017-08-07',
        type: '1',
      },
    ],
  },
  {
    key: '2',
    name: '__Some-New-Token__',
    list: [
      {
        id: '000000006',
        avatar: 'https://gw.alipayobjects.com/zos/rmsportal/fcHMVNCjPOsbUGdEduuv.jpeg',
        title: '__Some-New-Token__ __Some-New-Token__',
        description: '__Some-New-Token__',
        datetime: '2017-08-07',
        type: '2',
        clickClose: true,
      },
      {
        id: '000000007',
        avatar: 'https://gw.alipayobjects.com/zos/rmsportal/fcHMVNCjPOsbUGdEduuv.jpeg',
        title: '__Some-New-Token__ __Some-New-Token__',
        description: '__Some-New-Token__',
        datetime: '2017-08-07',
        type: '2',
        clickClose: true,
      },
      {
        id: '000000008',
        avatar: 'https://gw.alipayobjects.com/zos/rmsportal/fcHMVNCjPOsbUGdEduuv.jpeg',
        title: '__Some-New-Token__',
        description: '__Some-New-Token__',
        datetime: '2017-08-07',
        type: '2',
        clickClose: true,
      },
    ],
  },
  {
    key: '3',
    name: '__Some-New-Token__',
    list: [
      {
        id: '000000009',
        avatar: '',
        title: '__Some-New-Token__',
        description: '__Some-New-Token__ 2017-01-12 20:00 __Some-New-Token__',
        datetime: '',
        extra: '__Some-New-Token__',
        color: '',
        type: '3',
      },
      {
        id: '000000010',
        avatar: '',
        title: '__Some-New-Token__',
        description: '__Some-New-Token__ __Some-New-Token__ 2017-01-07 __Some-New-Token__',
        datetime: '',
        extra: '__Some-New-Token__',
        color: 'red',
        type: '3',
      },
      {
        id: '000000011',
        avatar: '',
        title: '__Some-New-Token__',
        description: '__Some-New-Token__ 2017-01-09 __Some-New-Token__',
        datetime: '',
        extra: '__Some-New-Token__ 8 __Some-New-Token__',
        color: 'gold',
        type: '3',
      },
      {
        id: '000000012',
        avatar: '',
        title: 'ABCD __Some-New-Token__',
        description: '__Some-New-Token__ 2017-01-09 __Some-New-Token__',
        datetime: '',
        extra: '__Some-New-Token__',
        color: 'blue',
        type: '3',
      },
    ],
  },
];
