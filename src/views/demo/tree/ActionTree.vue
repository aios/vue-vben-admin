<template>
  <div class="p-4">
    <div class="mb-4">
      <a-button @click="handleLevel(2)" class="mr-2"
>
        __Some-New-Token__2__Some-New-Token__
      </a-button>
      <a-button @click="handleLevel(1)" class="mr-2"
>
        __Some-New-Token__1__Some-New-Token__
      </a-button>
      <a-button class="mr-2" @click="handleSetCheckData"> __Some-New-Token__ </a-button>
      <a-button class="mr-2" @click="handleGetCheckData"> __Some-New-Token__ </a-button>
      <a-button class="mr-2" @click="handleSetSelectData"> __Some-New-Token__ </a-button>
      <a-button class="mr-2" @click="handleGetSelectData"> __Some-New-Token__ </a-button>

      <a-button class="mr-2" @click="handleSetExpandData"> __Some-New-Token__ </a-button>
      <a-button class="mr-2" @click="handleGetExpandData"> __Some-New-Token__ </a-button>
    </div>
    <div class="mb-4">
      <a-button class="mr-2" @click="appendNodeByKey(null)"> __Some-New-Token__ </a-button>
      <a-button @click="appendNodeByKey('2-2')" class="mr-2"
>
        __Some-New-Token__parent3__Some-New-Token__
      </a-button>
      <a-button @click="deleteNodeByKey('2-2')" class="mr-2"
>
        __Some-New-Token__parent3__Some-New-Token__
      </a-button>
      <a-button @click="updateNodeByKey('1-1')" class="mr-2"
>
        __Some-New-Token__parent2__Some-New-Token__
      </a-button>
    </div>
    <CollapseContainer
      title="__Some-New-Token__"
      class="mr-4"
      :can-expan="false"
      :style="{ width: '33%' }"
    >
      <BasicTree ref="treeRef" :tree-data="treeData" :checkable="true" />
    </CollapseContainer>
  </div>
</template>
<script lang="ts">
  import { defineComponent, ref, unref } from 'vue';
  import { BasicTree, TreeActionType } from '/@/components/Tree/index';
  import { treeData } from './data';
  import { CollapseContainer } from '/@/components/Container/index';
  import { useMessage } from '/@/hooks/web/useMessage';

  export default defineComponent({
    components: { BasicTree, CollapseContainer },
    setup() {
      const treeRef = ref<Nullable<TreeActionType>>(null);
      const { createMessage } = useMessage();
      function getTree() {
        const tree = unref(treeRef);
        if (!tree) {
          throw new Error('tree is null!');
        }
        return tree;
      }

      function handleLevel(level: number) {
        getTree().filterByLevel(level);
      }

      function handleSetCheckData() {
        getTree().setCheckedKeys(['0-0']);
      }

      function handleGetCheckData() {
        const keys = getTree().getCheckedKeys();
        createMessage.success(JSON.stringify(keys));
      }

      function handleSetSelectData() {
        getTree().setSelectedKeys(['0-0']);
      }

      function handleGetSelectData() {
        const keys = getTree().getSelectedKeys();
        createMessage.success(JSON.stringify(keys));
      }

      function handleSetExpandData() {
        getTree().setExpandedKeys(['0-0']);
      }

      function handleGetExpandData() {
        const keys = getTree().getExpandedKeys();
        createMessage.success(JSON.stringify(keys));
      }

      function appendNodeByKey(parentKey: string | null = null) {
        getTree().insertNodeByKey({
          parentKey: parentKey,
          node: {
            title: '__Some-New-Token__',
            key: '2-2-2',
          },
          // __Some-New-Token__
          push: 'push',
          // __Some-New-Token__
          // push:'unshift'
        });
      }

      function deleteNodeByKey(key: string) {
        getTree().deleteNodeByKey(key);
      }

      function updateNodeByKey(key: string) {
        getTree().updateNodeByKey(key, {
          title: 'parent2-new',
        });
      }

      return {
        treeData,
        treeRef,
        handleLevel,
        handleSetCheckData,
        handleGetCheckData,
        handleSetSelectData,
        handleGetSelectData,
        handleSetExpandData,
        handleGetExpandData,
        appendNodeByKey,
        deleteNodeByKey,
        updateNodeByKey,
      };
    },
  });
</script>
