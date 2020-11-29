import type { Menu, MenuModule } from '/@/router/types';
import type { RouteRecordNormalized } from 'vue-router';
import { appStore } from '/@/store/modules/app';
import { permissionStore } from '/@/store/modules/permission';
import { transformMenuModule, flatMenus, getAllParentPath } from '/@/utils/helper/menuHelper';
import { filter } from '/@/utils/helper/treeHelper';
import router from '/@/router';
import { PermissionModeEnum } from '/@/enums/appEnum';
import { pathToRegexp } from 'path-to-regexp';

import modules from 'globby!/@/router/menus/modules/**/*.@(ts)';

const menuModules: MenuModule[] = [];

Object.keys(modules).forEach((key) => {
  menuModules.push(modules[key]);
});

// ===========================
// ==========Helper===========
// ===========================

const staticMenus: Menu[] = [];
(() => {
  menuModules.sort((a, b) => {
    return (a.orderNo || 0) - (b.orderNo || 0);
  });
  for (const menu of menuModules) {
    staticMenus.push(transformMenuModule(menu));
  }
})();

const isBackMode = () => {
  return appStore.getProjectConfig.permissionMode === PermissionModeEnum.BACK;
};

async function getAsyncMenus() {
  // __Some-New-Token__ __Some-New-Token__
  if (!isBackMode()) {
    return staticMenus;
  }
  return permissionStore.getBackMenuListState;
}

// __Some-New-Token__
export const getFlatMenus = async () => {
  const menus = await getAsyncMenus();
  return flatMenus(menus);
};

// __Some-New-Token__ __Some-New-Token__
export const getMenus = async () => {
  const menus = await getAsyncMenus();
  const routes = router.getRoutes();
  return !isBackMode() ? filter(menus, basicFilter(routes)) : menus;
};

// __Some-New-Token__
export async function getCurrentParentPath(currentPath: string) {
  const menus = await getAsyncMenus();
  const allParentPath = await getAllParentPath(menus, currentPath);
  return allParentPath[0];
}

// __Some-New-Token__1__Some-New-Token__，__Some-New-Token__children
export async function getShallowMenus() {
  const menus = await getAsyncMenus();
  const routes = router.getRoutes();
  const shallowMenuList = menus.map((item) => ({ ...item, children: undefined }));
  return !isBackMode() ? shallowMenuList.filter(basicFilter(routes)) : shallowMenuList;
}

// __Some-New-Token__children
export async function getChildrenMenus(parentPath: string) {
  const menus = await getAsyncMenus();
  const parent = menus.find((item) => item.path === parentPath);
  if (!parent) return [] as Menu[];
  return parent.children;
}

// __Some-New-Token__children
export async function getFlatChildrenMenus(children: Menu[]) {
  return flatMenus(children);
}

// __Some-New-Token__
function basicFilter(routes: RouteRecordNormalized[]) {
  return (menu: Menu) => {
    const matchRoute = routes.find((route) => {
      if (route.meta) {
        if (route.meta.carryParam) {
          return pathToRegexp(route.path).test(menu.path);
        }
        if (route.meta.ignoreAuth) return false;
      }
      return route.path === menu.path;
    });

    if (!matchRoute) return false;
    menu.icon = menu.icon || matchRoute.meta.icon;
    menu.meta = matchRoute.meta;
    return true;
  };
}
