<template>
  <PageWrapper title="Tree函数操作示例">
    <div class="flex">
      <CollapseContainer title="右侧操作按钮" class="mr-4" :style="{ width: '33%' }">
        <BasicTree :treeData="treeData" :actionList="actionList" />
      </CollapseContainer>

      <CollapseContainer title="右键菜单" class="mr-4" :style="{ width: '33%' }">
        <BasicTree :treeData="treeData" :beforeRightClick="getRightMenuList" />
      </CollapseContainer>
    </div>
  </PageWrapper>
</template>
<script lang="ts">
  import { defineComponent, h } from 'vue';
  import { BasicTree, ActionItem, ContextMenuItem } from '/@/components/Tree/index';
  import { treeData } from './data';
  import { CollapseContainer } from '/@/components/Container/index';
  import { PlusOutlined, DeleteOutlined } from '@ant-design/icons-vue';
  import { PageWrapper } from '/@/components/Page';

  export default defineComponent({
    components: { BasicTree, CollapseContainer, PageWrapper },
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
