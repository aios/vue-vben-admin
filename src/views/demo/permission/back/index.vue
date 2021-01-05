<template>
  <PageWrapper
    title="后台权限示例"
    contentBackgrond
    contentClass="p-4"
    content="目前mock了两组数据， id为1 和 2 具体返回的菜单可以在mock/sys/menu.ts内查看"
  >
    <CurrentPermissionMode />

    <Alert class="mt-4" type="info" message="__Some-New-Token__" show-icon />

    <div class="mt-4">
      __Some-New-Token__(__Some-New-Token__):
      <a-button-group>
        <a-button @click="changeMenu('1')">
          __Some-New-Token__id__Some-New-Token__1__Some-New-Token__
        </a-button>
        <a-button @click="changeMenu('2')">
          __Some-New-Token__id__Some-New-Token__2__Some-New-Token__
        </a-button>
      </a-button-group>
    </div>
  </PageWrapper>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import CurrentPermissionMode from '../CurrentPermissionMode.vue';
  import { RoleEnum } from '/@/enums/roleEnum';
  import { usePermission } from '/@/hooks/web/usePermission';
  import { PageWrapper } from '/@/components/Page';
  import { Alert } from 'ant-design-vue';
  export default defineComponent({
    components: { Alert, CurrentPermissionMode, PageWrapper },
    setup() {
      const { changeMenu } = usePermission();
      return {
        RoleEnum,
        changeMenu,
      };
    },
  });
</script>
<style lang="less" scoped>
  .demo {
    background: #fff;
  }
</style>
