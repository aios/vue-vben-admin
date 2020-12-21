<template>
  <div>
    <Row style="background: #fff;padding: 16px;margin: 16px;">
      <router-link to="/staffPayments/create">
        <a-button type="primary">
          {{t('routes.logic.staff.payments.table.create')}}
        </a-button>
      </router-link>
    </Row>

    <CustomTable
      @register="registerTable"
    >
      <template #action="{ record, column }">
        <TableAction :actions="createActions(record)"/>
      </template>

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

      <template #done="{ record }">
        <Icon v-if="record.done"  icon="carbon:checkbox-checked-filled" />
        <Icon v-else icon="carbon:checkbox-indeterminate-filled" />
      </template>

      <template #date="{ record }">
        {{
          new Date(record.updated_at).toLocaleString("ru-RU", {
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
  import {CustomTable, useTable, TableAction, ActionItem} from '/@/components/Table';
  import { getColumns, getFormConfig } from '/@/views/logic/staff/payments/tableData';
  import { useRouter } from 'vue-router';

  import {deleteStaffPayment, getStaffPayments} from '/@/api/logic/staffPayment/requests';
  import { useI18n } from '/@/hooks/web/useI18n';

  import { Tag, Row } from 'ant-design-vue';
  import {StaffPayment} from "/@/api/logic/staffPayment/model";

  import {Button} from '/@/components/Button';
  import Icon from '/@/components/Icon';

  import {tableSettings, createCommonActions} from '../common/table';
  import {staffStore} from "/@/store/modules/staff";

  export default defineComponent({
    components: {
      CustomTable, TableAction,
      ATag: Tag,
      Row,
      AButton: Button,
      Icon,
    },
    setup() {
      const { t } = useI18n();
      const {push} = useRouter();

      staffStore.loadListForSelect();

      const [registerTable, {reload}] = useTable({
        title: t('routes.logic.staff.payments.table.header'),
        api: getStaffPayments,
        columns: getColumns(),
        formConfig: getFormConfig(),
        filtersStorageKey: 'staffPaymentsFilters',
        pageStorageKey: 'staffPaymentsPage',
        sortStorageKey: 'staffPaymentsSort',

        ...tableSettings,
      });

      const createActions = (record: StaffPayment): ActionItem[] => {
        return createCommonActions(
          record.id,
          () => push(`/staffPayments/${record.id}`),
          deleteStaffPayment,
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
