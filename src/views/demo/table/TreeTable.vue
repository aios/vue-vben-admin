<template>
  <div class="p-4">
    <BasicTable
      :rowSelection="{ type: 'checkbox' }"
      :isTreeTable="true"
      title="__Some-New-Token__"
      titleHelpMessage="__Some-New-Token__"
      :columns="columns"
      :dataSource="data"
      rowKey="id"
      :indentSize="20"
    />
  </div>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import { BasicTable } from '/@/components/Table';
  import { getBasicColumns, getTreeTableData } from './tableData';

  export default defineComponent({
    components: { BasicTable },
    setup() {
      return {
        columns: getBasicColumns(),
        data: getTreeTableData(),
      };
    },
  });
</script>
