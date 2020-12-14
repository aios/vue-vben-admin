<template>
  <div class="m-4">
    <CollapseContainer :title="t('routes.logic.staff.stokers.create.title')">
      <BasicForm
        :labelWidth="100"
        :schemas="schemas"
        :actionColOptions="{ span: 24 }"
        @submit="handleSubmit"
        size="small"
        layout="vertical"
        :wrapperCol="{lg: 24, xl: 16, sm: 24, md: 24}"
      />
    </CollapseContainer>
  </div>
</template>
<script lang="ts">
  import { defineComponent, computed, reactive } from 'vue';
  import { useRouter } from 'vue-router';
  import {useTabs} from '/@/hooks/web/useTabs';

  import {BasicForm, useForm} from '/@/components/Form';

  import { CollapseContainer } from '/@/components/Container';

  import {clientStore} from '/@/store/modules/client';
  import {locationStore} from '/@/store/modules/location';
  import {stokerStore} from '/@/store/modules/stoker';
  import { useI18n } from '/@/hooks/web/useI18n';

  import {getSchemas} from './schemas';
  import {productTypeStore} from "/@/store/modules/productType";
  import {botStore} from "/@/store/modules/bot";

  export default defineComponent({
    components: { BasicForm, CollapseContainer },
    setup() {
      const {t} = useI18n();
      const {push} = useRouter();
      const {closeCurrent} = useTabs();

      clientStore.loadListForSelect();
      locationStore.loadListForSelect();
      productTypeStore.loadListForSelect();
      botStore.loadListForSelect();

      let state = reactive({
        errors: {},
      });

      const [registerForm] = useForm();

      const schemas = computed(() => {
        return getSchemas(state.errors);
      });

      return {
        schemas,
        handleSubmit: async (values: any) => {
          state.errors = {};

          try {
            await stokerStore.create(values);

            await closeCurrent();
            await push('/stokers');
          } catch (e) {
            if (!e.response || e.response.status !== 422) {
              throw e;
            }

            state.errors = {...e.response.data.errors};
          }
        },
        registerForm,
        t,
      };
    },
  });
</script>
