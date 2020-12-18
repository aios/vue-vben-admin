<template>
  <div class="m-4">
    <CollapseContainer :title="t('routes.logic.staff.salaryGroups.create.title')">
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

  import {locationStore} from '/@/store/modules/location';
  import {staffStore} from "/@/store/modules/staff";
  import { useI18n } from '/@/hooks/web/useI18n';

  import {getSchemas} from './schemas';
  import {createSalaryGroup} from "/@/api/logic/salaryGroup/requests";

  export default defineComponent({
    components: { BasicForm, CollapseContainer },
    setup() {
      const {t} = useI18n();
      const {push} = useRouter();
      const {closeCurrent} = useTabs();

      locationStore.loadListForSelect();
      staffStore.loadListForSelect();

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

          values.staff = (values.staff || []).map((s: any) => JSON.parse(s));

          try {
            await createSalaryGroup(values);

            await closeCurrent();
            await push('/salaryGroups');
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
