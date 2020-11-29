<template>
  <div class="p-4">
    <BasicTable @register="registerTable">
      <template #action="{ record }">
        <TableAction
          :actions="[
            {
              label: '删除',
              icon: 'ant-design:area-chart-outlined',
              onClick: handleDelete.bind(null, record),
            },
          ]"
          :dropDownActions="[
            {
              label: '__Some-New-Token__',
              onClick: handleOpen.bind(null, record),
            },
          ]"
        />
      </template>
    </BasicTable>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import { BasicTable, useTable, BasicColumn, TableAction } from '/@/components/Table';

  import { demoListApi } from '/@/api/demo/table';
  const columns: BasicColumn[] = [
    {
      title: 'ID',
      dataIndex: 'id',
      fixed: 'left',
      width: 280,
    },
    {
      title: '__Some-New-Token__',
      dataIndex: 'name',
      width: 260,
    },
    {
      title: '__Some-New-Token__',
      dataIndex: 'address',
      width: 260,
    },
    {
      title: '__Some-New-Token__',
      dataIndex: 'no',
      width: 300,
    },
    {
      title: '__Some-New-Token__',
      width: 200,
      dataIndex: 'beginTime',
    },
    {
      title: '__Some-New-Token__',
      dataIndex: 'endTime',
      width: 200,
    },
  ];
  export default defineComponent({
    components: { BasicTable, TableAction },
    setup() {
      const [registerTable] = useTable({
        title: 'TableAction__Some-New-Token__',
        api: demoListApi,
        columns: columns,
        rowSelection: { type: 'radio' },
        actionColumn: {
          width: 160,
          title: 'Action',
          dataIndex: 'action',
          slots: { customRender: 'action' },
        },
      });
      function handleDelete(record: any) {
        console.log('__Some-New-Token__', record);
      }
      function handleOpen(record: any) {
        console.log('__Some-New-Token__', record);
      }
      return {
        registerTable,
        handleDelete,
        handleOpen,
      };
    },
  });
</script>
