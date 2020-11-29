<template>
  <BasicModal
    v-bind="$attrs"
    title="Modal Title"
    :helpMessage="['__Some-New-Token__1', '__Some-New-Token__2']"
    width="700px"
  >
    <p class="h-20" v-for="index in 20" :key="index">__Some-New-Token__</p>
  </BasicModal>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import { BasicModal } from '/@/components/Modal';
  export default defineComponent({
    components: { BasicModal },
    setup() {
      return {};
    },
  });
</script>
