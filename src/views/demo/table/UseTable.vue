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
    <BasicTable @register="registerTable" />
  </div>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import { BasicTable, useTable } from '/@/components/Table';
  import { getBasicColumns, getBasicShortColumns } from './tableData';
  import { useMessage } from '/@/hooks/web/useMessage';
  import { demoListApi } from '/@/api/demo/table';
  export default defineComponent({
    components: { BasicTable },
    setup() {
      const { createMessage } = useMessage();
      const [
        registerTable,
        {
          setLoading,
          setColumns,
          getColumns,
          getDataSource,
          reload,
          getPaginationRef,
          setPagination,
          getSelectRows,
          getSelectRowKeys,
          setSelectedRowKeys,
          clearSelectedRowKeys,
        },
      ] = useTable({
        canResize: true,
        title: 'useTable示例',
        titleHelpMessage: '使用useTable调用表格内方法',
        api: demoListApi,
        columns: getBasicColumns(),
        rowKey: 'id',
        showTableSetting: true,
        rowSelection: {
          type: 'checkbox',
        },
      });

      function changeLoading() {
        setLoading(true);
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      }
      function changeColumns() {
        setColumns(getBasicShortColumns());
      }
      function reloadTable() {
        setColumns(getBasicColumns());

        reload({
          page: 1,
        });
      }
      function getColumn() {
        createMessage.info('__Some-New-Token__！');
        console.log(getColumns());
      }

      function getTableData() {
        createMessage.info('__Some-New-Token__！');
        console.log(getDataSource());
      }

      function getPagination() {
        createMessage.info('__Some-New-Token__！');
        console.log(getPaginationRef());
      }

      function setPaginationInfo() {
        setPagination({
          current: 2,
        });
        reload();
      }
      function getSelectRowList() {
        createMessage.info('__Some-New-Token__！');
        console.log(getSelectRows());
      }
      function getSelectRowKeyList() {
        createMessage.info('__Some-New-Token__！');
        console.log(getSelectRowKeys());
      }
      function setSelectedRowKeyList() {
        setSelectedRowKeys(['0', '1', '2']);
      }
      function clearSelect() {
        clearSelectedRowKeys();
      }

      return {
        registerTable,
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
