<template>
  <PageWrapper
    title="前端权限按钮示例"
    contentBackgrond
    contentClass="p-4"
    content="由于刷新的时候会请求用户信息接口，会根据接口重置角色信息，所以刷新后界面会恢复原样，如果不需要，可以注释 src/layout/default/index内的获取用户信息接口"
  >
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
  </PageWrapper>
</template>
<script lang="ts">
  import { computed, defineComponent } from 'vue';
  import { Alert, Divider } from 'ant-design-vue';
  import CurrentPermissionMode from '../CurrentPermissionMode.vue';
  import { userStore } from '/@/store/modules/user';
  import { RoleEnum } from '/@/enums/roleEnum';
  import { usePermission } from '/@/hooks/web/usePermission';
  import { Authority } from '/@/components/Authority';
  import { PageWrapper } from '/@/components/Page';

  export default defineComponent({
    components: { Alert, PageWrapper, CurrentPermissionMode, Divider, Authority },
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
