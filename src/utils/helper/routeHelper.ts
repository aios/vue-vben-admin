import type { AppRouteModule, AppRouteRecordRaw, RouteModule } from '/@/router/types';
import type { RouteLocationNormalized, RouteRecordRaw } from 'vue-router';
import { createRouter, /*createWebHashHistory,*/ createWebHistory } from 'vue-router';

import { appStore } from '/@/store/modules/app';
import { tabStore } from '/@/store/modules/tab';
import { toRaw } from 'vue';
import { PAGE_LAYOUT_COMPONENT } from '/@/router/constant';
// import { isDevMode } from '/@/utils/env';
import dynamicImport from './dynamicImport';
import { omit } from 'lodash-es';

let currentTo: RouteLocationNormalized | null = null;

export function getCurrentTo() {
  return currentTo;
}

export function setCurrentTo(to: RouteLocationNormalized) {
  currentTo = to;
}
// __Some-New-Token__
// __Some-New-Token__2__Some-New-Token__。keepAlive__Some-New-Token__
export function genRouteModule(moduleList: AppRouteModule[] | AppRouteRecordRaw[]) {
  const ret: AppRouteRecordRaw[] = [];
  for (const routeMod of moduleList) {
    let routes: RouteRecordRaw[] = [];
    let layout: AppRouteRecordRaw | undefined;
    if (Reflect.has(routeMod, 'routes')) {
      routes = (routeMod as RouteModule).routes as any;
      layout = (routeMod as RouteModule).layout;
    } else if (Reflect.has(routeMod, 'path')) {
      layout = omit(routeMod, 'children') as any;
      routes = (routeMod.children as RouteRecordRaw[]) || ([] as RouteRecordRaw[]);
    }

    const router = createRouter({ routes, history: createWebHistory() });

    const flatList = (toRaw(router.getRoutes()).filter(
      (item) => item.children.length === 0
    ) as unknown) as AppRouteRecordRaw[];
    flatList.forEach((item) => {
      item.path = `${layout ? layout.path : ''}${item.path}`;
    });
    if (layout) {
      layout.children = flatList;
      ret.push(layout);
    } else {
      ret.push(...flatList);
    }
  }
  return ret as RouteRecordRaw[];
}

// __Some-New-Token__
function asyncImportRoute(routes: AppRouteRecordRaw[] | undefined) {
  if (!routes) return;
  routes.forEach((item) => {
    const { component } = item;
    const { children } = item;
    if (component) {
      item.component = dynamicImport(component);
    }

    children && asyncImportRoute(children);
  });
}

function getLayoutComp(comp: string) {
  return comp === 'PAGE_LAYOUT' ? PAGE_LAYOUT_COMPONENT : '';
}

// __Some-New-Token__
export function transformObjToRoute<T = any>(routeList: AppRouteModule[]): T[] {
  routeList.forEach((route) => {
    asyncImportRoute(
      Reflect.has(route, 'routes') ? (route as RouteModule).routes : route.children || []
    );
    if ((route as RouteModule).layout) {
      (route as RouteModule).layout.component = getLayoutComp(
        (route as RouteModule).layout.component
      );
    } else {
      route.component = getLayoutComp(route.component);
      (route as RouteModule).layout = omit(route, 'children') as any;
    }
  });
  return (routeList as unknown) as T[];
}

//
export function getIsOpenTab(toPath: string) {
  const { openKeepAlive, multiTabsSetting: { show } = {} } = appStore.getProjectConfig;

  if (show && openKeepAlive) {
    const tabList = tabStore.getTabsState;
    return tabList.some((tab) => tab.path === toPath);
  }
  return false;
}

export function getParams(data: any = {}) {
  const { params = {} } = data;
  let ret = '';
  Object.keys(params).forEach((key) => {
    const p = params[key];
    ret += `/${p}`;
  });
  return ret;
}
