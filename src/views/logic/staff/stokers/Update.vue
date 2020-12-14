<template>
  <div class="m-4">
    <CollapseContainer :title="t('routes.logic.staff.stokers.update.title')">
      <BasicForm
        :labelWidth="100"
        :schemas="schemas"
        :actionColOptions="{ span: 24 }"
        @submit="handleSubmit"
        size="small"
        layout="vertical"
        :wrapperCol="{lg: 24, xl: 16, sm: 24, md: 24}"
        @register="register"
      />
    </CollapseContainer>
  </div>
</template>
<script lang="ts">
  import { defineComponent, computed, reactive} from 'vue';
  import {useRoute, useRouter} from 'vue-router';
  import {useTabs} from '/@/hooks/web/useTabs';

  import {BasicForm, FormActionType, useForm} from '/@/components/Form';

  import { CollapseContainer } from '/@/components/Container';

  import {clientStore} from '/@/store/modules/client';
  import {locationStore} from '/@/store/modules/location';
  import {stokerStore} from '/@/store/modules/stoker';
  import { useI18n } from '/@/hooks/web/useI18n';

  import {getSchemas} from './schemas';
  import {getStoker} from "/@/api/logic/stoker/requests";
  import {StokerInput} from "/@/api/logic/stoker/model";
  import {productTypeStore} from "/@/store/modules/productType";
  import {botStore} from "/@/store/modules/bot";

  export default defineComponent({
    components: { BasicForm, CollapseContainer },
    setup() {
      const {t} = useI18n();
      const {push} = useRouter();
      const {closeCurrent} = useTabs();

      const {params: {id}} = useRoute();
      const stokerId: number = <number><unknown>id;

      clientStore.loadListForSelect();
      locationStore.loadListForSelect();
      productTypeStore.loadListForSelect();
      botStore.loadListForSelect();

      let state = reactive({
        errors: {},
      });

      const schemas = computed(() => {
        return getSchemas(state.errors);
      });

      const [registerForm, {setFieldsValue}] = useForm();

      const register = (instance: FormActionType) =>  {
        registerForm(instance);

        getStoker(stokerId).then(stoker => {
          let stokerInput: StokerInput = {
            name: stoker.name,
            client_id: stoker.client ? stoker.client.id : '',
            source_id: stoker.source.id,
            location_ids: stoker.locations.map(l => l.id),
            product_type_ids: stoker.product_types.map(l => l.id),
          }

          if (stoker.salary) {
            stokerInput = {
              ...stokerInput,
              salary_type: stoker.salary.type,
              salary_percent: stoker.salary.percent,
              salary_amount: stoker.salary.amount_formatted,
            };
          }

          setFieldsValue(stokerInput);
        });
      }

      return {
        schemas,
        handleSubmit: async (values: any) => {
          state.errors = {};

          try {
            await stokerStore.update({id: stokerId, input: values});

            await closeCurrent();
            await push('/stokers');
          } catch (e) {
            if (!e.response || e.response.status !== 422) {
              throw e;
            }

            state.errors = {...e.response.data.errors};
          }
        },
        register,
        t,
      };
    },
  });
</script>
