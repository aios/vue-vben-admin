<template>
  <div class="p-4 virtual-scroll-demo">
    <Divider>__Some-New-Token__</Divider>
    <div class="virtual-scroll-demo-wrap">
      <VirtualScroll :itemHeight="41" :items="data" :height="300" :width="300">
        <template v-slot="{ item }">
          <div class="virtual-scroll-demo__item">{{ item.title }}</div>
        </template>
      </VirtualScroll>
    </div>

    <Divider
      >__Some-New-Token__，__Some-New-Token__50__Some-New-Token__，__Some-New-Token__</Divider
    >
    <div class="virtual-scroll-demo-wrap">
      <VirtualScroll :itemHeight="41" :items="data" :height="300" :width="300" :bench="50">
        <template v-slot="{ item }">
          <div class="virtual-scroll-demo__item">{{ item.title }}</div>
        </template>
      </VirtualScroll>
    </div>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import { VirtualScroll } from '/@/components/VirtualScroll/index';

  import { Divider } from 'ant-design-vue';
  const data: any[] = (() => {
    const arr: any[] = [];
    for (let index = 1; index < 20000; index++) {
      arr.push({
        title: '__Some-New-Token__' + index,
      });
    }
    return arr;
  })();
  export default defineComponent({
    components: { VirtualScroll, Divider },
    setup() {
      return { data: data };
    },
  });
</script>
<style lang="less" scoped>
  .virtual-scroll-demo {
    &-wrap {
      display: flex;
      margin: 0 30%;
      background: #fff;
      justify-content: center;
    }

    &__item {
      height: 40px;
      padding: 0 20px;
      line-height: 40px;
      border-bottom: 1px solid #ddd;
    }
  }
</style>
