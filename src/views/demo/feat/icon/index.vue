<template>
  <PageWrapper title="Icon组件示例">
    <CollapseContainer title="Antv Icon使用 (直接按需引入相应组件即可)">
      <div class="flex justify-around">
        <GithubFilled :style="{ fontSize: '30px' }" />
        <QqCircleFilled :style="{ fontSize: '30px' }" />
        <WechatFilled :style="{ fontSize: '30px' }" />
        <AlipayCircleFilled :style="{ fontSize: '30px' }" />
        <IeCircleFilled :style="{ fontSize: '30px' }" />
        <TaobaoCircleFilled :style="{ fontSize: '30px' }" />
        <CodepenCircleFilled :style="{ fontSize: '30px' }" />
      </div>
    </CollapseContainer>

    <CollapseContainer title="IconIfy __Some-New-Token__" class="my-5">
      <div class="flex justify-around flex-wrap">
        <Icon icon="fa-solid:address-book" :size="30" />
        <Icon icon="mdi-light:bank" :size="30" />
        <Icon icon="jam:alien-f" :size="30" />
        <Icon icon="jam:android" :size="30" />
      </div>
    </CollapseContainer>

    <Alert
      show-icon
      message="__Some-New-Token__Iconify__Some-New-Token__"
      description="Icon__Some-New-Token__,__Some-New-Token__。__Some-New-Token__。__Some-New-Token__。"
    />
    <a-button type="link" @click="toIconify">Iconify 图标大全</a-button>
  </PageWrapper>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import { CollapseContainer } from '/@/components/Container/index';
  import { Alert } from 'ant-design-vue';
  import {
    QqCircleFilled,
    GithubFilled,
    WechatFilled,
    AlipayCircleFilled,
    IeCircleFilled,
    TaobaoCircleFilled,
    CodepenCircleFilled,
  } from '@ant-design/icons-vue';

  import Icon from '/@/components/Icon/index';

  import { openWindow } from '/@/utils';
  import { PageWrapper } from '/@/components/Page';

  export default defineComponent({
    components: {
      PageWrapper,
      CollapseContainer,
      GithubFilled,
      QqCircleFilled,
      WechatFilled,
      AlipayCircleFilled,
      IeCircleFilled,
      TaobaoCircleFilled,
      CodepenCircleFilled,
      Icon,
      Alert,
    },
    setup() {
      return {
        toIconify: () => {
          openWindow('https://iconify.design/');
        },
      };
    },
  });
</script>
