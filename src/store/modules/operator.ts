import type {
  OperatorSelectItem,
  OperatorInput,
} from '/@/api/logic/operator/model';

import {
  getOperatorsForSelect,
  deleteOperator, createOperator, updateOperator,
} from '/@/api/logic/operator/requests';

import store from '/@/store/index';
import { Action, getModule, Module, Mutation, VuexModule } from 'vuex-module-decorators';
import { hotModuleUnregisterModule } from '/@/utils/helper/vuexHelper';

import { ParsedQuery } from 'query-string';

const NAME = 'operator';
hotModuleUnregisterModule(NAME);

@Module({ namespaced: true, name: NAME, dynamic: true, store })
class Operator extends VuexModule {
  private listForSelect: OperatorSelectItem[] = [];

  get getListForSelect(): OperatorSelectItem[] {
    return this.listForSelect;
  }

  @Mutation
  commitSetListForSelectState(list: OperatorSelectItem[]): void {
    this.listForSelect = list;
  }

  // use this when create/update/delete location
  @Mutation
  commitResetListForSelectState(): void {
    this.listForSelect = [];
  }

  @Action
  async loadListForSelect(params?: ParsedQuery): Promise<OperatorSelectItem[]> {
    if (this.listForSelect.length > 0) {
      return [];
    }

    try {
      const list = await getOperatorsForSelect(params);

      this.commitSetListForSelectState(list);

      return list;
    } catch (error) {
      return [];
    }
  }

  @Action
  create(input: OperatorInput) {
    return createOperator(input)
      .then(res => {
        this.commitResetListForSelectState();

        return res;
      });
  }

  @Action
  update({id, input}: {id: number, input: OperatorInput}) {
    return updateOperator(id, input)
      .then(res => {
        this.commitResetListForSelectState();

        return res;
      });
  }

  @Action
  delete(id: number) {
    return deleteOperator(id)
      .then(res => {
        this.commitResetListForSelectState();

        return res;
      });
  }
}

export const operatorStore = getModule<Operator>(Operator);
