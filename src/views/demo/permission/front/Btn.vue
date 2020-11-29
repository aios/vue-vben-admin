<template>
  <div class="demo p-4 m-4">
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
    <Divider>__Some-New-Token__(__Some-New-Token__)</Divider>
    <Authority :value="RoleEnum.SUPER">
      <a-button type="primary" class="mx-4">__Some-New-Token__super__Some-New-Token__</a-button>
    </Authority>

    <Authority :value="RoleEnum.TEST">
      <a-button color="success" class="mx-4">__Some-New-Token__test__Some-New-Token__</a-button>
    </Authority>

    <Authority :value="[RoleEnum.TEST, RoleEnum.SUPER]">
      <a-button color="error" class="mx-4"
        >__Some-New-Token__[test,super]__Some-New-Token__</a-button
      >
    </Authority>

    <Divider>__Some-New-Token__(__Some-New-Token__)</Divider>
    <a-button v-if="hasPermission(RoleEnum.SUPER)" type="primary" class="mx-4">
      __Some-New-Token__super__Some-New-Token__
    </a-button>

    <a-button v-if="hasPermission(RoleEnum.TEST)" color="success" class="mx-4">
      __Some-New-Token__test__Some-New-Token__
    </a-button>

    <a-button v-if="hasPermission([RoleEnum.TEST, RoleEnum.SUPER])" color="error" class="mx-4">
      __Some-New-Token__[test,super]__Some-New-Token__
    </a-button>

    <Divider>__Some-New-Token__(__Some-New-Token__.)</Divider>
    <a-button v-auth="RoleEnum.SUPER" type="primary" class="mx-4">
      __Some-New-Token__super__Some-New-Token__
    </a-button>

    <a-button v-auth="RoleEnum.TEST" color="success" class="mx-4">
      __Some-New-Token__test__Some-New-Token__
    </a-button>

    <a-button v-auth="[RoleEnum.TEST, RoleEnum.SUPER]" color="error" class="mx-4">
      __Some-New-Token__[test,super]__Some-New-Token__
    </a-button>
  </div>
</template>
<script lang="ts">
  import { computed, defineComponent } from 'vue';
  import { Alert, Divider } from 'ant-design-vue';
  import CurrentPermissionMode from '../CurrentPermissionMode.vue';
  import { userStore } from '/@/store/modules/user';
  import { RoleEnum } from '/@/enums/roleEnum';
  import { usePermission } from '/@/hooks/web/usePermission';
  import { Authority } from '/@/components/Authority';

  export default defineComponent({
    components: { Alert, CurrentPermissionMode, Divider, Authority },
    setup() {
      const { changeRole, hasPermission } = usePermission();
      return {
        userStore,
        RoleEnum,
        isSuper: computed(() => userStore.getRoleListState.includes(RoleEnum.SUPER)),
        isTest: computed(() => userStore.getRoleListState.includes(RoleEnum.TEST)),
        changeRole,
        hasPermission,
      };
    },
  });
</script>
<style lang="less" scoped>
  .demo {
    background: #fff;
  }
</style>
