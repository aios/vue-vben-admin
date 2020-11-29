<template>
  <div class="m-4">
    <BasicTable title="__Some-New-Token__" :columns="columns" :dataSource="data">
      <template #toolbar>
        <a-button @click="defaultHeader">__Some-New-Token__：__Some-New-Token__</a-button>
        <a-button @click="customHeader">__Some-New-Token__：__Some-New-Token__</a-button>
      </template>
    </BasicTable>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import { BasicTable } from '/@/components/Table';
  import { jsonToSheetXlsx, ExportExcelModel } from '/@/components/Excel';
  import { columns, data } from './data';

  export default defineComponent({
    components: { BasicTable, ExportExcelModel },
    setup() {
      function defaultHeader() {
        // __Some-New-Token__Object.keys(data[0])__Some-New-Token__header
        jsonToSheetXlsx({
          data,
          filename: '__Some-New-Token__key__Some-New-Token__.xlsx',
        });
      }
      function customHeader() {
        jsonToSheetXlsx({
          data,
          header: {
            id: 'ID',
            name: '__Some-New-Token__',
            age: '__Some-New-Token__',
            no: '__Some-New-Token__',
            address: '__Some-New-Token__',
            beginTime: '__Some-New-Token__',
            endTime: '__Some-New-Token__',
          },
          filename: '__Some-New-Token__.xlsx',
          json2sheetOpts: {
            // __Some-New-Token__
            header: ['name', 'id'],
          },
        });
      }

      return {
        defaultHeader,
        customHeader,
        columns,
        data,
      };
    },
  });
</script>
