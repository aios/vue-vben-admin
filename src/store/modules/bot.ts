import type {
  BotSelectItem,
} from '/@/api/logic/bot/model';

import {
  getBotsForSelect,
} from '/@/api/logic/bot/requests';

import store from '/@/store/index';
import { Action, getModule, Module, Mutation, VuexModule } from 'vuex-module-decorators';
import { hotModuleUnregisterModule } from '/@/utils/helper/vuexHelper';

import { ParsedQuery } from 'query-string';

const NAME = 'bot';
hotModuleUnregisterModule(NAME);

@Module({ namespaced: true, name: NAME, dynamic: true, store })
class Bot extends VuexModule {
  private listForSelect: BotSelectItem[] = [];

  get getListForSelect(): BotSelectItem[] {
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
  commitSetListForSelectState(list: BotSelectItem[]): void {
    this.listForSelect = list;
  }

  @Action
  async loadListForSelect(params?: ParsedQuery): Promise<BotSelectItem[]> {
    if (this.listForSelect.length > 0) {
      return [];
    }

    try {
      const list = await getBotsForSelect(params);

      this.commitSetListForSelectState(list);

      return list;
    } catch (error) {
      return [];
    }
  }
}

export const botStore = getModule<Bot>(Bot);
