<template>
  <div class="m-4">
    <CollapseContainer :title="t('routes.logic.staff.salaryGroups.update.title')">
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

import {locationStore} from '/@/store/modules/location';
import {staffStore} from '/@/store/modules/staff';
import { useI18n } from '/@/hooks/web/useI18n';

import {getSchemas} from './schemas';
import {getSalaryGroup, updateSalaryGroup} from "/@/api/logic/salaryGroup/requests";
import {SalaryGroupInput} from "/@/api/logic/salaryGroup/model";

export default defineComponent({
  components: { BasicForm, CollapseContainer },
  setup() {
    const {t} = useI18n();
    const {push} = useRouter();
    const {closeCurrent} = useTabs();

    const {params: {id}} = useRoute();
    const salaryGroupId: number = <number><unknown>id;

    locationStore.loadListForSelect();
    staffStore.loadListForSelect();

    let state = reactive({
      errors: {},
    });

    const schemas = computed(() => {
      return getSchemas(state.errors);
    });

    const [registerForm, {setFieldsValue}] = useForm();

    const prepareStaff = (staff: any[], type: string): string[] => {
      return staff.map(s => JSON.stringify({
        id: s.id,
        type: type,
      }))
    };

    const register = (instance: FormActionType) =>  {
      registerForm(instance);

      getSalaryGroup(salaryGroupId).then(salaryGroup => {
        let salaryGroupInput: SalaryGroupInput = {
          name: salaryGroup.name,
          location_ids: salaryGroup.locations.map(l => l.id),
          all_locations: salaryGroup.locations.length === 0 ? 1 : 2,
          staff: [
            ...prepareStaff(salaryGroup.drivers, 'driver'),
            ...prepareStaff(salaryGroup.operators, 'operator'),
            ...prepareStaff(salaryGroup.stokers, 'stoker'),
          ],
          type: salaryGroup.type,
          percent: salaryGroup.percent,
          amount: salaryGroup.amount_formatted,
          active: salaryGroup.active === 1,
        }

        setFieldsValue(salaryGroupInput);
      });
    }

    return {
      schemas,
      handleSubmit: async (values: any) => {
        state.errors = {};

        values.staff = values.staff.map((s: any) => JSON.parse(s));

        try {
          await updateSalaryGroup(salaryGroupId, values);

          await closeCurrent();
          await push('/salaryGroups');
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
