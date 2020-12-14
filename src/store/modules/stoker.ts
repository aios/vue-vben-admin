import type {
  StokerSelectItem,
  StokerInput,
} from '/@/api/logic/stoker/model';

import {
  getStokersForSelect,
  deleteStoker, createStoker, updateStoker,
} from '/@/api/logic/stoker/requests';

import store from '/@/store/index';
import { Action, getModule, Module, Mutation, VuexModule } from 'vuex-module-decorators';
import { hotModuleUnregisterModule } from '/@/utils/helper/vuexHelper';

import { ParsedQuery } from 'query-string';

const NAME = 'stoker';
hotModuleUnregisterModule(NAME);

@Module({ namespaced: true, name: NAME, dynamic: true, store })
class Stoker extends VuexModule {
  private listForSelect: StokerSelectItem[] = [];

  get getListForSelect(): StokerSelectItem[] {
    return this.listForSelect;
  }

  @Mutation
  commitSetListForSelectState(list: StokerSelectItem[]): void {
    this.listForSelect = list;
  }

  // use this when create/update/delete location
  @Mutation
  commitResetListForSelectState(): void {
    this.listForSelect = [];
  }

  @Action
  async loadListForSelect(params?: ParsedQuery): Promise<StokerSelectItem[]> {
    if (this.listForSelect.length > 0) {
      return [];
    }

    try {
      const list = await getStokersForSelect(params);

      this.commitSetListForSelectState(list);

      return list;
    } catch (error) {
      return [];
    }
  }

  @Action
  create(input: StokerInput) {
    return createStoker(input)
      .then(res => {
        this.commitResetListForSelectState();

        return res;
      });
  }

  @Action
  update({id, input}: {id: number, input: StokerInput}) {
    return updateStoker(id, input)
      .then(res => {
        this.commitResetListForSelectState();

        return res;
      });
  }

  @Action
  delete(id: number) {
    return deleteStoker(id)
      .then(res => {
        this.commitResetListForSelectState();

        return res;
      });
  }
}

export const stokerStore = getModule<Stoker>(Stoker);
