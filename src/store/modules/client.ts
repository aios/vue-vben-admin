import type {
  ClientSelectItem,
} from '/@/api/logic/client/model';

import {
  getClientsForSelect,
} from '/@/api/logic/client/requests';

import store from '/@/store/index';
import { Action, getModule, Module, Mutation, VuexModule } from 'vuex-module-decorators';
import { hotModuleUnregisterModule } from '/@/utils/helper/vuexHelper';

import { ParsedQuery } from 'query-string';

const NAME = 'client';
hotModuleUnregisterModule(NAME);

@Module({ namespaced: true, name: NAME, dynamic: true, store })
class Client extends VuexModule {
  private listForSelect: ClientSelectItem[] = [];

  get getListForSelect(): ClientSelectItem[] {
    return this.listForSelect;
  }

  get getListForSelectFormatted() {
    return this.listForSelect.map(item => {
      return {
        value: item.id,
        label: item.label,
      };
    });
  }

  @Mutation
  commitSetListForSelectState(list: ClientSelectItem[]): void {
    this.listForSelect = list;
  }

  @Action
  async loadListForSelect(params?: ParsedQuery): Promise<ClientSelectItem[]> {
    if (this.listForSelect.length > 0) {
      return [];
    }

    try {
      const list = await getClientsForSelect(params);

      this.commitSetListForSelectState(list);

      return list;
    } catch (error) {
      return [];
    }
  }
}

export const clientStore = getModule<Client>(Client);
