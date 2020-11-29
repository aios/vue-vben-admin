<template>
  <div class="p-4 flex justify-center">
    <div class="demo-wrap p-10">
      <StrengthMeter placeholder="__Some-New-Token__" />
      <StrengthMeter placeholder="__Some-New-Token__" disabled />
      <br />
      <StrengthMeter
        placeholder="__Some-New-Token__input"
        :show-input="false"
        value="!@#qwe12345"
      />
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import { StrengthMeter } from '/@/components/StrengthMeter';
  export default defineComponent({
    components: {
      StrengthMeter,
    },
    setup() {
      return {};
    },
  });
</script>
<style lang="less" scoped>
  .demo-wrap {
    width: 50%;
    background: #fff;
    border-radius: 10px;
  }
</style>
