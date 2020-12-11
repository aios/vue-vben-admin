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
        <a-tag>
          <a v-if="record.client">
            {{record.client.username || record.client.name || record.client.telegram_id}}
          </a>
          <span v-else>
          {{t('routes.basic.not_selected')}}
        </span>
        </a-tag>
      </template>

      <template #locations="{ record }">
        <div v-for="location in record.locations" :key="location.id">
          <a-tag>
            <a>
              {{location.name_chain}}
            </a>
          </a-tag>
        </div>

      </template>

      <template #salary="{ record }">
        <template v-if="record.salary">
          {{record.salary.display_value}}
        </template>
      </template>

      <template #unpaid_salary="{ record }">
        {{record.unpaid_salary}} грн
      </template>
    </CustomTable>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import {CustomTable, useTable, TableAction, ActionItem} from '/@/components/Table';
  import { getColumns, getFormConfig } from '/@/views/logic/drivers/tableData';
  import { useRouter } from 'vue-router';

  import { getDrivers } from '/@/api/logic/driver/requests';
  import {driverStore} from '/@/store/modules/driver';
  import {clientStore} from '/@/store/modules/client';
  import {locationStore} from '/@/store/modules/location';
  import { useI18n } from '/@/hooks/web/useI18n';

  import { Tag, Row } from 'ant-design-vue';
  import {Driver} from "/@/api/logic/driver/model";

  import { useMessage } from '/@/hooks/web/useMessage';

  import {Button} from '/@/components/Button';

  export default defineComponent({
    components: { CustomTable, TableAction, ATag: Tag, Row, AButton: Button },
    setup() {
      const { t } = useI18n();
      const {push} = useRouter();

      const {notification} = useMessage();

      clientStore.loadListForSelect();
      locationStore.loadListForSelect();

      const [registerTable, {reload}] = useTable({
        title: t('routes.logic.staff.drivers.table.header'),
        api: getDrivers,
        columns: getColumns(),
        useSearchForm: true,
        formConfig: getFormConfig(),
        showTableSetting: true,
        rowKey: 'id',
        fetchSetting: {
          listField: 'data',
          pageField: 'page',
          sizeField: 'limit',
          totalField: 'total',
        },
        showIndexColumn: false,
        actionColumn: {
          title: t('routes.basic.actions'),
          dataIndex: 'action',
          slots: { customRender: 'action' },
          fixed: 'right',
          width: 100,
        },
      });

      const createActions = (record: Driver): ActionItem[] => {
        return [
          {
            icon: 'ic:outline-edit',
            label: '',
            color: 'warning',
            onClick: () => push(`/drivers/${record.id}`),
          },
          {
            icon: 'ic:outline-delete',
            label: '',
            color: 'error',
            popConfirm: {
              title: t('routes.basic.delete_confirm'),
              confirm: async () => {
                try {
                  await driverStore.delete(record.id);

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
        createActions,
        t,
      };
    },
  });
</script>
