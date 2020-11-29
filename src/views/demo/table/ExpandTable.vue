<template>
  <div class="p-4">
    <BasicTable @register="registerTable">
      <template #expandedRowRender="{ record }">
        <span>No: {{ record.no }} </span>
      </template>
    </BasicTable>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import { BasicTable, useTable } from '/@/components/Table';
  import { getBasicColumns } from './tableData';

  import { demoListApi } from '/@/api/demo/table';

  export default defineComponent({
    components: { BasicTable },
    setup() {
      const [registerTable] = useTable({
        title: '__Some-New-Token__',
        api: demoListApi,
        titleHelpMessage: '__Some-New-Token__scroll__Some-New-Token__',
        columns: getBasicColumns(),
        rowKey: 'id',
        canResize: false,
      });

      return {
        registerTable,
      };
    },
  });
</script>
