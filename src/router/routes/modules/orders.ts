import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';

const orders: AppRouteModule = {
  path: '/orders',
  name: 'Orders',
  component: LAYOUT,
  redirect: '/orders/orders_table',
  meta: {
    icon: 'ant-design:table-outlined',
    title: 'routes.logic.orders.table.title_tag',
  },

  children: [
    // {
    //   path: 'basic',
    //   name: 'TableBasicDemo',
    //   component: () => import('/@/views/demo/table/Basic.vue'),
    //   meta: {
    //     title: 'routes.demo.table.basic',
    //   },
    // },
    // {
    //   path: 'treeTable',
    //   name: 'TreeTableDemo',
    //   component: () => import('/@/views/demo/table/TreeTable.vue'),
    //   meta: {
    //     title: 'routes.demo.table.treeTable',
    //   },
    // },
    // {
    //   path: 'fetchTable',
    //   name: 'FetchTableDemo',
    //   component: () => import('/@/views/demo/table/FetchTable.vue'),
    //   meta: {
    //     title: 'routes.demo.table.fetchTable',
    //   },
    // },
    // {
    //   path: 'fixedColumn',
    //   name: 'FixedColumnDemo',
    //   component: () => import('/@/views/demo/table/FixedColumn.vue'),
    //   meta: {
    //     title: 'routes.demo.table.fixedColumn',
    //   },
    // },
    // {
    //   path: 'customerCell',
    //   name: 'CustomerCellDemo',
    //   component: () => import('/@/views/demo/table/CustomerCell.vue'),
    //   meta: {
    //     title: 'routes.demo.table.customerCell',
    //   },
    // },
    {
      path: 'orders_table',
      name: 'OrdersTable',
      component: () => import('/@/views/logic/orders/OrdersTable.vue'),
      meta: {
        title: 'routes.logic.orders.table.title',
      },
    },
    // {
    //   path: 'useTable',
    //   name: 'UseTableDemo',
    //   component: () => import('/@/views/demo/table/UseTable.vue'),
    //   meta: {
    //     title: 'routes.demo.table.useTable',
    //   },
    // },
    // {
    //   path: 'refTable',
    //   name: 'RefTableDemo',
    //   component: () => import('/@/views/demo/table/RefTable.vue'),
    //   meta: {
    //     title: 'routes.demo.table.refTable',
    //   },
    // },
    // {
    //   path: 'multipleHeader',
    //   name: 'MultipleHeaderDemo',
    //   component: () => import('/@/views/demo/table/MultipleHeader.vue'),
    //   meta: {
    //     title: 'routes.demo.table.multipleHeader',
    //   },
    // },
    // {
    //   path: 'mergeHeader',
    //   name: 'MergeHeaderDemo',
    //   component: () => import('/@/views/demo/table/MergeHeader.vue'),
    //   meta: {
    //     title: 'routes.demo.table.mergeHeader',
    //   },
    // },
    // {
    //   path: 'expandTable',
    //   name: 'ExpandTableDemo',
    //   component: () => import('/@/views/demo/table/ExpandTable.vue'),
    //   meta: {
    //     title: 'routes.demo.table.expandTable',
    //   },
    // },
    // {
    //   path: 'fixedHeight',
    //   name: 'FixedHeightDemo',
    //   component: () => import('/@/views/demo/table/FixedHeight.vue'),
    //   meta: {
    //     title: 'routes.demo.table.fixedHeight',
    //   },
    // },
    // {
    //   path: 'footerTable',
    //   name: 'FooterTableDemo',
    //   component: () => import('/@/views/demo/table/FooterTable.vue'),
    //   meta: {
    //     title: 'routes.demo.table.footerTable',
    //   },
    // },
    // {
    //   path: 'editCellTable',
    //   name: 'EditCellTableDemo',
    //   component: () => import('/@/views/demo/table/EditCellTable.vue'),
    //   meta: {
    //     title: 'routes.demo.table.editCellTable',
    //   },
    // },
    // {
    //   path: 'editRowTable',
    //   name: 'EditRowTableDemo',
    //   component: () => import('/@/views/demo/table/EditRowTable.vue'),
    //   meta: {
    //     title: 'routes.demo.table.editRowTable',
    //   },
    // },
  ],
};

export default orders;
