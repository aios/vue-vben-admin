<template>
  <PageWrapper title="动态表单示例">
    <div class="mb-4">
      <a-button @click="changeLabel3" class="mr-2">__Some-New-Token__3label</a-button>
      <a-button @click="changeLabel34" class="mr-2">__Some-New-Token__3,4label</a-button>
      <a-button @click="appendField" class="mr-2">__Some-New-Token__3__Some-New-Token__10</a-button>
      <a-button @click="deleteField" class="mr-2">__Some-New-Token__11</a-button>
    </div>
    <CollapseContainer title="__Some-New-Token__,__Some-New-Token__">
      <BasicForm @register="register" />
    </CollapseContainer>

    <CollapseContainer class="mt-5" title="componentProps__Some-New-Token__">
      <BasicForm @register="register1" />
    </CollapseContainer>
  </PageWrapper>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import { BasicForm, FormSchema, useForm } from '/@/components/Form/index';
  import { CollapseContainer } from '/@/components/Container/index';
  import { PageWrapper } from '/@/components/Page';

  const schemas: FormSchema[] = [
    {
      field: 'field1',
      component: 'Input',
      label: '__Some-New-Token__1',
      colProps: {
        span: 8,
      },
      show: ({ values }) => {
        return !!values.field5;
      },
    },
    {
      field: 'field2',
      component: 'Input',
      label: '__Some-New-Token__2',
      colProps: {
        span: 8,
      },
      ifShow: ({ values }) => {
        return !!values.field6;
      },
    },
    {
      field: 'field3',
      component: 'DatePicker',
      label: '__Some-New-Token__3',
      colProps: {
        span: 8,
      },
      dynamicDisabled: ({ values }) => {
        return !!values.field7;
      },
    },
    {
      field: 'field4',
      component: 'Select',
      label: '__Some-New-Token__4',
      colProps: {
        span: 8,
      },
      dynamicRules: ({ values }) => {
        return values.field8
          ? [{ required: true, message: '__Some-New-Token__4__Some-New-Token__' }]
          : [];
      },
      componentProps: {
        options: [
          {
            label: '__Some-New-Token__1',
            value: '1',
            key: '1',
          },
          {
            label: '__Some-New-Token__2',
            value: '2',
            key: '2',
          },
        ],
      },
    },
    {
      field: 'field11',
      component: 'DatePicker',
      label: '__Some-New-Token__11',
      colProps: {
        span: 8,
      },
    },
    {
      field: 'field5',
      component: 'Switch',
      label: '__Some-New-Token__1(css__Some-New-Token__)',
      colProps: {
        span: 8,
      },
      labelWidth: 200,
    },
    {
      field: 'field6',
      component: 'Switch',
      label: '__Some-New-Token__2(dom__Some-New-Token__)',
      colProps: {
        span: 8,
      },
      labelWidth: 200,
    },
    {
      field: 'field7',
      component: 'Switch',
      label: '__Some-New-Token__3',
      colProps: {
        span: 8,
      },
      labelWidth: 200,
    },
    {
      field: 'field8',
      component: 'Switch',
      label: '__Some-New-Token__4__Some-New-Token__',
      colProps: {
        span: 8,
      },
      labelWidth: 200,
    },
  ];

  const schemas1: FormSchema[] = [
    {
      field: 'f1',
      component: 'Input',
      label: 'F1',
      colProps: {
        span: 12,
      },
      labelWidth: 200,
      componentProps: ({ formModel }) => {
        return {
          placeholder: '__Some-New-Token__f2__Some-New-Token__f1',
          onChange: (e: ChangeEvent) => {
            formModel.f2 = e.target.value;
          },
        };
      },
    },
    {
      field: 'f2',
      component: 'Input',
      label: 'F2',
      colProps: {
        span: 12,
      },
      labelWidth: 200,
      componentProps: { disabled: true },
    },
    {
      field: 'f3',
      component: 'Input',
      label: 'F3',
      colProps: {
        span: 12,
      },
      labelWidth: 200,
      // @ts-ignore
      componentProps: ({ formActionType, tableAction }) => {
        return {
          placeholder: '__Some-New-Token__,__Some-New-Token__',
          onChange: async () => {
            const { validate } = formActionType;
            // tableAction__Some-New-Token__
            // const { reload } = tableAction;
            const res = await validate();
            console.log(res);
          },
        };
      },
    },
  ];

  export default defineComponent({
    components: { BasicForm, CollapseContainer, PageWrapper },
    setup() {
      const [
        register,
        { setProps, updateSchema, appendSchemaByField, removeSchemaByFiled },
      ] = useForm({
        labelWidth: 120,
        schemas,
        actionColOptions: {
          span: 24,
        },
      });
      const [register1] = useForm({
        labelWidth: 120,
        schemas: schemas1,
        actionColOptions: {
          span: 24,
        },
      });
      function changeLabel3() {
        updateSchema({
          field: 'field3',
          label: '__Some-New-Token__3 New',
        });
      }
      function changeLabel34() {
        updateSchema([
          {
            field: 'field3',
            label: '__Some-New-Token__3 New++',
          },
          {
            field: 'field4',
            label: '__Some-New-Token__4 New++',
          },
        ]);
      }

      function appendField() {
        appendSchemaByField(
          {
            field: 'field10',
            label: '__Some-New-Token__10',
            component: 'Input',
            colProps: {
              span: 8,
            },
          },
          'field3'
        );
      }
      function deleteField() {
        removeSchemaByFiled('field11');
      }
      return {
        register,
        register1,
        schemas,
        setProps,
        changeLabel3,
        changeLabel34,
        appendField,
        deleteField,
      };
    },
  });
</script>
