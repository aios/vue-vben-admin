<template>
  <div class="m-4">
    <CollapseContainer title="__Some-New-Token__">
      <BasicForm
        autoFocusFirstItem
        :labelWidth="100"
        :schemas="schemas"
        :actionColOptions="{ span: 24 }"
        @submit="handleSubmit"
      />
    </CollapseContainer>
  </div>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { BasicForm, FormSchema } from '/@/components/Form/index';
  import { CollapseContainer } from '/@/components/Container/index';
  import { useMessage } from '/@/hooks/web/useMessage';

  import { optionsListApi } from '/@/api/demo/select';
  const schemas: FormSchema[] = [
    {
      field: 'field1',
      component: 'Input',
      label: '字段1',

      colProps: {
        span: 8,
      },
      // componentProps:{},
      // can func
      componentProps: ({ schema, formModel }) => {
        console.log('form:', schema);
        console.log('formModel:', formModel);
        return {
          placeholder: '__Some-New-Token__placeholder',
          onChange: (e: any) => {
            console.log(e);
          },
        };
      },
      renderComponentContent: () => {
        return {
          prefix: () => 'pSlot',
          suffix: () => 'sSlot',
        };
      },
    },
    {
      field: 'field2',
      component: 'Input',
      label: '带后缀',
      defaultValue: '111',
      colProps: {
        span: 8,
      },
      componentProps: {
        onChange: (e: any) => {
          console.log(e);
        },
      },
      suffix: '天',
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
    {
      field: 'field7',
      component: 'RadioGroup',
      label: '__Some-New-Token__7',
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
    {
      field: 'field8',
      component: 'Checkbox',
      label: '__Some-New-Token__8',
      colProps: {
        span: 8,
      },
      renderComponentContent: 'Check',
    },
    {
      field: 'field9',
      component: 'Switch',
      label: '__Some-New-Token__9',
      colProps: {
        span: 8,
      },
    },
    {
      field: 'field10',
      component: 'RadioButtonGroup',
      label: '__Some-New-Token__10',
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
    {
      field: 'field11',
      component: 'Cascader',
      label: '__Some-New-Token__11',
      colProps: {
        span: 8,
      },
      componentProps: {
        options: [
          {
            value: 'zhejiang',
            label: 'Zhejiang',
            children: [
              {
                value: 'hangzhou',
                label: 'Hangzhou',
                children: [
                  {
                    value: 'xihu',
                    label: 'West Lake',
                  },
                ],
              },
            ],
          },
          {
            value: 'jiangsu',
            label: 'Jiangsu',
            children: [
              {
                value: 'nanjing',
                label: 'Nanjing',
                children: [
                  {
                    value: 'zhonghuamen',
                    label: 'Zhong Hua Men',
                  },
                ],
              },
            ],
          },
        ],
      },
    },

    {
      field: 'field30',
      component: 'ApiSelect',
      label: '远程下拉',
      required: true,
      componentProps: {
        api: optionsListApi,
      },
      colProps: {
        span: 8,
      },
    },
    {
      field: 'field20',
      component: 'InputNumber',
      label: '__Some-New-Token__20',
      required: true,
      colProps: {
        span: 8,
      },
    },
  ];

  export default defineComponent({
    components: { BasicForm, CollapseContainer },
    setup() {
      const check = ref(null);
      const { createMessage } = useMessage();
      return {
        schemas,
        handleSubmit: (values: any) => {
          createMessage.success('click search,values:' + JSON.stringify(values));
        },
        check,
      };
    },
  });
</script>
