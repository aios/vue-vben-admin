<template>
  <div class="p-4">
    <BasicTable @register="registerTable">
      <template #customId>
        <EditTableHeaderIcon title="Id" />
      </template>
      <template #customName>
        <EditTableHeaderIcon title="__Some-New-Token__" />
      </template>
    </BasicTable>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import {
    BasicTable,
    useTable,
    BasicColumn,
    renderEditableCell,
    EditTableHeaderIcon,
  } from '/@/components/Table';

  import { demoListApi } from '/@/api/demo/table';
  const columns: BasicColumn[] = [
    {
      // title: 'ID',
      dataIndex: 'id',
      slots: { title: 'customId' },
      customRender: renderEditableCell({ dataIndex: 'id' }),
    },
    {
      // title: '__Some-New-Token__',
      dataIndex: 'name',
      slots: { title: 'customName' },
      customRender: renderEditableCell({
        dataIndex: 'name',
      }),
    },
    {
      title: '__Some-New-Token__',
      dataIndex: 'address',
      sorter: true,
    },
  ];
  export default defineComponent({
    components: { BasicTable, EditTableHeaderIcon },
    setup() {
      const [registerTable] = useTable({
        title: '__Some-New-Token__',
        api: demoListApi,
        columns: columns,
        showIndexColumn: false,
      });

      return {
        registerTable,
      };
    },
  });
</script>
