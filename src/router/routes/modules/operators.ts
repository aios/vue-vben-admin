import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';

const operators: AppRouteModule = {
  path: '/operators',
  name: 'Operators',
  component: LAYOUT,
  redirect: '/operators/table',
  meta: {
    icon: 'ant-design:table-outlined',
    title: 'routes.logic.staff.menu.operators',
  },

  children: [
    {
      path: 'table',
      name: 'OperatorsTable',
      component: () => import('/@/views/logic/staff/operators/Table.vue'),
      meta: {
        title: 'routes.logic.staff.operators.table.title',
      },
    },
    {
      path: 'create',
      name: 'OperatorCreate',
      component: () => import('/@/views/logic/staff/operators/Create.vue'),
      meta: {
        title: 'routes.logic.staff.operators.create.title',
      },
    },
    {
      path: ':id',
      name: 'OperatorUpdate',
      component: () => import('/@/views/logic/staff/operators/Update.vue'),
      meta: {
        title: 'routes.logic.staff.operators.update.title',
        hideBreadcrumb: true,
      },
    },
  ],
};

export default operators;
