<template>
  <div class="px-10 py-4">
    <Alert
      message="__Some-New-Token__ useModal __Some-New-Token__，__Some-New-Token__，__Some-New-Token__ draggable
    __Some-New-Token__/__Some-New-Token__"
      show-icon
    />
    <a-button type="primary" class="my-4" @click="openModalLoading"
      >__Some-New-Token__ __Some-New-Token__/__Some-New-Token__</a-button
    >

    <Alert message="__Some-New-Token__" show-icon />
    <a-button type="primary" class="my-4" @click="openModal2">__Some-New-Token__</a-button>
    <Alert message="__Some-New-Token__" show-icon />
    <a-button type="primary" class="my-4" @click="openModal3">__Some-New-Token__</a-button>

    <Alert
      message="__Some-New-Token__,__Some-New-Token__ transferModalData __Some-New-Token__，__Some-New-Token__ receiveDrawerDataRef __Some-New-Token__。__Some-New-Token__"
      show-icon
    />
    <a-button type="primary" class="my-4" @click="send">__Some-New-Token__</a-button>

    <Modal1 @register="register1" />
    <Modal2 @register="register2" />
    <Modal3 @register="register3" />
    <Modal4 @register="register4" />
  </div>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import { Alert } from 'ant-design-vue';
  import { useModal } from '/@/components/Modal';
  import Modal1 from './Modal1.vue';
  import Modal2 from './Modal2.vue';
  import Modal3 from './Modal3.vue';
  import Modal4 from './Modal4.vue';
  export default defineComponent({
    components: { Alert, Modal1, Modal2, Modal3, Modal4 },
    setup() {
      const [register1, { openModal: openModal1, setModalProps }] = useModal();
      const [register2, { openModal: openModal2 }] = useModal();
      const [register3, { openModal: openModal3 }] = useModal();
      const [register4, { openModal: openModal4 }] = useModal();
      function send() {
        openModal4(true, {
          data: 'content',
          info: 'Info',
        });
      }
      function openModalLoading() {
        openModal1();
        setModalProps({ loading: true });
        setTimeout(() => {
          setModalProps({ loading: false });
        }, 2000);
      }
      return {
        register1,
        openModal1,
        register2,
        openModal2,
        register3,
        openModal3,
        register4,
        openModal4,
        send,
        openModalLoading,
      };
    },
  });
</script>
