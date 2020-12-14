<template>
  <div>
    {{unpaidSalary}} грн
  </div>
</template>
<script lang="ts">

import {defineComponent, PropType} from 'vue';

import { useI18n } from '/@/hooks/web/useI18n';

export default defineComponent({
  name: 'UnpaidSalaryTableCell',
  props: {
    unpaidSalary: String as PropType<string>
  },
  setup(props) {
    const { t } = useI18n();

    return {
      unpaidSalary: props.unpaidSalary,
      t,
    };
  },
});
</script>
