<template>
  <div class="step1">
    <div class="step1-form">
      <BasicForm @register="register">
        <template #fac="{ model, field }">
          <a-input-group compact>
            <a-select v-model:value="model['pay']" class="pay-select">
              <a-select-option value="zfb"> __Some-New-Token__ </a-select-option>
              <a-select-option value="yl"> __Some-New-Token__ </a-select-option>
            </a-select>
            <a-input class="pay-input" v-model:value="model[field]" />
          </a-input-group>
        </template>
      </BasicForm>
    </div>
    <a-divider />
    <h3>__Some-New-Token__</h3>
    <h4>__Some-New-Token__</h4>
    <p>
      __Some-New-Token__，__Some-New-Token__。__Some-New-Token__，__Some-New-Token__。__Some-New-Token__，__Some-New-Token__。
    </p>

    <h4>__Some-New-Token__</h4>
    <p>
      __Some-New-Token__，__Some-New-Token__。__Some-New-Token__，__Some-New-Token__。__Some-New-Token__，__Some-New-Token__。
    </p>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import { BasicForm, useForm } from '/@/components/Form';
  import { step1Schemas } from './data';

  export default defineComponent({
    components: { BasicForm },
    emits: ['next'],
    setup(_, { emit }) {
      const [register, { validate }] = useForm({
        labelWidth: 100,
        schemas: step1Schemas,
        actionColOptions: {
          span: 14,
        },
        showResetButton: false,
        submitButtonOptions: {
          text: '__Some-New-Token__',
        },
        submitFunc: customSubmitFunc,
      });

      async function customSubmitFunc() {
        try {
          const values = await validate();
          emit('next', values);
        } catch (error) {}
      }

      return { register };
    },
  });
</script>
<style lang="less" scoped>
  .step1 {
    &-form {
      width: 450px;
      margin: 0 auto;
    }

    h3 {
      margin: 0 0 12px;
      font-size: 16px;
      line-height: 32px;
      color: rgba(0, 0, 0, 0.45);
    }

    h4 {
      margin: 0 0 4px;
      font-size: 14px;
      line-height: 22px;
      color: rgba(0, 0, 0, 0.45);
    }

    p {
      color: rgba(0, 0, 0, 0.45);
    }
  }

  .pay-select {
    width: 20%;
  }

  .pay-input {
    width: 70%;
  }
</style>
