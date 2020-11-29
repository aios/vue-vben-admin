<template>
  <div class="m-4">
    <div class="mb-4">
      <a-button @click="validateForm" class="mr-2">__Some-New-Token__</a-button>
      <a-button @click="resetValidate" class="mr-2">__Some-New-Token__</a-button>
      <a-button @click="getFormValues" class="mr-2">__Some-New-Token__</a-button>
      <a-button @click="setFormValues" class="mr-2">__Some-New-Token__</a-button>
    </div>
    <CollapseContainer title="__Some-New-Token__">
      <BasicForm @register="register" @submit="handleSubmit" />
    </CollapseContainer>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import { BasicForm, FormSchema, useForm } from '/@/components/Form/index';
  import { CollapseContainer } from '/@/components/Container/index';
  import { useMessage } from '/@/hooks/web/useMessage';
  const schemas: FormSchema[] = [
    {
      field: 'field1',
      component: 'Input',
      label: '__Some-New-Token__1',
      colProps: {
        span: 8,
      },
      required: true,
    },
    {
      field: 'field2',
      component: 'Input',
      label: '__Some-New-Token__2',
      colProps: {
        span: 8,
      },
      required: true,
    },
    {
      field: 'field3',
      component: 'DatePicker',
      label: '__Some-New-Token__3',
      colProps: {
        span: 8,
      },
      required: true,
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
      rules: [
        {
          required: true,
          message: '__Some-New-Token__aa',
        },
      ],
    },
    {
      field: 'field44',
      component: 'Input',
      label: '__Some-New-Token__',
      colProps: {
        span: 8,
      },
      rules: [
        {
          required: true,
          // @ts-ignore
          validator: async (rule, value) => {
            if (value === '1') {
              return Promise.reject('__Some-New-Token__1');
            }
            return Promise.resolve();
          },
          trigger: 'blur',
        },
      ],
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
      rules: [{ required: true }],
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
      rules: [{ required: true, message: '__Some-New-Token__' }],
    },
  ];

  export default defineComponent({
    components: { BasicForm, CollapseContainer },
    setup() {
      const { createMessage } = useMessage();
      const [register, { validateFields, clearValidate, getFieldsValue, setFieldsValue }] = useForm(
        {
          labelWidth: 120,
          schemas,
          actionColOptions: {
            span: 24,
          },
        }
      );
      async function validateForm() {
        try {
          const res = await validateFields();
          console.log('passing', res);
        } catch (error) {
          console.log('not passing', error);
        }
      }
      async function resetValidate() {
        clearValidate();
      }
      function getFormValues() {
        const values = getFieldsValue();
        createMessage.success('values:' + JSON.stringify(values));
      }
      function setFormValues() {
        setFieldsValue({
          field1: '1111',
          field5: ['1'],
          field7: '1',
        });
      }
      return {
        register,
        schemas,
        handleSubmit: (values: any) => {
          createMessage.success('click search,values:' + JSON.stringify(values));
        },
        getFormValues,
        setFormValues,
        validateForm,
        resetValidate,
      };
    },
  });
</script>
