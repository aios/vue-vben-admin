<template>
  <div class="flex p-4">
    <CollapseContainer title="__Some-New-Token__" class="mr-4" :style="{ width: '33%' }">
      <BasicTree :tree-data="treeData" :action-list="actionList" />
    </CollapseContainer>

    <CollapseContainer title="__Some-New-Token__" class="mr-4" :style="{ width: '33%' }">
      <BasicTree :tree-data="treeData" :before-right-click="getRightMenuList" />
    </CollapseContainer>
  </div>
</template>
<script lang="ts">
  import { defineComponent, h } from 'vue';
  import { BasicTree, ActionItem, ContextMenuItem } from '/@/components/Tree/index';
  import { treeData } from './data';
  import { CollapseContainer } from '/@/components/Container/index';
  import { PlusOutlined, DeleteOutlined } from '@ant-design/icons-vue';
  export default defineComponent({
    components: { BasicTree, CollapseContainer },
    setup() {
      function handlePlus(node: any) {
        console.log(node);
      }

      function getRightMenuList(node: any): ContextMenuItem[] {
        return [
          {
            label: '__Some-New-Token__',
            handler: () => {
              console.log('__Some-New-Token__', node);
            },
            icon: 'bi:plus',
          },
          {
            label: '__Some-New-Token__',
            handler: () => {
              console.log('__Some-New-Token__', node);
            },
            icon: 'bx:bxs-folder-open',
          },
        ];
      }
      const actionList: ActionItem[] = [
        {
          render: (node) => {
            return h(PlusOutlined, {
              class: 'ml-2',
              onClick: () => {
                handlePlus(node);
              },
            });
          },
        },
        {
          render: () => {
            return h(DeleteOutlined);
          },
        },
      ];
      return { treeData, actionList, getRightMenuList };
    },
  });
</script>
