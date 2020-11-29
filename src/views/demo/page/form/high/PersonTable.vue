<template>
  <div>
    <BasicTable @register="registerTable">
      <template #action="{ record, column }">
        <TableAction :actions="createActions(record, column)" />
      </template>
    </BasicTable>
    <a-button block class="mt-5" type="dashed" @click="handleAdd">__Some-New-Token__</a-button>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import {
    BasicTable,
    useTable,
    TableAction,
    BasicColumn,
    ActionItem,
    renderEditableRow,
    EditTableHeaderIcon,
    EditRecordRow,
  } from '/@/components/Table';

  const columns: BasicColumn[] = [
    {
      title: '__Some-New-Token__',
      dataIndex: 'name',
      customRender: renderEditableRow({ dataIndex: 'name', placeholder: '__Some-New-Token__' }),
    },
    {
      title: '__Some-New-Token__',
      dataIndex: 'no',
      customRender: renderEditableRow({ dataIndex: 'no', placeholder: '__Some-New-Token__' }),
    },
    {
      title: '__Some-New-Token__',
      dataIndex: 'dept',
      customRender: renderEditableRow({ dataIndex: 'dept', placeholder: '__Some-New-Token__' }),
    },
  ];

  const data: any[] = [
    {
      name: 'John Brown',
      no: '00001',
      dept: 'New York No. 1 Lake Park',
    },
    {
      name: 'John Brown2',
      no: '00002',
      dept: 'New York No. 2 Lake Park',
    },
    {
      name: 'John Brown3',
      no: '00003',
      dept: 'New York No. 3Lake Park',
    },
  ];
  export default defineComponent({
    components: { BasicTable, EditTableHeaderIcon, TableAction },
    setup() {
      const [registerTable, { getDataSource }] = useTable({
        columns: columns,
        showIndexColumn: false,
        dataSource: data,
        actionColumn: {
          width: 160,
          title: '__Some-New-Token__',
          dataIndex: 'action',
          slots: { customRender: 'action' },
        },
        pagination: false,
      });

      function handleEdit(record: EditRecordRow) {
        record.editable = true;
      }

      function handleCancel(record: EditRecordRow) {
        record.editable = false;
        record.onCancel && record.onCancel();
        if (record.isNew) {
          const data = getDataSource();
          const index = data.findIndex((item) => item.key === record.key);
          data.splice(index, 1);
        }
      }

      function handleSave(record: EditRecordRow) {
        record.editable = false;
        record.onSubmit && record.onSubmit();
      }

      function handleAdd() {
        const data = getDataSource();
        const addRow: EditRecordRow = {
          name: '',
          no: '',
          dept: '',
          editable: true,
          isNew: true,
        };
        data.push(addRow);
      }

      function createActions(record: EditRecordRow, column: BasicColumn): ActionItem[] {
        if (!record.editable) {
          return [
            {
              label: '__Some-New-Token__',
              onClick: handleEdit.bind(null, record),
            },
            {
              label: '__Some-New-Token__',
            },
          ];
        }
        return [
          {
            label: '__Some-New-Token__',
            onClick: handleSave.bind(null, record, column),
          },
          {
            label: '__Some-New-Token__',
            popConfirm: {
              title: '__Some-New-Token__',
              confirm: handleCancel.bind(null, record, column),
            },
          },
        ];
      }

      return {
        registerTable,
        handleEdit,
        createActions,
        handleAdd,
        getDataSource,
      };
    },
  });
</script>
