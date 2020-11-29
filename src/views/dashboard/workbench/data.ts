export const wokbProd = [
  {
    amount: '20',
    type: '__Some-New-Token__',
  },
  {
    amount: '50',
    type: '__Some-New-Token__',
  },
  {
    amount: '80',
    type: '__Some-New-Token__',
  },
  {
    amount: '100',
    type: '__Some-New-Token__',
  },
];

export const todoList = (() => {
  const ret: any[] = [];
  for (let index = 0; index < 3; index++) {
    ret.push({
      id: index,
      sbmter: '__Some-New-Token__',
      sbmtTime: new Date().toLocaleString(),
      title: '__Some-New-Token__',
      memo: '__Some-New-Token__',
    });
  }
  return ret;
})();
export const newList = (() => {
  const ret: any[] = [];
  for (let index = 0; index < 3; index++) {
    ret.push({
      id: index,
      sender: '__Some-New-Token__',
      sendTime: new Date().toLocaleString(),
      title: '__Some-New-Token__',
      memo: '__Some-New-Token__',
      cnteId: `c${index}`,
      cnteStas: 'opened',
      cnteRepo: index,
    });
  }
  return ret;
})();
