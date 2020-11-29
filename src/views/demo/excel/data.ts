import { BasicColumn } from '/@/components/Table';

export const columns: BasicColumn[] = [
  {
    title: 'ID',
    dataIndex: 'id',
    width: 80,
  },
  {
    title: '__Some-New-Token__',
    dataIndex: 'name',
    width: 120,
  },
  {
    title: '__Some-New-Token__',
    dataIndex: 'age',
    width: 80,
  },
  {
    title: '__Some-New-Token__',
    dataIndex: 'no',
    width: 80,
  },
  {
    title: '__Some-New-Token__',
    dataIndex: 'address',
  },
  {
    title: '__Some-New-Token__',
    dataIndex: 'beginTime',
  },
  {
    title: '__Some-New-Token__',
    dataIndex: 'endTime',
  },
];

export const data: any[] = (() => {
  const arr: any[] = [];
  for (let index = 0; index < 40; index++) {
    arr.push({
      id: `${index}`,
      name: `${index} John Brown`,
      age: `${index + 10}`,
      no: `${index}98678`,
      address: 'New York No. 1 Lake ParkNew York No. 1 Lake Park',
      beginTime: new Date().toLocaleString(),
      endTime: new Date().toLocaleString(),
    });
  }
  return arr;
})();

// ["ID", "__Some-New-Token__", "__Some-New-Token__", "__Some-New-Token__", "__Some-New-Token__", "__Some-New-Token__", "__Some-New-Token__"]
export const arrHeader = columns.map((column) => column.title);
// [["ID", "__Some-New-Token__", "__Some-New-Token__", "__Some-New-Token__", "__Some-New-Token__", "__Some-New-Token__", "__Some-New-Token__"],["0", "0 John Brown", "10", "098678"]]
export const arrData = data.map((item) => {
  return Object.keys(item).map((key) => item[key]);
});
