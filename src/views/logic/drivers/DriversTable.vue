<template>
  <BasicTable
    @register="registerTable"
    :actionColumn="actionsColumn"
  >
    <template #action="{ record, column }">
      <TableAction :actions="createActions(record)"/>
    </template>

    <template #client="{ record }">
      <a-tag>
        <a v-if="record.client">
          {{record.client.username || record.client.name || record.client.telegram_id}}
        </a>
        <span v-else>
          {{t('routes.basic.not_selected')}}
        </span>
      </a-tag>
    </template>

    <template #salary="{ record }">
      <template v-if="record.salary">
        {{record.salary.display_value}}
      </template>
    </template>

    <template #unpaid_salary="{ record }">
      {{record.unpaid_salary}} грн
    </template>
  </BasicTable>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import {BasicTable, useTable, TableAction, ActionItem} from '/@/components/Table';
  import { getColumns, getFilters } from '/@/views/logic/drivers/tableData';

  import { getDrivers, deleteDriver } from '/@/api/logic/driver/requests';
  import { useI18n } from '/@/hooks/web/useI18n';

  import { Tag } from 'ant-design-vue';
  import {DriverTableItem} from "/@/api/logic/driver/model";

  import { useMessage } from '/@/hooks/web/useMessage';

  export default defineComponent({
    components: { BasicTable, TableAction, ATag: Tag },
    setup() {
      const { t } = useI18n();

      const {notification} = useMessage();

      const [registerTable, {reload}] = useTable({
        title: t('routes.logic.staff.drivers.table.header'),
        api: getDrivers,
        columns: getColumns(),
        useSearchForm: true,
        formConfig: getFilters(),
        showTableSetting: true,
        rowKey: 'id',
        fetchSetting: {
          listField: 'data',
          pageField: 'page',
          sizeField: 'limit',
          totalField: 'total',
        },
        showIndexColumn: false,
      });

      const actionsColumn = {
        title: t('routes.basic.actions'),
        dataIndex: 'action',
        slots: { customRender: 'action' },
      };

      const createActions = (record: DriverTableItem): ActionItem[] => {
        return [
          {
            icon: 'ic:outline-edit',
            label: '',
            color: 'warning',
            onClick: () => {},
          },
          {
            icon: 'ic:outline-delete',
            label: '',
            color: 'error',
            popConfirm: {
              title: t('routes.basic.delete_confirm'),
              confirm: async () => {
                try {
                  await deleteDriver(record.id);

                  await reload();
                } catch (e) {
                  if (!e.response.data || !e.response.data.message) {
                    return;
                  }

                  notification.error({
                    message: e.response.data.message,
                  });
                }
              },
            },
          },
        ];
      }

      return {
        registerTable,
        actionsColumn,
        createActions,
        t,
      };
    },
  });
</script>
