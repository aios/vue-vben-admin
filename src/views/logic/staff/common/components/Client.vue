<template>
  <a-tag>
    <a v-if="client">
      {{client.username || client.name || client.telegram_id}}
    </a>
    <span v-else>
      {{t('routes.basic.not_selected')}}
    </span>
  </a-tag>
</template>
<script lang="ts">

import {defineComponent, PropType} from 'vue';

import {StaffClient} from "/@/api/logic/staffModel";

import { useI18n } from '/@/hooks/web/useI18n';

export default defineComponent({
  name: 'ClientTableCell',
  props: {
    client: Object as PropType<StaffClient>
  },
  setup(props) {
    const { t } = useI18n();

    return {
      client: props.client,
      t,
    };
  },
});
</script>
