<template>
  <PageWrapper title="可折叠表单示例">
    <CollapseContainer title="基础收缩示例">
      <BasicForm @register="register" />
    </CollapseContainer>

    <CollapseContainer title="__Some-New-Token__3__Some-New-Token__" class="mt-4">
      <BasicForm @register="register1" />
    </CollapseContainer>
  </PageWrapper>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import { BasicForm, FormSchema, useForm } from '/@/components/Form/index';
  import { CollapseContainer } from '/@/components/Container/index';
  import { PageWrapper } from '/@/components/Page';

  const getSchamas = (): FormSchema[] => {
    return [
      {
        field: 'field1',
        component: 'Input',
        label: '__Some-New-Token__1',
        colProps: {
          span: 8,
        },
        componentProps: {
          placeholder: '__Some-New-Token__placeholder',
          onChange: (e: any) => {
            console.log(e);
          },
        },
      },
      {
        field: 'field2',
        component: 'Input',
        label: '__Some-New-Token__2',
        colProps: {
          span: 8,
        },
      },
      {
        field: 'field3',
        component: 'DatePicker',
        label: '__Some-New-Token__3',
        colProps: {
          span: 8,
        },
      },
      {
        field: 'field4',
        component: 'Select',
        label: '__Some-New-Token__4',
        colProps: {
          span: 8,
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
        field: 'field5',
        component: 'CheckboxGroup',
        label: '__Some-New-Token__5',
        colProps: {
          span: 8,
        },
        componentProps: {
          options: [
            {
              label: '__Some-New-Token__1',
              value: '1',
            },
            {
              label: '__Some-New-Token__2',
              value: '2',
            },
          ],
        },
      },
      // {
      //   field: 'field7',
      //   component: 'RadioGroup',
      //   label: '__Some-New-Token__7',
      //   colProps: {
      //     span: 8,
      //   },
      //   componentProps: {
      //     options: [
      //       {
      //         label: '__Some-New-Token__1',
      //         value: '1',
      //       },
      //       {
      //         label: '__Some-New-Token__2',
      //         value: '2',
      //       },
      //     ],
      //   },
      // },
    ];
  };

  function getAppendSchemas(): FormSchema[] {
    return [
      {
        field: 'field10',
        component: 'Input',
        label: '__Some-New-Token__10',
        colProps: {
          span: 8,
        },
      },
      {
        field: 'field11',
        component: 'Input',
        label: '__Some-New-Token__11',
        colProps: {
          span: 8,
        },
      },
      {
        field: 'field12',
        component: 'Input',
        label: '__Some-New-Token__12',
        colProps: {
          span: 8,
        },
      },
      {
        field: 'field13',
        component: 'Input',
        label: '__Some-New-Token__13',
        colProps: {
          span: 8,
        },
      },
    ];
  }
  export default defineComponent({
    components: { BasicForm, CollapseContainer, PageWrapper },
    setup() {
      const [register] = useForm({
        labelWidth: 120,
        schemas: getSchamas(),
        actionColOptions: {
          span: 24,
        },
        compact: true,
        showAdvancedButton: true,
      });
      const [register1] = useForm({
        labelWidth: 120,
        schemas: [...getSchamas(), ...getAppendSchemas()],
        actionColOptions: {
          span: 24,
        },
        compact: true,
        showAdvancedButton: true,
      });
      return {
        register,
        register1,
      };
    },
  });
</script>
