import { resultSuccess } from '../_util';
import { MockMethod } from 'vite-plugin-mock';

const dashboardRoute = {
  path: '/dashboard',
  name: 'Dashboard',
  component: 'PAGE_LAYOUT',
  redirect: '/dashboard/welcome',
  meta: {
    icon: 'ant-design:home-outlined',
    title: 'Dashboard',
  },
  children: [
    {
      path: '/welcome',
      name: 'Welcome',
      component: '/dashboard/welcome/index',
      meta: {
        title: '__Some-New-Token__',
        affix: true,
      },
    },
  ],
};

const frontRoute = {
  path: '/front',
  name: 'PermissionFrontDemo',
  meta: {
    title: '__Some-New-Token__',
  },
  children: [
    {
      path: 'page',
      component: '/demo/permission/front/index',
      meta: {
        title: '__Some-New-Token__',
      },
    },
    {
      path: 'btn',
      component: '/demo/permission/front/Btn',
      meta: {
        title: '__Some-New-Token__',
      },
    },
    {
      path: 'auth-pageA',
      component: '/demo/permission/front/AuthPageA',
      meta: {
        title: '__Some-New-Token__A',
      },
    },
    {
      path: 'auth-pageB',
      component: '/demo/permission/front/AuthPageB',
      meta: {
        title: '__Some-New-Token__B',
      },
    },
  ],
};
const backRoute = {
  path: '/back',
  name: 'PermissionBackDemo',
  meta: {
    title: '__Some-New-Token__',
  },
  children: [
    {
      path: 'page',
      component: '/demo/permission/back/index',
      meta: {
        title: '__Some-New-Token__',
      },
    },
    {
      path: 'btn',
      component: '/demo/permission/back/Btn',
      meta: {
        title: '__Some-New-Token__',
      },
    },
  ],
};
const authRoute = {
  path: '/permission',
  name: 'Permission',
  component: 'PAGE_LAYOUT',
  redirect: '/permission/front/page',
  meta: {
    icon: 'ant-design:home-outlined',
    title: '__Some-New-Token__',
  },
  children: [frontRoute, backRoute],
};

const authRoute1 = {
  path: '/permission',
  name: 'Permission',
  component: 'PAGE_LAYOUT',
  redirect: '/permission/front/page',
  meta: {
    icon: 'ant-design:home-outlined',
    title: '__Some-New-Token__',
  },
  children: [backRoute],
};
export default [
  {
    url: '/api/getMenuListById',
    timeout: 1000,
    method: 'get',
    response: ({ query }) => {
      const { id } = query;
      if (!id || id === '1') {
        return resultSuccess([dashboardRoute, authRoute]);
      }
      if (id === '2') {
        return resultSuccess([dashboardRoute, authRoute1]);
      }
    },
  },
] as MockMethod[];
