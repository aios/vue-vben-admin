<template>
  <BasicModal
    v-bind="$attrs"
    title="Modal Title"
    :helpMessage="['__Some-New-Token__1', '__Some-New-Token__2']"
  >
    Modal Info.
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
