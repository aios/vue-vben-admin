<template>
  <a-tag>
    <a>
      @{{bot.username}}({{bot.name}})
    </a>
  </a-tag>
</template>
<script lang="ts">

import {defineComponent, PropType} from 'vue';

import { useI18n } from '/@/hooks/web/useI18n';
import {StokerBot} from "/@/api/logic/stoker/model";

export default defineComponent({
  name: 'BotTableCell',
  props: {
    bot: Object as PropType<StokerBot>
  },
  setup(props) {
    const { t } = useI18n();

    return {
      bot: props.bot,
      t,
    };
  },
});
</script>
