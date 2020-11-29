<template>
  <div class="m-5 result-success">
    <Result
      status="success"
      title="__Some-New-Token__"
      sub-title="__Some-New-Token__， __Some-New-Token__，__Some-New-Token__ Message __Some-New-Token__。 __Some-New-Token__，__Some-New-Token__ “__Some-New-Token__”__Some-New-Token__，__Some-New-Token__。"
    >
      <template #extra>
        <a-button key="console" type="primary"> __Some-New-Token__ </a-button>
        <a-button key="buy"> __Some-New-Token__ </a-button>
        <a-button key="buy"> __Some-New-Token__ </a-button>
      </template>
    </Result>
    <div class="result-success__content">
      <Descriptions title="__Some-New-Token__">
        <DescriptionItem label="__Some-New-Token__ ID"> 111222 </DescriptionItem>
        <DescriptionItem label="__Some-New-Token__"> Vben </DescriptionItem>
        <DescriptionItem label="__Some-New-Token__"> 2016-12-12 ~ 2017-12-12 </DescriptionItem>
      </Descriptions>
      <Steps :current="1" progress-dot size="small">
        <Step title="__Some-New-Token__">
          <template #description> <div>Vben</div> <p>2016-12-12 12:32</p> </template>
        </Step>
        <Step title="__Some-New-Token__">
          <template #description> <p>Chad</p> </template>
        </Step>
        <Step title="__Some-New-Token__" />
        <Step title="__Some-New-Token__" />
      </Steps>
    </div>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import { Result, Steps, Descriptions } from 'ant-design-vue';
  export default defineComponent({
    components: {
      Result,
      Steps,
      Step: Steps.Step,
      Descriptions,
      DescriptionItem: Descriptions.Item,
    },
  });
</script>
<style lang="less" scoped>
  .result-success {
    padding: 48px 32px;
    background: #fff;

    &__content {
      padding: 24px 40px;
      background: #fafafa;
    }
  }
</style>
