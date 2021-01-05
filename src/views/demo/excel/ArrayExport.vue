<template>
  <PageWrapper title="导出示例" content="根据数组格式的数据进行导出">
    <BasicTable title="基础表格" :columns="columns" :dataSource="data">
      <template #toolbar>
        <a-button @click="aoaToExcel">__Some-New-Token__</a-button>
      </template>
    </BasicTable>
  </PageWrapper>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import { BasicTable } from '/@/components/Table';
  import { aoaToSheetXlsx } from '/@/components/Excel';
  import { arrHeader, arrData, columns, data } from './data';
  import { PageWrapper } from '/@/components/Page';

  export default defineComponent({
    components: { BasicTable, PageWrapper },
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
