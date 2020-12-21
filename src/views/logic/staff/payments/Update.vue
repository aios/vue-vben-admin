<template>
  <div class="m-4">
    <CollapseContainer :title="t('routes.logic.staff.payments.update.title')">
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

import {staffStore} from '/@/store/modules/staff';
import { useI18n } from '/@/hooks/web/useI18n';

import {getSchemas} from './schemas';
import {getStaffPayment, updateStaffPayment} from "/@/api/logic/staffPayment/requests";
import {StaffPaymentInput} from "/@/api/logic/staffPayment/model";

export default defineComponent({
  components: { BasicForm, CollapseContainer },
  setup() {
    const {t} = useI18n();
    const {push} = useRouter();
    const {closeCurrent} = useTabs();

    const {params: {id}} = useRoute();
    const staffPaymentId: number = <number><unknown>id;

    staffStore.loadListForSelect();

    let state = reactive({
      errors: {},
    });

    const schemas = computed(() => {
      return getSchemas(state.errors, true);
    });

    const [registerForm, {setFieldsValue}] = useForm();

    const register = (instance: FormActionType) =>  {
      registerForm(instance);

      getStaffPayment(staffPaymentId).then(staffPayment => {
        let staffPaymentInput: StaffPaymentInput = {
          staff: JSON.stringify({
            id: staffPayment.staff_id,
            type: staffPayment.staff_type,
          }),
          amount: staffPayment.amount_formatted,
          done: staffPayment.done === 1,
        }

        setFieldsValue(staffPaymentInput);
      });
    }

    return {
      schemas,
      handleSubmit: async (values: any) => {
        state.errors = {};

        values.staff = JSON.parse(values.staff || '{}');

        try {
          await updateStaffPayment(staffPaymentId, values);

          await closeCurrent();
          await push('/staffPayments');
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
