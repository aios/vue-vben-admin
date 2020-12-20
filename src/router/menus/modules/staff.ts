import type { MenuModule } from '/@/router/types.d';

const menu: MenuModule = {
  orderNo: 2,
  menu: {
    path: '',
    name: 'routes.logic.staff.menu.title',
    icon: 'fa:users',
    children: [
      {
        path: '/drivers',
        name: 'routes.logic.staff.drivers.table.title',
        icon: 'mdi:run-fast',
      },
      {
        path: '/operators',
        name: 'routes.logic.staff.operators.table.title',
        icon: 'whh:headphonesalt',
      },
      {
        path: '/stokers',
        name: 'routes.logic.staff.stokers.table.title',
        icon: 'grommet-icons:user-manager',
      },
      {
        path: '/salaryGroups',
        name: 'routes.logic.staff.salaryGroups.table.title',
        icon: 'ic:outline-attach-money',
      },
      {
        path: '/payrolls',
        name: 'routes.logic.staff.payrolls.table.title',
        icon: 'gridicons:money',
      },
    ],
  },
};
export default menu;
