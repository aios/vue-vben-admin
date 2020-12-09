import type {
  LocationSelectItem,
} from '/@/api/logic/location/model';

import {
  getLocationsForSelect,
} from '/@/api/logic/location/requests';

import store from '/@/store/index';
import { Action, getModule, Module, Mutation, VuexModule } from 'vuex-module-decorators';
import { hotModuleUnregisterModule } from '/@/utils/helper/vuexHelper';

import { ParsedQuery } from 'query-string';

const NAME = 'location';
hotModuleUnregisterModule(NAME);

@Module({ namespaced: true, name: NAME, dynamic: true, store })
class Location extends VuexModule {
  private listForSelect: LocationSelectItem[] = [];

  get getListForSelect(): LocationSelectItem[] {
    return this.listForSelect;
  }

  get getListForSelectFormatted() {
    return this.listForSelect.map(item => {
      return {
        value: item.value,
        label: item.text,
      };
    });
  }

  @Mutation
  commitSetListForSelectState(list: LocationSelectItem[]): void {
    this.listForSelect = list;
  }

  // use this when create/update/delete location
  @Mutation
  commitResetListForSelectState(): void {
    this.listForSelect = [];
  }

  @Action
  async loadListForSelect(params?: ParsedQuery): Promise<LocationSelectItem[]> {
    if (this.listForSelect.length > 0) {
      return [];
    }

    try {
      const list = await getLocationsForSelect(params);

      this.commitSetListForSelectState(list);

      return list;
    } catch (error) {
      return [];
    }
  }
}

export const locationStore = getModule<Location>(Location);
