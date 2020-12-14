<template>
  <div v-for="location in locations" :key="location.id">
    <a-tag>
      <a>
        {{location.name_chain}}
      </a>
    </a-tag>
  </div>
</template>
<script lang="ts">

import {defineComponent, PropType} from 'vue';

import {StaffLocation} from "/@/api/logic/staffModel";

import { useI18n } from '/@/hooks/web/useI18n';

export default defineComponent({
  name: 'LocationsTableCell',
  props: {
    locations: Array as PropType<StaffLocation[]>
  },
  setup(props) {
    const { t } = useI18n();

    return {
      locations: props.locations,
      t,
    };
  },
});
</script>
