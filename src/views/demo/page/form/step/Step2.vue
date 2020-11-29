<template>
  <div class="step2">
    <a-alert message="__Some-New-Token__，__Some-New-Token__，__Some-New-Token__。" show-icon />
    <a-descriptions :column="1" class="mt-5">
      <a-descriptions-item label="__Some-New-Token__"> ant-design@alipay.com </a-descriptions-item>
      <a-descriptions-item label="__Some-New-Token__"> test@example.com </a-descriptions-item>
      <a-descriptions-item label="__Some-New-Token__"> Vben </a-descriptions-item>
      <a-descriptions-item label="__Some-New-Token__"> 500__Some-New-Token__ </a-descriptions-item>
    </a-descriptions>
    <a-divider />
    <BasicForm @register="register" />
  </div>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import { BasicForm, useForm } from '/@/components/Form';
  import { step2Schemas } from './data';

  export default defineComponent({
    components: { BasicForm },
    emits: ['next', 'prev'],
    setup(_, { emit }) {
      const [register, { validate, setProps }] = useForm({
        labelWidth: 80,
        schemas: step2Schemas,
        actionColOptions: {
          span: 14,
        },
        resetButtonOptions: {
          text: '__Some-New-Token__',
        },
        submitButtonOptions: {
          text: '__Some-New-Token__',
        },
        resetFunc: customResetFunc,
        submitFunc: customSubmitFunc,
      });

      async function customResetFunc() {
        emit('prev');
      }

      async function customSubmitFunc() {
        try {
          const values = await validate();
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
            emit('next', values);
          }, 1500);
        } catch (error) {}
      }

      return { register };
    },
  });
</script>
<style lang="less" scoped>
  .step2 {
    width: 450px;
    margin: 0 auto;
  }
</style>
