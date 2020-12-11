<template>
  <div class="m-4">
    <CollapseContainer :title="t('routes.logic.staff.drivers.update.title')">
      <BasicForm
        :labelWidth="100"
        :schemas="schemas"
        :actionColOptions="{ span: 24 }"
        @submit="handleSubmit"
        size="small"
        layout="vertical"
        :wrapperCol="{lg: 24, xl: 16, sm: 24, md: 24}"
        @register="registerForm"
      />
    </CollapseContainer>
  </div>
</template>
<script lang="ts">
  import { defineComponent, computed, reactive} from 'vue';
  import {useRoute, useRouter} from 'vue-router';
  import {useTabs} from '/@/hooks/web/useTabs';

  import {BasicForm, useForm} from '/@/components/Form/index';

  import { CollapseContainer } from '/@/components/Container/index';

  import {clientStore} from '/@/store/modules/client';
  import {locationStore} from '/@/store/modules/location';
  import {driverStore} from '/@/store/modules/driver';
  import { useI18n } from '/@/hooks/web/useI18n';

  import {getSchemas} from './schemas';
  import {getDriver} from "/@/api/logic/driver/requests";
  import {DriverInput} from "/@/api/logic/driver/model";

  export default defineComponent({
    components: { BasicForm, CollapseContainer },
    setup() {
      const {t} = useI18n();
      const {push} = useRouter();
      const {closeCurrent} = useTabs();

      const {params: {id}} = useRoute();
      const driverId: number = <number><unknown>id;

      driverStore.loadPermissionsListForSelect();
      clientStore.loadListForSelect();
      locationStore.loadListForSelect();

      let state = reactive({
        errors: {},
      });

      const [registerForm, {setFieldsValue}] = useForm();

      getDriver(driverId).then(driver => {
        let driverInput: DriverInput = {
          name: driver.name,
          client_id: driver.client ? driver.client.id : '',
          location_ids: driver.locations.map(l => l.id),
          permissions: driver.permissions,
        }

        if (driver.salary) {
          driverInput = {
            ...driverInput,
            salary_type: driver.salary.type,
            salary_percent: driver.salary.percent,
            salary_amount: driver.salary.amount_formatted,
          };
        }

        setFieldsValue(driverInput);
      });

      const schemas = computed(() => {
        return getSchemas(state.errors);
      });

      return {
        schemas,
        handleSubmit: async (values: any) => {
          state.errors = {};

          try {
            await driverStore.update({id: driverId, input: values});

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
