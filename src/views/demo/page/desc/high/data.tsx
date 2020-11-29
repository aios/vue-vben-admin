import { BasicColumn } from '/@/components/Table/src/types/table';

import { Badge } from 'ant-design-vue';

export const refundTimeTableSchema: BasicColumn[] = [
  {
    title: '__Some-New-Token__',
    width: 150,
    dataIndex: 't1',
  },
  {
    title: '__Some-New-Token__',
    width: 150,
    dataIndex: 't2',
  },
  {
    title: '__Some-New-Token__',
    width: 150,
    dataIndex: 't3',
    customRender: ({ record }) => {
      return <Badge status="success" text={record.t3} />;
    },
  },
  {
    title: '__Some-New-Token__ID	',
    width: 150,
    dataIndex: 't4',
  },
  {
    title: '__Some-New-Token__',
    width: 150,
    dataIndex: 't5',
  },
];

export const refundTimeTableData: any[] = [
  {
    t1: '2017-10-01 14:10',
    t2: '__Some-New-Token__',
    t3: '__Some-New-Token__',
    t4: '__Some-New-Token__ ID1234',
    t5: '5mins',
  },
  {
    t1: '2017-10-01 14:10',
    t2: '__Some-New-Token__',
    t3: '__Some-New-Token__',
    t4: '__Some-New-Token__ ID1234',
    t5: '5mins',
  },
  {
    t1: '2017-10-01 14:10',
    t2: '__Some-New-Token__',
    t3: '__Some-New-Token__',
    t4: '__Some-New-Token__',
    t5: '5mins',
  },
  {
    t1: '2017-10-01 14:10',
    t2: '__Some-New-Token__',
    t3: '__Some-New-Token__',
    t4: '__Some-New-Token__',
    t5: '1h',
  },
];
