<template>
  <div class="p-4">
    <a-alert message="__Some-New-Token__" class="my-5"></a-alert>
    <BasicUpload :maxSize="20" :maxNumber="10" @change="handleChange" :api="uploadApi" />

    <a-alert message="__Some-New-Token__,__Some-New-Token__" class="my-5"></a-alert>

    <BasicForm @register="register" />
  </div>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import { BasicUpload } from '/@/components/Upload';
  import { useMessage } from '/@/hooks/web/useMessage';
  import { BasicForm, FormSchema, useForm } from '/@/components/Form/index';

  import { uploadApi } from '/@/api/sys/upload';

  const schemas: FormSchema[] = [
    {
      field: 'field1',
      component: 'Upload',
      label: '__Some-New-Token__1',
      colProps: {
        span: 8,
      },
      rules: [{ required: true, message: '__Some-New-Token__' }],
      componentProps: {
        api: uploadApi,
      },
    },
  ];
  export default defineComponent({
    components: { BasicUpload, BasicForm },
    setup() {
      const { createMessage } = useMessage();
      const [register] = useForm({
        labelWidth: 120,
        schemas,
        actionColOptions: {
          span: 16,
        },
      });
      return {
        handleChange: (list: string[]) => {
          createMessage.info(`__Some-New-Token__${JSON.stringify(list)}`);
        },
        uploadApi,
        register,
      };
    },
  });
</script>
