<template>
  <div class="m-4">
    <div class="mb-4">
      <a-button @click="setProps({ labelWidth: 150 })" class="mr-2"
        >__Some-New-Token__labelWidth</a-button
      >
      <a-button @click="setProps({ labelWidth: 120 })" class="mr-2"
        >__Some-New-Token__labelWidth</a-button
      >
      <a-button @click="setProps({ size: 'large' })" class="mr-2">__Some-New-Token__Size</a-button>
      <a-button @click="setProps({ size: 'default' })" class="mr-2"
        >__Some-New-Token__Size</a-button
      >
      <a-button @click="setProps({ disabled: true })" class="mr-2">__Some-New-Token__</a-button>
      <a-button @click="setProps({ disabled: false })" class="mr-2">__Some-New-Token__</a-button>
      <a-button @click="setProps({ compact: true })" class="mr-2">__Some-New-Token__</a-button>
      <a-button @click="setProps({ compact: false })" class="mr-2">__Some-New-Token__</a-button>
      <a-button @click="setProps({ actionColOptions: { span: 8 } })" class="mr-2">
        __Some-New-Token__
      </a-button>
    </div>
    <div class="mb-4">
      <a-button @click="setProps({ showActionButtonGroup: false })" class="mr-2">
        __Some-New-Token__
      </a-button>
      <a-button @click="setProps({ showActionButtonGroup: true })" class="mr-2">
        __Some-New-Token__
      </a-button>
      <a-button @click="setProps({ showResetButton: false })" class="mr-2">
        __Some-New-Token__
      </a-button>
      <a-button @click="setProps({ showResetButton: true })" class="mr-2">
        __Some-New-Token__
      </a-button>
      <a-button @click="setProps({ showSubmitButton: false })" class="mr-2">
        __Some-New-Token__
      </a-button>
      <a-button @click="setProps({ showSubmitButton: true })" class="mr-2">
        __Some-New-Token__
      </a-button>
      <a-button
        @click="
          setProps({
            resetButtonOptions: {
              disabled: true,
              text: '__Some-New-Token__New',
            },
          })
        "
        class="mr-2"
      >
        __Some-New-Token__
      </a-button>
      <a-button
        @click="
          setProps({
            submitButtonOptions: {
              disabled: true,
              loading: true,
            },
          })
        "
        class="mr-2"
      >
        __Some-New-Token__
      </a-button>
    </div>
    <CollapseContainer title="useForm__Some-New-Token__">
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
  ];

  export default defineComponent({
    components: { BasicForm, CollapseContainer },
    setup() {
      const { createMessage } = useMessage();

      const [register, { setProps }] = useForm({
        labelWidth: 120,
        schemas,
        actionColOptions: {
          span: 24,
        },
      });
      return {
        register,
        schemas,
        handleSubmit: (values: Recordable) => {
          createMessage.success('click search,values:' + JSON.stringify(values));
        },
        setProps,
      };
    },
  });
</script>
