<template>
  <BasicTable @register="registerTable" />
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import { BasicTable, useTable } from '/@/components/Table';
  import { getBasicColumns, getFormConfig } from '/@/views/logic/orders/tableData';

  import { demoListApi } from '/@/api/demo/table';
  import { useI18n } from '/@/hooks/web/useI18n';

  export default defineComponent({
    components: { BasicTable },
    setup() {
      const { t } = useI18n();
      const [registerTable] = useTable({
        title: t('routes.logic.orders.table.title'),
        api: demoListApi,
        columns: getBasicColumns(),
        useSearchForm: true,
        formConfig: getFormConfig(),
        showTableSetting: true,
      });

      return {
        registerTable,
      };
    },
  });
</script>
