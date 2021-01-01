import type { StaffSelectItem } from '/@/api/logic/staff/model';

import { getStaffForSelect } from '/@/api/logic/staff/requests';

import store from '/@/store/index';
import { Action, getModule, Module, Mutation, VuexModule } from 'vuex-module-decorators';
import { hotModuleUnregisterModule } from '/@/utils/helper/vuexHelper';

import { ParsedQuery } from 'query-string';

const NAME = 'staff';
hotModuleUnregisterModule(NAME);

@Module({ namespaced: true, name: NAME, dynamic: true, store })
class Staff extends VuexModule {
  private listForSelect: StaffSelectItem[] = [];

  get getListForSelect(): StaffSelectItem[] {
    return this.listForSelect;
  }

  get getListForSelectFormatted() {
    return this.listForSelect;
  }

  @Mutation
  commitSetListForSelectState(list: StaffSelectItem[]): void {
    this.listForSelect = list;
  }

  @Action
  async loadListForSelect(params?: ParsedQuery): Promise<StaffSelectItem[]> {
    if (this.listForSelect.length > 0) {
      return [];
    }

    try {
      const list = await getStaffForSelect(params);

      this.commitSetListForSelectState(list);

      return list;
    } catch (error) {
      return [];
    }
  }
}

export const staffStore = getModule<Staff>(Staff);
