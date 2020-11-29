<template>
  <div class="p-4">
    <Alert
      message="__Some-New-Token__el-scrollbar，__Some-New-Token__,__Some-New-Token__,__Some-New-Token__"
      type="info"
    />
    <div class="scroll-wrap">
      <ScrollContainer class="mt-4">
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
  import { defineComponent } from 'vue';
  import { CollapseContainer } from '/@/components/Container/index';
  import { ScrollContainer } from '/@/components/Container/index';
  import { Alert } from 'ant-design-vue';
  export default defineComponent({
    components: { CollapseContainer, ScrollContainer, Alert },
    setup() {
      return {};
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
