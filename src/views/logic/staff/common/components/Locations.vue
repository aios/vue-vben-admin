<template>
  <div>
    <div v-if="emptyIsAll && locations.length === 0">
      Все
    </div>
    <div v-else>
      <div v-for="location in locations" :key="location.id">
        <a-tag>
          <a>
            {{nameByChain ? location.name_chain : location.name}}
          </a>
        </a-tag>
      </div>
    </div>
  </div>
</template>
<script lang="ts">

import {defineComponent, PropType} from 'vue';

import {StaffLocation} from "/@/api/logic/staffModel";

import { useI18n } from '/@/hooks/web/useI18n';

export default defineComponent({
  name: 'LocationsTableCell',
  props: {
    locations: Array as PropType<StaffLocation[]>,
    emptyIsAll: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
    nameByChain: {
      type: Boolean as PropType<boolean>,
      default: true,
    },
  },
  setup(props) {
    const { t } = useI18n();

    return {
      locations: props.locations,
      emptyIsAll: props.emptyIsAll,
      nameByChain: props.nameByChain,
      t,
    };
  },
});
</script>
