import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';

const stokers: AppRouteModule = {
  path: '/stokers',
  name: 'Stokers',
  component: LAYOUT,
  redirect: '/stokers/table',
  meta: {
    title: 'routes.logic.staff.menu.stokers',
  },

  children: [
    {
      path: 'table',
      name: 'StokersTable',
      component: () => import('/@/views/logic/staff/stokers/Table.vue'),
      meta: {
        title: 'routes.logic.staff.stokers.table.title',
      },
    },
    {
      path: 'create',
      name: 'StokerCreate',
      component: () => import('/@/views/logic/staff/stokers/Create.vue'),
      meta: {
        title: 'routes.logic.staff.stokers.create.title',
      },
    },
    {
      path: ':id',
      name: 'StokerUpdate',
      component: () => import('/@/views/logic/staff/stokers/Update.vue'),
      meta: {
        title: 'routes.logic.staff.stokers.update.title',
        hideBreadcrumb: true,
      },
    },
  ],
};

export default stokers;
