import { GrowCardItem, TaskItem } from './types';
import iconSvg1 from '/@/assets/svg/dashboard/analysis-icon1.svg';
import iconSvg2 from '/@/assets/svg/dashboard/analysis-icon2.svg';
import iconSvg3 from '/@/assets/svg/dashboard/analysis-icon3.svg';
import iconSvg4 from '/@/assets/svg/dashboard/analysis-icon4.svg';
export const taskList: TaskItem[] = [
  {
    percent: 50,
    title: '__Some-New-Token__',
    updateTime: '2020.7.12',
    desc: '__Some-New-Token__',
    status: 'active',
  },
  {
    percent: 67,
    title: '__Some-New-Token__',
    updateTime: '2020.3.12',
    desc: '__Some-New-Token__',
    status: 'exception',
  },
  {
    percent: 100,
    title: '__Some-New-Token__',
    updateTime: '2020.4.12',
    desc: '__Some-New-Token__',

    status: 'success',
  },
];
export const growCardList: GrowCardItem[] = [
  {
    title: '__Some-New-Token__',
    icon: iconSvg1,
    price: 80000,
    up: true,
    mom: '__Some-New-Token__',
    percent: 2.5,
  },
  {
    title: '__Some-New-Token__',
    icon: iconSvg2,
    price: 4000,
    up: true,
    mom: '__Some-New-Token__',
    percent: 3,
  },
  {
    title: '__Some-New-Token__',
    icon: iconSvg3,
    price: 3000000,
    up: false,
    mom: '__Some-New-Token__',
    percent: 2,
  },
  {
    title: '__Some-New-Token__',
    icon: iconSvg4,
    price: 10000,
    up: false,
    mom: '__Some-New-Token__',
    percent: 1,
  },
];
export const randomizeArray = function (arg: any) {
  const array = arg.slice();
  let currentIndex = array.length,
    temporaryValue,
    randomIndex;

  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
};

export const sparklineData = [
  47,
  45,
  54,
  38,
  56,
  24,
  65,
  31,
  37,
  39,
  62,
  51,
  35,
  41,
  35,
  27,
  93,
  53,
  61,
  27,
  54,
  43,
  19,
  46,
];
