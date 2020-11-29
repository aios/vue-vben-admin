<template>
  <BasicModal
    v-bind="$attrs"
    @register="register"
    title="Modal Title"
    :helpMessage="['__Some-New-Token__1', '__Some-New-Token__2']"
  >
    <a-button type="primary" @click="closeModal" class="mr-2">__Some-New-Token__</a-button>

    <a-button type="primary" @click="setModalProps">__Some-New-Token__title</a-button>
  </BasicModal>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import { BasicModal, useModalInner } from '/@/components/Modal';
  export default defineComponent({
    components: { BasicModal },
    setup() {
      const [register, { closeModal, setModalProps }] = useModalInner();
      return {
        register,
        closeModal,
        setModalProps: () => {
          setModalProps({ title: 'Modal New Title' });
        },
      };
    },
  });
</script>
