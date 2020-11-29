<template>
  <div class="mt-2">
    __Some-New-Token__：
    <a-button type="link">
      {{ permissionMode === PermissionModeEnum.BACK ? '__Some-New-Token__' : '__Some-New-Token__' }}
    </a-button>
    <a-button class="ml-4" @click="togglePermissionMode" type="primary">
      __Some-New-Token__
    </a-button>
    <Divider />
  </div>
</template>
<script lang="ts">
  import { defineComponent, computed } from 'vue';
  import { appStore } from '/@/store/modules/app';
  import { PermissionModeEnum } from '/@/enums/appEnum';
  import { Divider } from 'ant-design-vue';
  import { usePermission } from '/@/hooks/web/usePermission';
  export default defineComponent({
    name: 'CurrentPermissionMode',
    components: { Divider },
    setup() {
      const permissionMode = computed(() => {
        return appStore.getProjectConfig.permissionMode;
      });
      const { togglePermissionMode } = usePermission();

      return {
        permissionMode,
        PermissionModeEnum,
        togglePermissionMode,
      };
    },
  });
</script>
