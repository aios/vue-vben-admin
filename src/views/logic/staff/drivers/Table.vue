<template>
  <div>
    <Row style="background: #fff;padding: 16px;margin: 16px;">
      <router-link to="/drivers/create">
        <a-button type="primary">
          {{t('routes.logic.staff.drivers.table.create')}}
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

      <template #locations="{ record }">
        <Locations :locations="record.locations"/>
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
  import { getColumns, getFormConfig } from '/@/views/logic/staff/drivers/tableData';
  import { useRouter } from 'vue-router';

  import { getDrivers } from '/@/api/logic/driver/requests';
  import {driverStore} from '/@/store/modules/driver';
  import {clientStore} from '/@/store/modules/client';
  import {locationStore} from '/@/store/modules/location';
  import { useI18n } from '/@/hooks/web/useI18n';

  import { Tag, Row } from 'ant-design-vue';
  import {Driver} from "/@/api/logic/driver/model";

  import {Button} from '/@/components/Button';
  import Client from '../common/components/Client.vue';
  import Locations from '../common/components/Locations.vue';
  import Salary from '../common/components/Salary.vue';
  import UnpaidSalary from '../common/components/UnpaidSalary.vue';

  import {tableSettings, createCommonActions} from '../common/table';

  export default defineComponent({
    components: {
      CustomTable, TableAction,
      ATag: Tag,
      Row, AButton:
      Button, Client, Locations, Salary, UnpaidSalary
    },
    setup() {
      const { t } = useI18n();
      const {push} = useRouter();

      clientStore.loadListForSelect();
      locationStore.loadListForSelect();

      const [registerTable, {reload}] = useTable({
        title: t('routes.logic.staff.drivers.table.header'),
        api: getDrivers,
        columns: getColumns(),
        formConfig: getFormConfig(),
        filtersStorageKey: 'driversFilters',
        pageStorageKey: 'driversPage',
        sortStorageKey: 'driversSort',

        ...tableSettings,
      });

      const createActions = (record: Driver): ActionItem[] => {
        return createCommonActions(
          record.id,
          () => push(`/drivers/${record.id}`),
          driverStore.delete,
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
