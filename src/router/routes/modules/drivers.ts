import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';

const drivers: AppRouteModule = {
  path: '/drivers',
  name: 'Drivers',
  component: LAYOUT,
  redirect: '/drivers/table',
  meta: {
    icon: 'ant-design:table-outlined',
    title: 'routes.logic.staff.menu.title',
  },

  children: [
    {
      path: 'table',
      name: 'DriversTable',
      component: () => import('/@/views/logic/drivers/DriversTable.vue'),
      meta: {
        title: 'routes.logic.staff.drivers.table.title',
      },
    },
    {
      path: 'create',
      name: 'DriverCreate',
      component: () => import('/@/views/logic/drivers/DriverCreate.vue'),
      meta: {
        title: 'routes.logic.staff.drivers.create.title',
      },
    },
    {
      path: ':id',
      name: 'DriverUpdate',
      component: () => import('/@/views/logic/drivers/DriverUpdate.vue'),
      meta: {
        title: 'routes.logic.staff.drivers.update.title',
      },
    },
  ],
};

export default drivers;
