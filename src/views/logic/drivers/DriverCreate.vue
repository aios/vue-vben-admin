<template>
  <div class="m-4">
    <CollapseContainer :title="t('routes.logic.staff.drivers.create.title')">
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

  import {BasicForm, useForm} from '/@/components/Form/index';

  import { CollapseContainer } from '/@/components/Container/index';

  import {clientStore} from '/@/store/modules/client';
  import {locationStore} from '/@/store/modules/location';
  import {driverStore} from '/@/store/modules/driver';
  import { useI18n } from '/@/hooks/web/useI18n';

  import { useMessage } from '/@/hooks/web/useMessage';

  import {getSchemas} from './schemas';

  export default defineComponent({
    components: { BasicForm, CollapseContainer },
    setup() {
      const {t} = useI18n();
      const {push} = useRouter();
      const {closeCurrent} = useTabs();

      driverStore.loadPermissionsListForSelect();
      clientStore.loadListForSelect();
      locationStore.loadListForSelect();

      let state = reactive({
        errors: {}
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
            await driverStore.create(values);

            await closeCurrent();
            await push('/drivers');
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
