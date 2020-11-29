<template>
  <div class="p-4">
    <div class="mb-4">
      <a-button class="mr-2" @click="reloadTable">__Some-New-Token__</a-button>
      <a-button class="mr-2" @click="changeLoading">__Some-New-Token__loading</a-button>
      <a-button class="mr-2" @click="changeColumns">__Some-New-Token__Columns</a-button>
      <a-button class="mr-2" @click="getColumn">__Some-New-Token__Columns</a-button>
      <a-button class="mr-2" @click="getTableData">__Some-New-Token__</a-button>
      <a-button class="mr-2" @click="setPaginationInfo"
        >__Some-New-Token__2__Some-New-Token__</a-button
      >
    </div>
    <div class="mb-4">
      <a-button class="mr-2" @click="getSelectRowList">__Some-New-Token__</a-button>
      <a-button class="mr-2" @click="getSelectRowKeyList">__Some-New-Token__Key</a-button>
      <a-button class="mr-2" @click="setSelectedRowKeyList">__Some-New-Token__</a-button>
      <a-button class="mr-2" @click="clearSelect">__Some-New-Token__</a-button>
      <a-button class="mr-2" @click="getPagination">__Some-New-Token__</a-button>
    </div>
    <BasicTable
      :canResize="false"
      title="RefTable__Some-New-Token__"
      titleHelpMessage="__Some-New-Token__Ref__Some-New-Token__"
      ref="tableRef"
      :api="api"
      :columns="columns"
      rowKey="id"
      :rowSelection="{ type: 'checkbox' }"
    />
  </div>
</template>
<script lang="ts">
  import { defineComponent, ref, unref } from 'vue';
  import { BasicTable, TableActionType } from '/@/components/Table';
  import { getBasicColumns, getBasicShortColumns } from './tableData';
  import { useMessage } from '/@/hooks/web/useMessage';
  import { demoListApi } from '/@/api/demo/table';
  export default defineComponent({
    components: { BasicTable },
    setup() {
      const tableRef = ref<Nullable<TableActionType>>(null);
      const { createMessage } = useMessage();

      function getTableAction() {
        const tableAction = unref(tableRef);
        if (!tableAction) {
          throw new Error('tableAction is null');
        }
        return tableAction;
      }
      function changeLoading() {
        getTableAction().setLoading(true);
        setTimeout(() => {
          getTableAction().setLoading(false);
        }, 1000);
      }
      function changeColumns() {
        getTableAction().setColumns(getBasicShortColumns());
      }
      function reloadTable() {
        getTableAction().setColumns(getBasicColumns());

        getTableAction().reload({
          page: 1,
        });
      }
      function getColumn() {
        createMessage.info('__Some-New-Token__！');
        console.log(getTableAction().getColumns());
      }

      function getTableData() {
        createMessage.info('__Some-New-Token__！');
        console.log(getTableAction().getDataSource());
      }

      function getPagination() {
        createMessage.info('__Some-New-Token__！');
        console.log(getTableAction().getPaginationRef());
      }

      function setPaginationInfo() {
        getTableAction().setPagination({
          current: 2,
        });
        getTableAction().reload();
      }
      function getSelectRowList() {
        createMessage.info('__Some-New-Token__！');
        console.log(getTableAction().getSelectRows());
      }
      function getSelectRowKeyList() {
        createMessage.info('__Some-New-Token__！');
        console.log(getTableAction().getSelectRowKeys());
      }
      function setSelectedRowKeyList() {
        getTableAction().setSelectedRowKeys(['0', '1', '2']);
      }
      function clearSelect() {
        getTableAction().clearSelectedRowKeys();
      }

      return {
        tableRef,
        api: demoListApi,
        columns: getBasicColumns(),
        changeLoading,
        changeColumns,
        reloadTable,
        getColumn,
        getTableData,
        getPagination,
        setPaginationInfo,
        getSelectRowList,
        getSelectRowKeyList,
        setSelectedRowKeyList,
        clearSelect,
      };
    },
  });
</script>
