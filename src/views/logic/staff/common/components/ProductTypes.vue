<template>
  <div v-for="productType in productTypes" :key="productType.id">
    <a-tag>
      <a>
        {{productType.name}}
      </a>
    </a-tag>
  </div>
</template>
<script lang="ts">

import {defineComponent, PropType} from 'vue';

import { useI18n } from '/@/hooks/web/useI18n';
import {StokerProductType} from "/@/api/logic/stoker/model";

export default defineComponent({
  name: 'ProductTypesTableCell',
  props: {
    productTypes: Array as PropType<StokerProductType[]>
  },
  setup(props) {
    const { t } = useI18n();

    return {
      productTypes: props.productTypes,
      t,
    };
  },
});
</script>
