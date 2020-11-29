<template>
  <div class="step3">
    <a-result status="success" title="__Some-New-Token__" sub-title="__Some-New-Token__">
      <template #extra>
        <a-button type="primary" @click="redo">__Some-New-Token__ </a-button>
        <a-button> __Some-New-Token__ </a-button>
      </template>
    </a-result>
    <div class="desc-wrap">
      <a-descriptions :column="1" class="mt-5">
        <a-descriptions-item label="__Some-New-Token__">
          ant-design@alipay.com
        </a-descriptions-item>
        <a-descriptions-item label="__Some-New-Token__"> test@example.com </a-descriptions-item>
        <a-descriptions-item label="__Some-New-Token__"> Vben </a-descriptions-item>
        <a-descriptions-item label="__Some-New-Token__">
          500__Some-New-Token__
        </a-descriptions-item>
      </a-descriptions>
    </div>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: {},
    emits: ['redo'],
    setup(_, { emit }) {
      return {
        redo: () => {
          emit('redo');
        },
      };
    },
  });
</script>
<style lang="less" scoped>
  .step3 {
    width: 600px;
    margin: 0 auto;
  }

  .desc-wrap {
    padding: 24px 40px;
    margin-top: 24px;
    background: #fafafa;
  }
</style>
