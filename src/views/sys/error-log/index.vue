<template>
  <div class="p-4">
    <template v-for="src in imgListRef" :key="src">
      <img v-show="false" :src="src" />
    </template>
    <DetailModal :info="rowInfoRef" @register="registerModal" />
    <BasicTable class="error-handle-table" @register="register">
      <template #toolbar>
        <a-button type="primary" @click="fireVueError">
          {{ t('sys.errorLog.fireVueError') }}
        </a-button>
        <a-button type="primary" @click="fireResourceError">
          {{ t('sys.errorLog.fireResourceError') }}
        </a-button>
        <a-button type="primary" @click="fireAjaxError">
          {{ t('sys.errorLog.fireAjaxError') }}
        </a-button>
      </template>
      <template #action="{ record }">
        <TableAction
          :actions="[
            { label: t('sys.errorLog.tableActionDesc'), onClick: handleDetail.bind(null, record) },
          ]"
        />
      </template>
    </BasicTable>
  </div>
</template>

<script lang="ts">
  import { defineComponent, watch, ref, nextTick } from 'vue';

  import DetailModal from './DetailModal.vue';
  import { BasicTable, useTable, TableAction } from '/@/components/Table/index';

  import { useModal } from '/@/components/Modal';
  import { useMessage } from '/@/hooks/web/useMessage';
  import { useI18n } from '/@/hooks/web/useI18n';

  import { errorStore, ErrorInfo } from '/@/store/modules/error';

  import { fireErrorApi } from '/@/api/demo/error';

  import { getColumns } from './data';

  import { cloneDeep } from 'lodash-es';
  import { isDevMode } from '/@/utils/env';

  export default defineComponent({
    name: 'ErrorHandler',
    components: { DetailModal, BasicTable, TableAction },
    setup() {
      const rowInfoRef = ref<ErrorInfo>();
      const imgListRef = ref<string[]>([]);

      const { t } = useI18n();

      const [register, { setTableData }] = useTable({
        title: t('sys.errorLog.tableTitle'),
        columns: getColumns(),
        actionColumn: {
          width: 80,
          title: 'Action',
          dataIndex: 'action',
          slots: { customRender: 'action' },
        },
      });
      const [registerModal, { openModal }] = useModal();

      watch(
        () => errorStore.getErrorInfoState,
        (list) => {
          nextTick(() => {
            setTableData(cloneDeep(list));
          });
        },
        {
          immediate: true,
        }
      );
      const { createMessage } = useMessage();
      if (isDevMode()) {
        createMessage.info(t('sys.errorLog.enableMessage'));
      }
      // __Some-New-Token__
      function handleDetail(row: ErrorInfo) {
        rowInfoRef.value = row;
        openModal(true);
      }

      function fireVueError() {
        throw new Error('fire vue error!');
      }

      function fireResourceError() {
        imgListRef.value.push(`${new Date().getTime()}.png`);
      }

      async function fireAjaxError() {
        await fireErrorApi();
      }

      return {
        register,
        registerModal,
        handleDetail,
        fireVueError,
        fireResourceError,
        fireAjaxError,
        imgListRef,
        rowInfoRef,
        t,
      };
    },
  });
</script>
