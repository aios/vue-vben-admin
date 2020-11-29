<template>
  <div class="p-4">
    <Alert
      message="__Some-New-Token__el-scrollbar，__Some-New-Token__,__Some-New-Token__,__Some-New-Token__"
      type="info"
    />

    <div class="my-4">
      <a-button @click="scrollTo(100)" class="mr-2"
        >__Some-New-Token__100px__Some-New-Token__</a-button
      >
      <a-button @click="scrollTo(800)" class="mr-2"
        >__Some-New-Token__800px__Some-New-Token__</a-button
      >
      <a-button @click="scrollTo(0)" class="mr-2">__Some-New-Token__</a-button>
      <a-button @click="scrollBottom()" class="mr-2">__Some-New-Token__</a-button>
    </div>
    <div class="scroll-wrap">
      <ScrollContainer class="mt-4" ref="scrollRef">
        <ul class="p-3">
          <template v-for="index in 100" :key="index">
            <li class="p-2" :style="{ border: '1px solid #eee' }">{{ index }}</li>
          </template>
        </ul>
      </ScrollContainer>
    </div>
  </div>
</template>
<script lang="ts">
  import { defineComponent, ref, unref } from 'vue';
  import { CollapseContainer } from '/@/components/Container/index';
  import { ScrollContainer, ScrollActionType } from '/@/components/Container/index';
  import { Alert } from 'ant-design-vue';
  export default defineComponent({
    components: { CollapseContainer, ScrollContainer, Alert },
    setup() {
      const scrollRef = ref<Nullable<ScrollActionType>>(null);
      const getScroll = () => {
        const scroll = unref(scrollRef);
        if (!scroll) {
          throw new Error('scroll is Null');
        }
        return scroll;
      };

      function scrollTo(top: number) {
        getScroll().scrollTo(top);
      }
      function scrollBottom() {
        getScroll().scrollBottom();
      }
      return {
        scrollTo,
        scrollRef,
        scrollBottom,
      };
    },
  });
</script>
<style lang="less" scoped>
  .scroll-wrap {
    width: 50%;
    height: 300px;
    background: #fff;
  }
</style>
