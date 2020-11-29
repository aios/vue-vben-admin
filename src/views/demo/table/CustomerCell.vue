<template>
  <div class="p-4">
    <BasicTable @register="registerTable">
      <template #id="{ record }"> ID: {{ record.id }} </template>
      <template #no="{ record }"
        ><Tag color="green">{{ record.no }}</Tag>
      </template>
      <template #img>
        <TableImg
          :imgList="['https://picsum.photos/id/66/346/216', 'https://picsum.photos/id/67/346/216']"
        />
      </template>
    </BasicTable>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import { BasicTable, useTable, BasicColumn, TableImg } from '/@/components/Table';
  import { Tag } from 'ant-design-vue';
  import { demoListApi } from '/@/api/demo/table';
  const columns: BasicColumn[] = [
    {
      title: 'ID',
      dataIndex: 'id',
      slots: { customRender: 'id' },
    },
    {
      title: '__Some-New-Token__',
      dataIndex: 'name',
      width: 120,
    },
    {
      title: '__Some-New-Token__',
      dataIndex: 'img',
      width: 120,
      slots: { customRender: 'img' },
    },
    {
      title: '__Some-New-Token__',
      dataIndex: 'address',
    },
    {
      title: '__Some-New-Token__',
      dataIndex: 'no',
      slots: { customRender: 'no' },
    },
    {
      title: '__Some-New-Token__',
      dataIndex: 'beginTime',
    },
    {
      title: '__Some-New-Token__',
      dataIndex: 'endTime',
    },
  ];
  export default defineComponent({
    components: { BasicTable, TableImg, Tag },
    setup() {
      const [registerTable] = useTable({
        title: '__Some-New-Token__',
        api: demoListApi,
        columns: columns,
      });

      return {
        registerTable,
      };
    },
  });
</script>
