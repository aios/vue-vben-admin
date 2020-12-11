import type {
  DriverSelectItem,
  DriverPermissionSelectItem,
  DriverInput,
} from '/@/api/logic/driver/model';

import {
  getDriversForSelect,
  getDriverPermissionsForSelect,
  deleteDriver, createDriver, updateDriver,
} from '/@/api/logic/driver/requests';

import store from '/@/store/index';
import { Action, getModule, Module, Mutation, VuexModule } from 'vuex-module-decorators';
import { hotModuleUnregisterModule } from '/@/utils/helper/vuexHelper';

import { ParsedQuery } from 'query-string';

const NAME = 'driver';
hotModuleUnregisterModule(NAME);

@Module({ namespaced: true, name: NAME, dynamic: true, store })
class Driver extends VuexModule {
  private listForSelect: DriverSelectItem[] = [];
  private permissionsList: DriverPermissionSelectItem[] = [];

  get getListForSelect(): DriverSelectItem[] {
    return this.listForSelect;
  }

  get getPermissionsListForSelect() {
    return this.permissionsList.map(permission => ({
      label: permission.text,
      value: permission.value,
    }));
  }

  @Mutation
  commitSetListForSelectState(list: DriverSelectItem[]): void {
    this.listForSelect = list;
  }

  @Mutation
  commitSetPermissionsListForSelectState(list: DriverPermissionSelectItem[]): void {
    this.permissionsList = list;
  }

  // use this when create/update/delete location
  @Mutation
  commitResetListForSelectState(): void {
    this.listForSelect = [];
  }

  @Action
  async loadListForSelect(params?: ParsedQuery): Promise<DriverSelectItem[]> {
    if (this.listForSelect.length > 0) {
      return [];
    }

    try {
      const list = await getDriversForSelect(params);

      this.commitSetListForSelectState(list);

      return list;
    } catch (error) {
      return [];
    }
  }

  @Action
  async loadPermissionsListForSelect(params?: ParsedQuery): Promise<DriverPermissionSelectItem[]> {
    if (this.listForSelect.length > 0) {
      return [];
    }

    try {
      const list = await getDriverPermissionsForSelect(params);

      this.commitSetPermissionsListForSelectState(list);

      return list;
    } catch (error) {
      return [];
    }
  }

  @Action
  create(input: DriverInput) {
    return createDriver(input)
      .then(res => {
        this.commitResetListForSelectState();

        return res;
      });
  }

  @Action
  update({id, input}: {id: number, input: DriverInput}) {
    return updateDriver(id, input)
      .then(res => {
        this.commitResetListForSelectState();

        return res;
      });
  }

  @Action
  delete(id: number) {
    return deleteDriver(id)
      .then(res => {
        this.commitResetListForSelectState();

        return res;
      });
  }
}

export const driverStore = getModule<Driver>(Driver);
