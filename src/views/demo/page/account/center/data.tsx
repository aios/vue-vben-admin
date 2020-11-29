export interface ListItem {
  title: string;
  icon: string;
  color?: string;
}

export interface TabItem {
  key: string;
  name: string;
  component: string;
}

export const tags: string[] = [
  '__Some-New-Token__',
  '__Some-New-Token__',
  '__Some-New-Token__',
  '__Some-New-Token__',
  '__Some-New-Token__',
  '__Some-New-Token__',
  'vue3',
];

export const teams: ListItem[] = [
  {
    icon: 'ant-design:alipay-circle-outlined',
    title: '__Some-New-Token__',
    color: '#ff4000',
  },
  {
    icon: 'emojione-monotone:letter-a',
    title: '__Some-New-Token__',
    color: '#7c51b8',
  },
  {
    icon: 'ant-design:alipay-circle-outlined',
    title: '__Some-New-Token__',
    color: '#00adf7',
  },
  {
    icon: 'ant-design:codepen-circle-filled',
    title: '__Some-New-Token__',
    color: '#00adf7',
  },
  {
    icon: 'ant-design:behance-square-filled',
    title: '__Some-New-Token__',
    color: '#7c51b8',
  },
  {
    icon: 'ant-design:dribbble-circle-filled',
    title: '__Some-New-Token__',
    color: '#ff4000',
  },
];

export const details: ListItem[] = [
  {
    icon: 'ant-design:contacts-outlined',
    title: '__Some-New-Token__',
  },
  {
    icon: 'ant-design:cluster-outlined',
    title: '__Some-New-Token__',
  },
  {
    icon: 'ant-design:home-outlined',
    title: '__Some-New-Token__',
  },
];

export const achieveList: TabItem[] = [
  {
    key: '1',
    name: '__Some-New-Token__',
    component: 'Article',
  },
  {
    key: '2',
    name: '__Some-New-Token__',
    component: 'Application',
  },
  {
    key: '3',
    name: '__Some-New-Token__',
    component: 'Project',
  },
];

export const actions: any[] = [
  { icon: 'ant-design:star-outlined', text: '156', color: '#018ffb' },
  { icon: 'ant-design:like-filled', text: '156', color: '#459ae8' },
  { icon: 'ant-design:message-filled', text: '2', color: '#42d27d' },
];

export const articleList = (() => {
  const result: any[] = [];
  for (let i = 0; i < 4; i++) {
    result.push({
      title: 'Vben Admin',
      description: ['Vben', '__Some-New-Token__', 'Typescript'],
      content: '__Some-New-Token__Vue Next, TypeScript, Ant Design__Some-New-Token__。',
      time: '2020-11-14 11:20',
    });
  }
  return result;
})();

export const applicationList = (() => {
  const result: any[] = [];
  for (let i = 0; i < 8; i++) {
    result.push({
      title: 'Vben Admin',
      icon: 'emojione-monotone:letter-a',
      color: '#1890ff',
      active: '100',
      new: '1,799',
      download: 'bx:bx-download',
    });
  }
  return result;
})();

export const projectList = (() => {
  const result: any[] = [];
  for (let i = 0; i < 8; i++) {
    result.push({
      title: 'Vben Admin',
      content: '__Some-New-Token__Vue Next, TypeScript, Ant Design__Some-New-Token__。',
    });
  }
  return result;
})();
