<template>
  <div class="flex p-4">
    <CollapseContainer title="__Some-New-Token__" :style="{ width: '33%' }" class="mr-4">
      <BasicTree :tree-data="treeData" />
    </CollapseContainer>

    <CollapseContainer title="__Some-New-Token__" class="mr-4" :style="{ width: '33%' }">
      <BasicTree :tree-data="treeData" :checkable="true" />
    </CollapseContainer>

    <CollapseContainer title="__Some-New-Token__/__Some-New-Token__" :style="{ width: '33%' }">
      <BasicTree
        :tree-data="treeData"
        :checkable="true"
        :expanded-keys="['0-0']"
        :checked-keys="['0-0']"
      />
    </CollapseContainer>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import { BasicTree } from '/@/components/Tree/index';
  import { treeData } from './data';
  import { CollapseContainer } from '/@/components/Container/index';

  export default defineComponent({
    components: { BasicTree, CollapseContainer },
    setup() {
      return { treeData };
    },
  });
</script>
