import type { AppRouteRecordRaw, Menu } from '/@/router/types';
import store from '/@/store/index';
import { hotModuleUnregisterModule } from '/@/utils/helper/vuexHelper';

import { VuexModule, Mutation, Module, getModule, Action } from 'vuex-module-decorators';

import { PermissionModeEnum } from '/@/enums/appEnum';

import { appStore } from '/@/store/modules/app';
import { userStore } from '/@/store/modules/user';

import { asyncRoutes } from '/@/router/routes';
import { filter } from '/@/utils/helper/treeHelper';
import { toRaw } from 'vue';
import { getMenuListById } from '/@/api/sys/menu';

import { transformObjToRoute } from '/@/router/helper/routeHelper';
import { transformRouteToMenu } from '/@/router/helper/menuHelper';

import { useMessage } from '/@/hooks/web/useMessage';
// import { warn } from '/@/utils/log';
import { useI18n } from '/@/hooks/web/useI18n';

const { createMessage } = useMessage();
const NAME = 'permission';
hotModuleUnregisterModule(NAME);
@Module({ dynamic: true, namespaced: true, store, name: NAME })
class Permission extends VuexModule {
  // Permission code list
  private permCodeListState: string[] = [];

  // Whether the route has been dynamically added
  private isDynamicAddedRouteState = false;

  // To trigger a menu update
  private lastBuildMenuTimeState = 0;

  // Backstage menu list
  private backMenuListState: Menu[] = [];

  get getPermCodeListState() {
    return this.permCodeListState;
  }

  get getBackMenuListState() {
    return this.backMenuListState;
  }

  get getLastBuildMenuTimeState() {
    return this.lastBuildMenuTimeState;
  }

  get getIsDynamicAddedRouteState() {
    return this.isDynamicAddedRouteState;
  }

  @Mutation
  commitPermCodeListState(codeList: string[]): void {
    this.permCodeListState = codeList;
  }

  @Mutation
  commitBackMenuListState(list: Menu[]): void {
    this.backMenuListState = list;
  }

  @Mutation
  commitLastBuildMenuTimeState(): void {
    this.lastBuildMenuTimeState = new Date().getTime();
  }

  @Mutation
  commitDynamicAddedRouteState(added: boolean): void {
    this.isDynamicAddedRouteState = added;
  }

  @Mutation
  commitResetState(): void {
    this.isDynamicAddedRouteState = false;
    this.permCodeListState = [];
    this.backMenuListState = [];
    this.lastBuildMenuTimeState = 0;
  }

  @Action
  async buildRoutesAction(id?: number | string): Promise<AppRouteRecordRaw[]> {
    const { t } = useI18n();
    let routes: AppRouteRecordRaw[] = [];
    const roleList = toRaw(userStore.getRoleListState);

    const { permissionMode } = appStore.getProjectConfig;

    // role permissions
    if (permissionMode === PermissionModeEnum.ROLE) {
      routes = filter(asyncRoutes, (route) => {
        const { meta } = route as AppRouteRecordRaw;
        const { roles } = meta || {};
        if (!roles) return true;
        return roleList.some((role) => roles.includes(role));
      });
      // this.commitRoutesState(routes);
      // Background permissions
      // warn(
      //   `__Some-New-Token__:${PermissionModeEnum.ROLE},__Some-New-Token__src/store/modules/permission.ts__Some-New-Token__,__Some-New-Token__!`
      // );
      //  __Some-New-Token__,__Some-New-Token__
    } else if (permissionMode === PermissionModeEnum.BACK) {
      createMessage.loading({
        content: t('sys.app.menuLoading'),
        duration: 1,
      });
      // __Some-New-Token__
      const paramId = id || userStore.getUserInfoState.userId;
      if (!paramId) {
        throw new Error('paramId is undefined!');
      }
      let routeList: any[] = await getMenuListById({ id: paramId });
      // __Some-New-Token__
      routeList = transformObjToRoute(routeList);
      //  __Some-New-Token__
      const backMenuList = transformRouteToMenu(routeList);

      this.commitBackMenuListState(backMenuList);

      routes = routeList;
    }
    return routes;
  }
}
export const permissionStore = getModule<Permission>(Permission);
