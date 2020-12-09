import type {
  DriverSelectItem,
} from '/@/api/logic/driver/model';

import {
  getDriversForSelect,
  deleteDriver,
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

  get getListForSelect(): DriverSelectItem[] {
    return this.listForSelect;
  }

  @Mutation
  commitSetListForSelectState(list: DriverSelectItem[]): void {
    this.listForSelect = list;
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
  delete(id: number) {
    return deleteDriver(id)
      .then(res => {
        this.commitResetListForSelectState();

        return res;
      });
  }
}

export const driverStore = getModule<Driver>(Driver);
