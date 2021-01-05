<template>
  <div class="p-4">
    <BasicTable
      :title="t('sys.table.basic.title')"
      :title-help-message="t('sys.table.basic.help_message')"
      :columns="columns"
      :data-source="data"
      :can-resize="canResize"
      :loading="loading"
      :striped="striped"
      :bordered="border"
      showTableSetting
      :pagination="pagination"
    >
      <template #toolbar>
        <a-button type="primary" @click="toggleCanResize">
          {{ !canResize ? t('sys.table.basic.cannotresize') : t('sys.table.basic.canresize') }}
        </a-button>
        <a-button type="primary" @click="toggleBorder">
          {{ !border ? t('sys.table.basic.noborder') : t('sys.table.basic.border') }}
        </a-button>
        <a-button type="primary" @click="toggleLoading">
          {{ t('sys.table.basic.loading') }}
        </a-button>
        <a-button type="primary" @click="toggleStriped">
          {{ !striped ? t('sys.table.basic.nostrip') : t('sys.table.basic.strip') }}
        </a-button>
      </template>
    </BasicTable>
  </div>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { BasicTable } from '/@/components/Table';
  import { getBasicColumns, getBasicData } from './tableData';
  import { PageWrapper } from '/@/components/Page';

  export default defineComponent({
    components: { BasicTable, PageWrapper },
    setup() {
      const { t } = useI18n();
      const canResize = ref(false);
      const loading = ref(false);
      const striped = ref(true);
      const border = ref(true);
      const pagination = ref<any>(false);
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
          pagination.value = { pageSize: 20 };
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
        pagination,
      };
    },
  });
</script>
