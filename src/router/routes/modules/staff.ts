import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';

const orders: AppRouteModule = {
  path: '/staff',
  name: 'Staff',
  component: LAYOUT,
  redirect: '/staff/staff_table',
  meta: {
    icon: 'ant-design:table-outlined',
    title: 'routes.logic.staff.table.title_tag',
  },

  children: [
    {
      path: 'staff_groups_table',
      name: 'StaffGroupsTable',
      component: () => import('/@/views/logic/staff/StaffGroupTable.vue'),
      meta: {
        title: 'routes.logic.staff.groups_table.title',
      },
    },
    {
      path: 'staff_withdraw_table',
      name: 'StaffWithdrawTable',
      component: () => import('/@/views/logic/staff/StaffWithdrawTable.vue'),
      meta: {
        title: 'routes.logic.staff.withdraw_table.title',
      },
    },
  ],
};

export default orders;
