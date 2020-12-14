<template>
  <div class="m-4">
    <CollapseContainer :title="t('routes.logic.staff.operators.update.title')">
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
  import {operatorStore} from '/@/store/modules/operator';
  import { useI18n } from '/@/hooks/web/useI18n';

  import {getSchemas} from './schemas';
  import {getOperator} from "/@/api/logic/operator/requests";
  import {OperatorInput} from "/@/api/logic/operator/model";

  export default defineComponent({
    components: { BasicForm, CollapseContainer },
    setup() {
      const {t} = useI18n();
      const {push} = useRouter();
      const {closeCurrent} = useTabs();

      const {params: {id}} = useRoute();
      const operatorId: number = <number><unknown>id;

      clientStore.loadListForSelect();

      let state = reactive({
        errors: {},
      });

      const schemas = computed(() => {
        return getSchemas(state.errors);
      });

      const [registerForm, {setFieldsValue}] = useForm();

      const register = (instance: FormActionType) =>  {
        registerForm(instance);

        getOperator(operatorId).then(operator => {
          let operatorInput: OperatorInput = {
            name: operator.name,
            client_id: operator.client ? operator.client.id : '',
          }

          if (operator.salary) {
            operatorInput = {
              ...operatorInput,
              salary_type: operator.salary.type,
              salary_percent: operator.salary.percent,
              salary_amount: operator.salary.amount_formatted,
            };
          }

          setFieldsValue(operatorInput);
        });
      }

      return {
        schemas,
        handleSubmit: async (values: any) => {
          state.errors = {};

          try {
            await operatorStore.update({id: operatorId, input: values});

            await closeCurrent();
            await push('/operators');
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
