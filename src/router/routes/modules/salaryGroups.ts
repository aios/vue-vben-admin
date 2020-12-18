import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';

const salaryGroups: AppRouteModule = {
  path: '/salaryGroups',
  name: 'SalaryGroups',
  component: LAYOUT,
  redirect: '/salaryGroups/table',
  meta: {
    icon: 'ant-design:table-outlined',
    title: 'routes.logic.staff.menu.salaryGroups',
  },

  children: [
    {
      path: 'table',
      name: 'SalaryGroupsTable',
      component: () => import('/@/views/logic/staff/salaryGroups/Table.vue'),
      meta: {
        title: 'routes.logic.staff.salaryGroups.table.title',
      },
    },
    {
      path: 'create',
      name: 'SalaryGroupCreate',
      component: () => import('/@/views/logic/staff/salaryGroups/Create.vue'),
      meta: {
        title: 'routes.logic.staff.salaryGroups.create.title',
      },
    },
    {
      path: ':id',
      name: 'SalaryGroupUpdate',
      component: () => import('/@/views/logic/staff/salaryGroups/Update.vue'),
      meta: {
        title: 'routes.logic.staff.salaryGroups.update.title',
        hideBreadcrumb: true,
      },
    },
  ],
};

export default salaryGroups;
