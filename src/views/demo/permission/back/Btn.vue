<template>
  <div class="p-4 m-4 demo">
    <Alert message="__Some-New-Token__" show-icon />

    <CurrentPermissionMode />

    <p>
      __Some-New-Token__code__Some-New-Token__: <a> {{ permissionStore.getPermCodeListState }} </a>
    </p>
    <Divider />
    <Alert class="mt-4" type="info" message="__Some-New-Token__" show-icon />
    <Divider />
    <a-button type="primary" class="mr-2" @click="changePermissionCode('2')">
      __Some-New-Token__(__Some-New-Token__id__Some-New-Token__2)
    </a-button>
    <a-button type="primary" @click="changePermissionCode('1')">
      __Some-New-Token__(__Some-New-Token__id__Some-New-Token__1,__Some-New-Token__)
    </a-button>

    <Divider>__Some-New-Token__</Divider>
    <Authority :value="'1000'">
      <a-button type="primary" class="mx-4"
        >__Some-New-Token__code ['1000']__Some-New-Token__</a-button
      >
    </Authority>

    <Authority :value="'2000'">
      <a-button color="success" class="mx-4"
        >__Some-New-Token__code ['2000']__Some-New-Token__</a-button
      >
    </Authority>

    <Authority :value="['1000', '2000']">
      <a-button color="error" class="mx-4"
        >__Some-New-Token__code ['1000','2000']__Some-New-Token__</a-button
      >
    </Authority>

    <Divider>__Some-New-Token__</Divider>
    <a-button v-if="hasPermission('1000')" type="primary" class="mx-4">
      __Some-New-Token__code ['1000']__Some-New-Token__
    </a-button>

    <a-button v-if="hasPermission('2000')" color="success" class="mx-4">
      __Some-New-Token__code ['2000']__Some-New-Token__
    </a-button>

    <a-button v-if="hasPermission(['1000', '2000'])" color="error" class="mx-4">
      __Some-New-Token__code ['1000','2000']__Some-New-Token__
    </a-button>

    <Divider>__Some-New-Token__(__Some-New-Token__.)</Divider>
    <a-button v-auth="'1000'" type="primary" class="mx-4">
      __Some-New-Token__code ['1000']__Some-New-Token__
    </a-button>

    <a-button v-auth="'2000'" color="success" class="mx-4">
      __Some-New-Token__code ['2000']__Some-New-Token__
    </a-button>

    <a-button v-auth="['1000', '2000']" color="error" class="mx-4">
      __Some-New-Token__code ['1000','2000']__Some-New-Token__
    </a-button>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import { Alert, Divider } from 'ant-design-vue';
  import CurrentPermissionMode from '../CurrentPermissionMode.vue';
  import { usePermission } from '/@/hooks/web/usePermission';
  import { Authority } from '/@/components/Authority';
  import { getPermCodeByUserId } from '/@/api/sys/user';
  import { permissionStore } from '/@/store/modules/permission';
  import { PermissionModeEnum } from '/@/enums/appEnum';
  export default defineComponent({
    components: { Alert, CurrentPermissionMode, Divider, Authority },
    setup() {
      const { hasPermission } = usePermission();

      // !__Some-New-Token__， __Some-New-Token__，__Some-New-Token__
      async function changePermissionCode(userId: string) {
        const codeList = await getPermCodeByUserId({ userId });
        permissionStore.commitPermCodeListState(codeList);
      }
      // __Some-New-Token__1
      changePermissionCode('1');
      return {
        hasPermission,
        permissionStore,
        changePermissionCode,
        PermissionModeEnum,
      };
    },
  });
</script>
<style lang="less" scoped>
  .demo {
    background: #fff;
  }
</style>
