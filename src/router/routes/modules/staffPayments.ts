import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';

const staffPayments: AppRouteModule = {
  path: '/staffPayments',
  name: 'StaffPayments',
  component: LAYOUT,
  redirect: '/staffPayments/table',
  meta: {
    icon: 'ant-design:table-outlined',
    title: 'routes.logic.staff.menu.staffPayments',
  },

  children: [
    {
      path: 'table',
      name: 'StaffPaymentsTable',
      component: () => import('/@/views/logic/staff/payments/Table.vue'),
      meta: {
        title: 'routes.logic.staff.payments.table.title',
      },
    },
    {
      path: 'create',
      name: 'StaffPaymentCreate',
      component: () => import('/@/views/logic/staff/payments/Create.vue'),
      meta: {
        title: 'routes.logic.staff.payments.create.title',
      },
    },
    {
      path: ':id',
      name: 'StaffPaymentUpdate',
      component: () => import('/@/views/logic/staff/payments/Update.vue'),
      meta: {
        title: 'routes.logic.staff.payments.update.title',
        hideBreadcrumb: true,
      },
    },
  ],
};

export default staffPayments;
