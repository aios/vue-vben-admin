<template>
  <div>
    <a-page-header title="__Some-New-Token__" :ghost="false">
      __Some-New-Token__，__Some-New-Token__。
    </a-page-header>

    <div class="m-5 form-wrap">
      <BasicForm @register="register" />
    </div>
  </div>
</template>
<script lang="ts">
  import { BasicForm, useForm } from '/@/components/Form';
  import { defineComponent } from 'vue';
  import { schemas } from './data';
  import { useMessage } from '/@/hooks/web/useMessage';
  export default defineComponent({
    components: { BasicForm },
    setup() {
      const { createMessage } = useMessage();
      const [register, { validate, setProps }] = useForm({
        labelCol: {
          span: 7,
        },
        wrapperCol: {
          span: 10,
        },
        schemas: schemas,
        actionColOptions: {
          offset: 8,
        },
        submitButtonOptions: {
          text: '__Some-New-Token__',
        },
        submitFunc: customSubmitFunc,
      });

      async function customSubmitFunc() {
        try {
          await validate();
          setProps({
            submitButtonOptions: {
              loading: true,
            },
          });
          setTimeout(() => {
            setProps({
              submitButtonOptions: {
                loading: false,
              },
            });
            createMessage.success('__Some-New-Token__！');
          }, 2000);
        } catch (error) {}
      }

      return { register };
    },
  });
</script>
<style lang="less" scoped>
  .form-wrap {
    padding: 24px;
    background: #fff;
  }
</style>
