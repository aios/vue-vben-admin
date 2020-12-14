import type {
  ProductTypeSelectItem,
} from '/@/api/logic/productType/model';

import {
  getProductTypesForSelect,
} from '/@/api/logic/productType/requests';

import store from '/@/store/index';
import { Action, getModule, Module, Mutation, VuexModule } from 'vuex-module-decorators';
import { hotModuleUnregisterModule } from '/@/utils/helper/vuexHelper';

import { ParsedQuery } from 'query-string';

const NAME = 'productType';
hotModuleUnregisterModule(NAME);

@Module({ namespaced: true, name: NAME, dynamic: true, store })
class ProductType extends VuexModule {
  private listForSelect: ProductTypeSelectItem[] = [];

  get getListForSelect(): ProductTypeSelectItem[] {
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
  commitSetListForSelectState(list: ProductTypeSelectItem[]): void {
    this.listForSelect = list;
  }

  @Action
  async loadListForSelect(params?: ParsedQuery): Promise<ProductTypeSelectItem[]> {
    if (this.listForSelect.length > 0) {
      return [];
    }

    try {
      const list = await getProductTypesForSelect(params);

      this.commitSetListForSelectState(list);

      return list;
    } catch (error) {
      return [];
    }
  }
}

export const productTypeStore = getModule<ProductType>(ProductType);
