import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';

const drivers: AppRouteModule = {
  path: '/drivers',
  name: 'Drivers',
  component: LAYOUT,
  redirect: '/drivers/table',
  meta: {
    icon: 'ant-design:table-outlined',
    title: 'routes.logic.staff.menu.drivers',
  },

  children: [
    {
      path: 'table',
      name: 'DriversTable',
      component: () => import('/@/views/logic/staff/drivers/Table.vue'),
      meta: {
        title: 'routes.logic.staff.drivers.table.title',
      },
    },
    {
      path: 'create',
      name: 'DriverCreate',
      component: () => import('/@/views/logic/staff/drivers/Create.vue'),
      meta: {
        title: 'routes.logic.staff.drivers.create.title',
      },
    },
    {
      path: ':id',
      name: 'DriverUpdate',
      component: () => import('/@/views/logic/staff/drivers/Update.vue'),
      meta: {
        title: 'routes.logic.staff.drivers.update.title',
        hideBreadcrumb: true,
      },
    },
  ],
};

export default drivers;
