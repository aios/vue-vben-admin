<template>
  <PageWrapper title="文本复制示例">
    <CollapseContainer class="px-20 bg-white w-full h-32 rounded-md" title="Copy Example">
      <div class="flex justify-center">
        <a-input placeholder="__Some-New-Token__" v-model:value="value" />
        <a-button type="primary" @click="handleCopy">Copy</a-button>
      </div>
    </CollapseContainer>
  </PageWrapper>
</template>
<script lang="ts">
  import { defineComponent, unref, ref } from 'vue';
  import { CollapseContainer } from '/@/components/Container/index';
  import { useCopyToClipboard } from '/@/hooks/web/useCopyToClipboard';
  import { useMessage } from '/@/hooks/web/useMessage';
  import { PageWrapper } from '/@/components/Page';

  export default defineComponent({
    name: 'Copy',
    components: { CollapseContainer, PageWrapper },
    setup() {
      const valueRef = ref('');
      const { createMessage } = useMessage();
      const { clipboardRef, copiedRef } = useCopyToClipboard();

      function handleCopy() {
        const value = unref(valueRef);
        if (!value) {
          createMessage.warning('__Some-New-Token__！');
          return;
        }
        clipboardRef.value = value;
        if (unref(copiedRef)) {
          createMessage.warning('copy success！');
        }
      }
      return { handleCopy, value: valueRef };
    },
  });
</script>
