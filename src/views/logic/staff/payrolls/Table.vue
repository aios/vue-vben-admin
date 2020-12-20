<template>
  <div>
    <CustomTable
      @register="registerTable"
    >
      <template #staff="{ record }">
        <router-link
          tag="a"
          :to="`/${record.staff_type}s/${record.staff_id}`"
        >
          <a-tag>
            {{record.staff.name || record.staff.client.name}}({{record.staff.readable_type}})
          </a-tag>
        </router-link>
      </template>

      <template #amount="{ record }">
        {{record.amount_formatted}} грн
      </template>

      <template #date="{ record }">
        {{
          new Date(record.date).toLocaleString("ru-RU", {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })
        }}
      </template>

    </CustomTable>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import {CustomTable, useTable, TableAction} from '/@/components/Table';
  import { getColumns, getFormConfig } from '/@/views/logic/staff/payrolls/tableData';

  import {getPayrolls} from '/@/api/logic/payroll/requests';
  import { useI18n } from '/@/hooks/web/useI18n';

  import { Tag, Row } from 'ant-design-vue';

  import {Button} from '/@/components/Button';
  import Icon from '/@/components/Icon';
  import {Popover} from 'ant-design-vue';

  import Locations from '../common/components/Locations.vue';

  import {tableSettings} from '../common/table';
  import {staffStore} from "/@/store/modules/staff";

  export default defineComponent({
    components: {
      CustomTable, TableAction,
      ATag: Tag,
      Row,
      AButton: Button,
      APopover: Popover,
      Locations,
      Icon,
    },
    setup() {
      const { t } = useI18n();

      staffStore.loadListForSelect();

      const [registerTable] = useTable({
        title: t('routes.logic.staff.payrolls.table.header'),
        api: getPayrolls,
        columns: getColumns(),
        formConfig: getFormConfig(),
        filtersStorageKey: 'payrollsFilters',
        pageStorageKey: 'payrollsPage',
        sortStorageKey: 'payrollsSort',

        ...tableSettings,
        actionColumn: undefined,
      });

      return {
        registerTable,
        t,
      };
    },
  });
</script>
