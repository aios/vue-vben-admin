<template>
  <div>
    <CollapseContainer>
      <BasicForm
        class="mb-5"
        :submit-on-reset="true"
        v-bind="getFormProps"
        :submit-button-options="{ ...(getFormProps.submitButtonOptions || {}), loading }"
        @register="registerForm"
        @submit="submitForm"
      >

      </BasicForm>
    </CollapseContainer>
    <div v-if="!loading" ref="chartRef" :style="{ width: '100%' }" />
    <Loading v-else :loading="loading"/>
  </div>

</template>
<script lang="ts">
  import {defineComponent, ref, Ref, onMounted, computed, unref, reactive} from 'vue';

  import { useApexCharts } from '/@/hooks/web/useApexCharts';

  import {getPayrollsStatistic} from '/@/api/logic/payroll/requests';
  import moment from "moment";
  import {BasicForm, FormActionType, FormProps, useForm} from "/@/components/Form";
  import {WebLocalStorage} from "/@/utils/cache";

  import { getFormConfig } from '/@/views/logic/staff/payrolls/tableData';
  import {CollapseContainer} from "/@/components/Container";
  import {staffStore} from "/@/store/modules/staff";

  import {Loading} from '/@/components/Loading';

  export default defineComponent({
    components: {BasicForm, CollapseContainer, Loading},
    setup() {
      const chartRef = ref<HTMLDivElement | null>(null);
      let loading = ref<boolean>(false);
      const { setOptions } = useApexCharts(chartRef as Ref<HTMLDivElement>);

      staffStore.loadListForSelect();

      const [registerForm, { getFieldsValue, setFieldsValue }] = useForm();

      const filtersStorageKey: string = 'payrollsStatisticFilters';

      const loadStatistic = async (params?) => {
        loading.value = true;

        const points = await getPayrollsStatistic({...(params || {})});

        setOptions({
          series: [
            {
              name: 'Начисления',
              data: points.map(p => p.amount),
            },
          ],
          chart: {
            height: 600,
            type: 'area',
          },
          dataLabels: {
            enabled: false,
          },
          stroke: {
            curve: 'smooth',
          },
          xaxis: {
            type: 'category',
            categories: points.map(p => moment(new Date(p.year, p.month, p.day || 1)).format('DD.MM.YYYY')),
          },
        });

        loading.value = false;
      };

      const submitForm = (values: any) => {
        WebLocalStorage.set(filtersStorageKey, values);

        loadStatistic(values);
      };

      onMounted(() => {
        loadStatistic(WebLocalStorage.get(filtersStorageKey, {}));
      });

      const getFormProps = computed(() => {
        const formConfig: Partial<FormProps> = getFormConfig();

        const formProps: FormProps = {
          showAdvancedButton: true,
          ...formConfig,
          schemas: [
            ...formConfig.schemas,

            {
              field: 'interval',
              component: 'RadioGroup',
              label: '',
              defaultValue: 'month',
              colProps: {
                span: 8,
              },
              componentProps: {
                options: [
                  {
                    value: 'month',
                    label: 'Месяц'
                  },
                  {
                    value: 'day',
                    label: 'День'
                  }
                ],
              },
            },
          ],
          compact: true,
        };
        return formProps;
      });

      const registerFormNew = (instance: FormActionType) => {
        registerForm(instance);

        setFieldsValue(WebLocalStorage.get(filtersStorageKey, {}));
      };

      return {
        chartRef,
        getFormProps,
        loading,
        registerForm: registerFormNew,
        submitForm,
      };
    },
  });
</script>
