<template>
  <div v-if="salary">
    {{salary.display_value}}
  </div>
</template>
<script lang="ts">

import {defineComponent, PropType} from 'vue';

import { useI18n } from '/@/hooks/web/useI18n';
import {StaffSalary} from "/@/api/logic/salary/model";

export default defineComponent({
  name: 'SalaryTableCell',
  props: {
    salary: Object as PropType<StaffSalary>
  },
  setup(props) {
    const { t } = useI18n();

    return {
      salary: props.salary,
      t,
    };
  },
});
</script>
