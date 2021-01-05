<template>
  <PageWrapper title="Ref操作示例">
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
    <CollapseContainer title="__Some-New-Token__ref__Some-New-Token__">
      <BasicForm
        :schemas="schemas"
        ref="formElRef"
        :labelWidth="100"
        @submit="handleSubmit"
        :actionColOptions="{ span: 24 }"
      />
    </CollapseContainer>
  </PageWrapper>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { BasicForm, FormSchema, FormActionType, FormProps } from '/@/components/Form/index';
  import { CollapseContainer } from '/@/components/Container/index';
  import { useMessage } from '/@/hooks/web/useMessage';
  import { PageWrapper } from '/@/components/Page';

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
    components: { BasicForm, CollapseContainer, PageWrapper },
    setup() {
      const formElRef = ref<Nullable<FormActionType>>(null);
      const { createMessage } = useMessage();
      return {
        formElRef,
        schemas,
        handleSubmit: (values: any) => {
          createMessage.success('click search,values:' + JSON.stringify(values));
        },
        setProps(props: FormProps) {
          const formEl = formElRef.value;
          if (!formEl) return;
          formEl.setProps(props);
        },
      };
    },
  });
</script>
