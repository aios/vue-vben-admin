<template>
  <div>
    <Row style="background: #fff;padding: 16px;margin: 16px;">
      <router-link to="/operators/create">
        <a-button type="primary">
          {{t('routes.logic.staff.operators.table.create')}}
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
  import { getColumns, getFormConfig } from '/@/views/logic/staff/operators/tableData';

  import { getOperators } from '/@/api/logic/operator/requests';
  import {operatorStore} from '/@/store/modules/operator';
  import {clientStore} from '/@/store/modules/client';
  import { useI18n } from '/@/hooks/web/useI18n';

  import { Tag, Row } from 'ant-design-vue';
  import {Operator} from "/@/api/logic/operator/model";

  import {Button} from '/@/components/Button';

  import Client from '../common/components/Client.vue';
  import Salary from '../common/components/Salary.vue';
  import UnpaidSalary from '../common/components/UnpaidSalary.vue';

  import {tableSettings, createCommonActions} from '../common/table';
  import {useRouter} from "vue-router";

  export default defineComponent({
    components: {
      CustomTable, TableAction,
      ATag: Tag,
      Row,
      AButton: Button,
      Client, Salary, UnpaidSalary,
    },
    setup() {
      const { t } = useI18n();
      const {push} = useRouter();

      clientStore.loadListForSelect();

      const [registerTable, {reload}] = useTable({
        title: t('routes.logic.staff.operators.table.header'),
        api: getOperators,
        columns: getColumns(),
        formConfig: getFormConfig(),
        filtersStorageKey: 'operatorsFilters',

        ...tableSettings,
      });

      const createActions = (record: Operator): ActionItem[] => {
        return createCommonActions(
          record.id,
          () => push(`/operators/${record.id}`),
          operatorStore.delete,
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
