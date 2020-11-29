<template>
  <div class="p-4 m-4 demo">
    <Alert
      message="__Some-New-Token__，__Some-New-Token__，__Some-New-Token__，__Some-New-Token__，__Some-New-Token__ src/layout/default/index__Some-New-Token__"
      show-icon
    />
    <CurrentPermissionMode />

    <p>
      __Some-New-Token__: <a> {{ userStore.getRoleListState }} </a>
    </p>
    <Alert class="mt-4" type="info" message="__Some-New-Token__" show-icon />

    <div class="mt-4">
      __Some-New-Token__(__Some-New-Token__):
      <a-button-group>
        <a-button @click="changeRole(RoleEnum.SUPER)" :type="isSuper ? 'primary' : 'default'">
          {{ RoleEnum.SUPER }}
        </a-button>
        <a-button @click="changeRole(RoleEnum.TEST)" :type="isTest ? 'primary' : 'default'">
          {{ RoleEnum.TEST }}
        </a-button>
      </a-button-group>
    </div>
  </div>
</template>
<script lang="ts">
  import { computed, defineComponent } from 'vue';
  import { Alert } from 'ant-design-vue';
  import CurrentPermissionMode from '../CurrentPermissionMode.vue';
  import { userStore } from '/@/store/modules/user';
  import { RoleEnum } from '/@/enums/roleEnum';
  import { usePermission } from '/@/hooks/web/usePermission';

  export default defineComponent({
    components: { Alert, CurrentPermissionMode },
    setup() {
      const { changeRole } = usePermission();
      return {
        userStore,
        RoleEnum,
        isSuper: computed(() => userStore.getRoleListState.includes(RoleEnum.SUPER)),
        isTest: computed(() => userStore.getRoleListState.includes(RoleEnum.TEST)),
        changeRole,
      };
    },
  });
</script>
<style lang="less" scoped>
  .demo {
    background: #fff;
  }
</style>
