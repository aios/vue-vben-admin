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
<span class="iconify" data-icon="jam:codepen-circle" data-inline="false"></span>;
export const teams: ListItem[] = [
  {
    icon: 'ri:alipay-fill',
    title: '科学搬砖组',
    color: '#ff4000',
  },
  {
    icon: 'emojione-monotone:letter-a',
    title: '__Some-New-Token__',
    color: '#7c51b8',
  },
  {
    icon: 'ri:alipay-fill',
    title: '高逼格设计',
    color: '#00adf7',
  },
  {
    icon: 'jam:codepen-circle',
    title: '程序员日常',
    color: '#00adf7',
  },
  {
    icon: 'fa:behance-square',
    title: '科学搬砖组',
    color: '#7c51b8',
  },
  {
    icon: 'jam:codepen-circle',
    title: '程序员日常',
    color: '#ff4000',
  },
];

export const details: ListItem[] = [
  {
    icon: 'ic:outline-contacts',
    title: '交互专家',
  },
  {
    icon: 'grommet-icons:cluster',
    title: '某某某事业群',
  },
  {
    icon: 'bx:bx-home-circle',
    title: '福建省厦门市',
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
  { icon: 'clarity:star-line', text: '156', color: '#018ffb' },
  { icon: 'bx:bxs-like', text: '156', color: '#459ae8' },
  { icon: 'bx:bxs-message-dots', text: '2', color: '#42d27d' },
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
