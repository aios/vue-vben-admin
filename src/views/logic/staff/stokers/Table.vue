<template>
  <div>
    <Row style="background: #fff;padding: 16px;margin: 16px;">
      <router-link to="/stokers/create">
        <a-button type="primary">
          {{t('routes.logic.staff.stokers.table.create')}}
        </a-button>
      </router-link>
    </Row>

    <CustomTable
      @register="registerTable"
    >
      <template #action="{ record, column }">
        <TableAction :actions="createActions(record)"/>
      </template>

      <template #client="{ record }">
        <Client :client="record.client"/>
      </template>

      <template #bot="{ record }">
        <Bot :bot="record.source"/>
      </template>

      <template #locations="{ record }">
        <Locations :locations="record.locations"/>
      </template>

      <template #productTypes="{ record }">
        <ProductTypes :productTypes="record.product_types"/>
      </template>

      <template #salary="{ record }">
        <Salary :salary="record.salary"/>
      </template>

      <template #unpaid_salary="{ record }">
        <UnpaidSalary :unpaidSalary="record.unpaid_salary"/>
      </template>
    </CustomTable>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import {CustomTable, useTable, TableAction, ActionItem} from '/@/components/Table';
  import { getColumns, getFormConfig } from '/@/views/logic/staff/stokers/tableData';
  import { useRouter } from 'vue-router';

  import { getStokers } from '/@/api/logic/stoker/requests';
  import {stokerStore} from '/@/store/modules/stoker';
  import {clientStore} from '/@/store/modules/client';
  import {locationStore} from '/@/store/modules/location';
  import {productTypeStore} from '/@/store/modules/productType';
  import {botStore} from '/@/store/modules/bot';
  import { useI18n } from '/@/hooks/web/useI18n';

  import { Tag, Row } from 'ant-design-vue';
  import {Stoker} from "/@/api/logic/stoker/model";

  import {Button} from '/@/components/Button';
  import Client from '../common/components/Client.vue';
  import Locations from '../common/components/Locations.vue';
  import ProductTypes from '../common/components/ProductTypes.vue';
  import Salary from '../common/components/Salary.vue';
  import UnpaidSalary from '../common/components/UnpaidSalary.vue';
  import Bot from '../common/components/Bot.vue';

  import {tableSettings, createCommonActions} from '../common/table';

  export default defineComponent({
    components: {
      CustomTable, TableAction,
      ATag: Tag,
      Row, AButton:
      Button, Client, Locations, Salary, UnpaidSalary,
      ProductTypes, Bot,
    },
    setup() {
      const { t } = useI18n();
      const {push} = useRouter();

      clientStore.loadListForSelect();
      locationStore.loadListForSelect();
      productTypeStore.loadListForSelect();
      botStore.loadListForSelect();

      const [registerTable, {reload}] = useTable({
        title: t('routes.logic.staff.stokers.table.header'),
        api: getStokers,
        columns: getColumns(),
        formConfig: getFormConfig(),
        filtersStorageKey: 'stokersFilters',

        ...tableSettings,
      });

      const createActions = (record: Stoker): ActionItem[] => {
        return createCommonActions(
          record.id,
          () => push(`/stokers/${record.id}`),
          stokerStore.delete,
          reload
        );
      }

      return {
        registerTable,
        createActions,
        t,
      };
    },
  });
</script>
