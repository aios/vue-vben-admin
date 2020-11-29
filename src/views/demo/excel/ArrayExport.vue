<template>
  <div class="m-4">
    <BasicTable title="__Some-New-Token__" :columns="columns" :dataSource="data">
      <template #toolbar>
        <a-button @click="aoaToExcel">__Some-New-Token__</a-button>
      </template>
    </BasicTable>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import { BasicTable } from '/@/components/Table';
  import { aoaToSheetXlsx, ExportExcelModel } from '/@/components/Excel';
  import { arrHeader, arrData, columns, data } from './data';

  export default defineComponent({
    components: { BasicTable, ExportExcelModel },
    setup() {
      function aoaToExcel() {
        // __Some-New-Token__data__Some-New-Token__header__Some-New-Token__
        aoaToSheetXlsx({
          data: arrData,
          header: arrHeader,
          filename: '__Some-New-Token__excel.xlsx',
        });
      }

      return {
        aoaToExcel,
        columns,
        data,
      };
    },
  });
</script>
