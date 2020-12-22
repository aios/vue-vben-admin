import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';

const payrolls: AppRouteModule = {
  path: '/payrolls',
  name: 'Payrolls',
  component: LAYOUT,
  redirect: '/payrolls/table',
  meta: {
    icon: 'ant-design:table-outlined',
    title: 'routes.logic.staff.menu.payrolls',
  },

  children: [
    {
      path: 'table',
      name: 'PayrollsTable',
      component: () => import('/@/views/logic/staff/payrolls/Table.vue'),
      meta: {
        title: 'routes.logic.staff.payrolls.table.title',
      },
    },
    {
      path: 'statistic',
      name: 'PayrollsStatistic',
      component: () => import('/@/views/logic/staff/payrolls/Statistic.vue'),
      meta: {
        title: 'routes.logic.staff.payrolls.statistic.title',
      },
    },
  ],
};

export default payrolls;
