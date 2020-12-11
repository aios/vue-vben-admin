<template>
  <div class="m-4">
    <BasicTable title="__Some-New-Token__" :columns="columns" :dataSource="data">
      <template #toolbar>
        <a-button @click="openModal">__Some-New-Token__</a-button>
      </template>
    </BasicTable>
    <ExpExcelModel @register="register" @success="defaultHeader" />
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import { BasicTable } from '/@/components/Table';
  import { jsonToSheetXlsx, ExpExcelModel, ExportModalResult } from '/@/components/Excel';
  import { columns, data } from './data';
  import { useModal } from '/@/components/Modal';

  export default defineComponent({
    components: { BasicTable, ExpExcelModel },
    setup() {
      function defaultHeader({ filename, bookType }: ExportModalResult) {
        // __Some-New-Token__Object.keys(data[0])__Some-New-Token__header
        jsonToSheetXlsx({
          data,
          filename,
          write2excelOpts: {
            bookType,
          },
        });
      }
      const [register, { openModal }] = useModal();

      return {
        defaultHeader,
        columns,
        data,
        register,
        openModal,
      };
    },
  });
</script>
