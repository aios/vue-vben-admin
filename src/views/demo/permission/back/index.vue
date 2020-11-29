<template>
  <div class="p-4 m-4 demo">
    <Alert
      message="__Some-New-Token__mock__Some-New-Token__， id__Some-New-Token__1 __Some-New-Token__ 2 __Some-New-Token__mock/sys/menu.ts__Some-New-Token__"
      show-icon
    />
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
  </div>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import { Alert } from 'ant-design-vue';
  import CurrentPermissionMode from '../CurrentPermissionMode.vue';
  import { RoleEnum } from '/@/enums/roleEnum';
  import { usePermission } from '/@/hooks/web/usePermission';

  export default defineComponent({
    components: { Alert, CurrentPermissionMode },
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
