<template>
  <div class="p-4 flex flex-wrap">
    <CollapseContainer
      title="__Some-New-Token__"
      :canExpan="true"
      class="text-center mb-6 qrcode-demo-item"
    >
      <QrCode :value="qrCodeUrl" />
    </CollapseContainer>

    <CollapseContainer
      title="__Some-New-Token__img__Some-New-Token__"
      class="text-center mb-6 qrcode-demo-item"
    >
      <QrCode :value="qrCodeUrl" tag="img" />
    </CollapseContainer>

    <CollapseContainer title="__Some-New-Token__" class="text-center mb-6 qrcode-demo-item">
      <QrCode
        :value="qrCodeUrl"
        :options="{
          color: { dark: '#55D187' },
        }"
      />
    </CollapseContainer>

    <CollapseContainer
      title="__Some-New-Token__logo__Some-New-Token__"
      class="text-center mb-6 qrcode-demo-item"
    >
      <QrCode :value="qrCodeUrl" :logo="LogoImg" />
    </CollapseContainer>

    <CollapseContainer
      title="__Some-New-Token__logo__Some-New-Token__"
      class="text-center mb-6 qrcode-demo-item"
    >
      <QrCode
        :value="qrCodeUrl"
        logo="https://vebn.oss-cn-beijing.aliyuncs.com/vben/logo.png"
        :options="{
          color: { dark: '#55D187' },
        }"
      />
    </CollapseContainer>

    <CollapseContainer title="logo__Some-New-Token__" class="text-center mb-6 qrcode-demo-item">
      <QrCode
        :value="qrCodeUrl"
        :logo="{
          src: 'https://vebn.oss-cn-beijing.aliyuncs.com/vben/logo.png',
          logoSize: 0.2,
          borderSize: 0.05,
          borderRadius: 50,
          bgColor: 'blue',
        }"
      />
    </CollapseContainer>

    <CollapseContainer title="__Some-New-Token__" class="text-center qrcode-demo-item">
      <QrCode :value="qrCodeUrl" ref="qrRef" :logo="LogoImg" />
      <a-button class="mb-2" type="primary" @click="download"> __Some-New-Token__ </a-button>
      <div class="msg">(__Some-New-Token__logo__Some-New-Token__，__Some-New-Token__)</div>
    </CollapseContainer>

    <CollapseContainer title="__Some-New-Token__" class="text-center qrcode-demo-item">
      <QrCode :value="qrCodeUrl" :width="300" />
    </CollapseContainer>
  </div>
</template>
<script lang="ts">
  import { defineComponent, ref, unref } from 'vue';
  import { QrCode, QrCodeActionType } from '/@/components/Qrcode/index';
  import LogoImg from '/@/assets/images/logo.png';
  import { CollapseContainer } from '/@/components/Container/index';
  const qrCodeUrl = 'https://www.vvbin.cn';
  export default defineComponent({
    components: { CollapseContainer, QrCode },
    setup() {
      const qrRef = ref<Nullable<QrCodeActionType>>(null);
      function download() {
        const qrEl = unref(qrRef);
        if (!qrEl) return;
        qrEl.download('__Some-New-Token__');
      }
      return {
        qrCodeUrl,
        LogoImg,
        download,
        qrRef,
      };
    },
  });
</script>
<style scoped>
  .qrcode-demo-item {
    width: 30%;
    margin-right: 1%;
  }
</style>
