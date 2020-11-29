<template>
  <div class="p-4">
    <BasicTable @register="registerTable" />
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
      function handleSummary(tableData: any[]) {
        const totalNo = tableData.reduce((prev, next) => {
          prev += next.no;
          return prev;
        }, 0);
        return [
          {
            _row: '__Some-New-Token__',
            _index: '__Some-New-Token__',
            no: totalNo,
          },
          {
            _row: '__Some-New-Token__',
            _index: '__Some-New-Token__',
            no: totalNo,
          },
        ];
      }
      const [registerTable] = useTable({
        title: '__Some-New-Token__',
        api: demoListApi,
        rowSelection: { type: 'checkbox' },
        columns: getBasicColumns(),
        showSummary: true,
        summaryFunc: handleSummary,
        scroll: { x: 2000 },
        canResize: false,
      });

      return {
        registerTable,
      };
    },
  });
</script>
