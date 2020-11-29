<template>
  <div class="p-4">
    <BasicTable
      title="__Some-New-Token__"
      titleHelpMessage="__Some-New-Token__"
      :columns="columns"
      :dataSource="data"
      :canResize="canResize"
      :loading="loading"
      :striped="striped"
      :bordered="border"
      :pagination="{ pageSize: 20 }"
    >
      <template #toolbar>
        <a-button type="primary" @click="toggleCanResize">
          {{ !canResize ? '__Some-New-Token__' : '__Some-New-Token__' }}
        </a-button>
        <a-button type="primary" @click="toggleBorder">
          {{ !border ? '__Some-New-Token__' : '__Some-New-Token__' }}
        </a-button>
        <a-button type="primary" @click="toggleLoading"> __Some-New-Token__loading </a-button>
        <a-button type="primary" @click="toggleStriped">
          {{ !striped ? '__Some-New-Token__' : '__Some-New-Token__' }}
        </a-button>
      </template>
    </BasicTable>
  </div>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { BasicTable } from '/@/components/Table';
  import { getBasicColumns, getBasicData } from './tableData';

  export default defineComponent({
    components: { BasicTable },
    setup() {
      const canResize = ref(false);
      const loading = ref(false);
      const striped = ref(true);
      const border = ref(true);
      function toggleCanResize() {
        canResize.value = !canResize.value;
      }
      function toggleStriped() {
        striped.value = !striped.value;
      }
      function toggleLoading() {
        loading.value = true;
        setTimeout(() => {
          loading.value = false;
        }, 3000);
      }
      function toggleBorder() {
        border.value = !border.value;
      }
      return {
        columns: getBasicColumns(),
        data: getBasicData(),
        canResize,
        loading,
        striped,
        border,
        toggleStriped,
        toggleCanResize,
        toggleLoading,
        toggleBorder,
      };
    },
  });
</script>
