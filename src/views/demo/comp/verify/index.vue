<template>
  <div class="p-10">
    <div class="flex justify-center p-4 items-center bg-gray-700">
      <BasicDragVerify ref="el1" @success="handleSuccess" />
      <a-button color="primary" class="ml-2" @click="handleBtnClick(el1)"
        >__Some-New-Token__</a-button
      >
    </div>

    <div class="flex justify-center p-4 items-center bg-gray-700">
      <BasicDragVerify ref="el2" @success="handleSuccess" circle />
      <a-button color="primary" class="ml-2" @click="handleBtnClick(el2)"
        >__Some-New-Token__</a-button
      >
    </div>

    <div class="flex justify-center p-4 items-center bg-gray-700">
      <BasicDragVerify
        ref="el3"
        @success="handleSuccess"
        text="__Some-New-Token__"
        successText="__Some-New-Token__"
        :barStyle="{
          background: '#018ffb',
        }"
      />
      <a-button color="primary" class="ml-2" @click="handleBtnClick(el3)"
        >__Some-New-Token__</a-button
      >
    </div>

    <div class="flex justify-center p-4 items-center bg-gray-700">
      <BasicDragVerify ref="el4" @success="handleSuccess">
        <template #actionIcon="isPassing">
          <BugOutlined v-if="isPassing" />
          <RightOutlined v-else />
        </template>
      </BasicDragVerify>
      <a-button color="primary" class="ml-2" @click="handleBtnClick(el4)"
        >__Some-New-Token__</a-button
      >
    </div>

    <div class="flex justify-center p-4 items-center bg-gray-700">
      <BasicDragVerify ref="el5" @success="handleSuccess">
        <template #text="isPassing">
          <div v-if="isPassing">
            <BugOutlined />
            __Some-New-Token__
          </div>
          <div v-else>
            __Some-New-Token__
            <RightOutlined />
          </div>
        </template>
      </BasicDragVerify>
      <a-button color="primary" class="ml-2" @click="handleBtnClick(el5)"
        >__Some-New-Token__</a-button
      >
    </div>
  </div>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { BasicDragVerify, DragVerifyActionType, PassingData } from '/@/components/Verify/index';
  import { useMessage } from '/@/hooks/web/useMessage';
  import { BugOutlined, RightOutlined } from '@ant-design/icons-vue';
  export default defineComponent({
    components: { BasicDragVerify, BugOutlined, RightOutlined },
    setup() {
      const { createMessage } = useMessage();
      const el1 = ref<Nullable<DragVerifyActionType>>(null);
      const el2 = ref<Nullable<DragVerifyActionType>>(null);
      const el3 = ref<Nullable<DragVerifyActionType>>(null);
      const el4 = ref<Nullable<DragVerifyActionType>>(null);
      const el5 = ref<Nullable<DragVerifyActionType>>(null);

      function handleSuccess(data: PassingData) {
        const { time } = data;
        createMessage.success(`__Some-New-Token__,__Some-New-Token__${time}__Some-New-Token__`);
      }

      function handleBtnClick(elRef: Nullable<DragVerifyActionType>) {
        if (!elRef) {
          return;
        }
        elRef.resume();
      }
      return {
        handleSuccess,
        el1,
        el2,
        el3,
        el4,
        el5,
        handleBtnClick,
      };
    },
  });
</script>
<style lang="less" scoped>
  .bg-gray-700 {
    background: #4a5568;
  }
</style>
