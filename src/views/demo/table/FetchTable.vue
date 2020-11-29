<template>
  <div class="p-4">
    <BasicTable @register="registerTable">
      <template #toolbar>
        <a-button type="primary" @click="handleReloadCurrent"> __Some-New-Token__ </a-button>
        <a-button type="primary" @click="handleReload"> __Some-New-Token__ </a-button>
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
      const [registerTable, { reload }] = useTable({
        title: '__Some-New-Token__',
        api: demoListApi,
        columns: getBasicColumns(),
      });
      function handleReloadCurrent() {
        reload();
        // reload({
        //   searchInfo: 'xxx',
        // });
      }

      function handleReload() {
        reload({
          page: 1,
        });
      }
      return {
        registerTable,
        handleReloadCurrent,
        handleReload,
      };
    },
  });
</script>
