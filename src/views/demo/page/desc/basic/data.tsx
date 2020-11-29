import { DescItem } from '/@/components/Description/index';
import { BasicColumn } from '/@/components/Table/src/types/table';
import { Button } from '/@/components/Button';

import { Badge } from 'ant-design-vue';

export const refundData = {
  a1: '1000000000',
  a2: '__Some-New-Token__',
  a3: '1234123421',
  a4: '3214321432',
};

export const personData = {
  b1: '__Some-New-Token__',
  b2: '18100000000',
  b3: '__Some-New-Token__',
  b4: '__Some-New-Token__18__Some-New-Token__',
  b5: '__Some-New-Token__',
};
export const refundSchema: DescItem[] = [
  {
    field: 'a1',
    label: '__Some-New-Token__',
  },
  {
    field: 'a2',
    label: '__Some-New-Token__',
  },
  {
    field: 'a3',
    label: '__Some-New-Token__',
  },
  {
    field: 'a4',
    label: '__Some-New-Token__',
  },
];
export const personSchema: DescItem[] = [
  {
    field: 'b1',
    label: '__Some-New-Token__',
  },
  {
    field: 'b2',
    label: '__Some-New-Token__',
  },
  {
    field: 'b3',
    label: '__Some-New-Token__',
  },
  {
    field: 'b4',
    label: '__Some-New-Token__',
  },
  {
    field: 'b5',
    label: '__Some-New-Token__',
  },
];

export const refundTableSchema: BasicColumn[] = [
  {
    title: '__Some-New-Token__',
    width: 150,
    dataIndex: 't1',
    customRender: ({ record }) => {
      return (
        <Button type="link" size="small">
          {() => record.t1}
        </Button>
      );
    },
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
  },
  {
    title: '__Some-New-Token__	',
    width: 150,
    dataIndex: 't4',
  },
  {
    title: '__Some-New-Token__（__Some-New-Token__）	',
    width: 150,
    dataIndex: 't5',
  },
  {
    title: '__Some-New-Token__',
    width: 150,
    dataIndex: 't6',
  },
];
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

export const refundTableData: any[] = [
  {
    t1: 1234561,
    t2: '__Some-New-Token__ 550ml',
    t3: '12421432143214321',
    t4: '2.00',
    t5: 1,
    t6: 2.0,
  },
  {
    t1: 1234562,
    t2: '__Some-New-Token__ 550ml',
    t3: '12421432143214321',
    t4: '2.00',
    t5: 2,
    t6: 2.0,
  },
  {
    t1: 1234562,
    t2: '__Some-New-Token__ 550ml',
    t3: '12421432143214321',
    t4: '2.00',
    t5: 2,
    t6: 2.0,
  },
  {
    t1: 1234562,
    t2: '__Some-New-Token__ 550ml',
    t3: '12421432143214321',
    t4: '2.00',
    t5: 2,
    t6: 2.0,
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
