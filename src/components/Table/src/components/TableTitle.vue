<template>
  <BasicTitle v-if="tableTitle" class="basic-table-title" :help-message="helpMessage">
    {{ tableTitle }}
  </BasicTitle>
</template>
<script lang="ts">
  import { computed, defineComponent, PropType } from 'vue';

  import { BasicTitle } from '/@/components/Basic/index';
  import { isFunction } from '/@/utils/is';
  export default defineComponent({
    name: 'TableTitle',
    components: { BasicTitle },
    props: {
      title: {
        type: [Function, String] as PropType<string | ((data: Recordable) => string)>,
      },
      getSelectRows: {
        type: Function as PropType<() => Recordable[]>,
      },
      helpMessage: {
        type: [String, Array] as PropType<string | string[]>,
        default: '',
      },
    },
    setup(props) {
      const tableTitle = computed(() => {
        const { title, getSelectRows = () => {} } = props;
        let tit = title;

        if (isFunction(title)) {
          tit = title({
            selectRows: getSelectRows(),
          });
        }
        return tit;
      });

      return { tableTitle };
    },
  });
</script>
