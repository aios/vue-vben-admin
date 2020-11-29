<template>
  <div class="m-5 result-error">
    <Result
      status="error"
      title="__Some-New-Token__"
      sub-title="__Some-New-Token__，__Some-New-Token__。"
    >
      <template #extra>
        <a-button key="console" type="primary"> __Some-New-Token__ </a-button>
      </template>
    </Result>
    <div class="result-error__content">
      <div class="result-error__content-title">__Some-New-Token__：</div>
      <div class="mb-4">
        <CloseCircleOutlined class="mr-2 result-error__content-icon" />
        __Some-New-Token__
        <a class="ml-4">__Some-New-Token__ ></a>
      </div>
      <div class="mb-4">
        <CloseCircleOutlined class="mr-2 result-error__content-icon" />
        __Some-New-Token__
        <a class="ml-4">__Some-New-Token__ ></a>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import { Result } from 'ant-design-vue';
  import { CloseCircleOutlined } from '@ant-design/icons-vue';
  export default defineComponent({
    components: {
      Result,
      CloseCircleOutlined,
    },
  });
</script>
<style lang="less" scoped>
  .result-error {
    padding: 48px 32px;
    background: #fff;

    &__content {
      padding: 24px 40px;
      background: #fafafa;

      &-title {
        margin-bottom: 16px;
        font-size: 16px;
        font-weight: 500;
        color: rgba(0, 0, 0, 0.85);
      }

      &-icon {
        color: #ff4d4f;
      }
    }
  }
</style>
