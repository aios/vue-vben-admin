import type { MenuModule } from '/@/router/types.d';

const menu: MenuModule = {
  orderNo: 2,
  menu: {
    path: '',
    name: 'routes.logic.staff.menu.title',
    children: [
      {
        path: '/drivers',
        name: 'routes.logic.staff.drivers.table.title',
      },
    ],
  },
};
export default menu;
