import {FormSchema, RenderCallbackParams} from "/@/components/Form";
import {computed, unref} from "vue";
import {useI18n} from "/@/hooks/web/useI18n";
import {clientStore} from "/@/store/modules/client";
import {locationStore} from "/@/store/modules/location";
import {SalaryType} from "/@/api/logic/salary/model";

export interface Errors {
  [field: string]: string[]
}

export const handleErrors = (schemas: FormSchema[], errors?: Errors): FormSchema[] => {
  if (!errors) {
    return schemas;
  }

  for (let field in errors) {
    for (let i in schemas) {
      if (schemas[i].field === field && errors[field].length > 0) {
        schemas[i].itemProps = {
          ...(schemas[i].itemProps || {}),
          validateStatus: 'error',
          help: errors[field].map((error, k) => (
            <div key={k}>{error}</div>
          )),
        };
      }
    }
  }

  return schemas;
};

const { t } = useI18n();

export const getClientField = (): FormSchema => {
  const clientList = computed(() => {
    return clientStore.getListForSelectFormatted;
  });

  return {
    field: 'client_id',
    component: 'Select',
    label: t('routes.logic.staff.fields.client'),
    colProps: {
      span: 24,
    },
    componentProps: {
      placeholder: '',
      options: unref(clientList),
      showSearch: true,
      filterOption(input: any, option: any) {
        return (
          option.label.toLowerCase().indexOf(input.toLowerCase()) >= 0
        );
      },
    },
  };
};

export const getLocationsField = (): FormSchema => {
  const locationList = computed(() => {
    return locationStore.getListForSelectFormatted;
  });

  return {
    field: 'location_ids',
    component: 'Select',
    label: t('routes.logic.staff.fields.locations'),
    colProps: {
      span: 24,
    },
    componentProps: {
      mode: 'multiple',
      placeholder: '',
      options: unref(locationList),
      showSearch: true,
      filterOption(input: any, option: any) {
        return (
          option.label.toLowerCase().indexOf(input.toLowerCase()) >= 0
        );
      },
    },
  };
};

export const getSalaryFields = (): FormSchema[] => {
  return [
    {
      field: 'salary_type',
      component: 'RadioGroup',
      label: t('routes.logic.staff.salary.fields.type'),
      defaultValue: '',
      colProps: {
        span: 16,
      },
      componentProps: {
        options: [
          {
            label: t('routes.basic.not_selected'),
            value: '',
          },
          {
            label: t('routes.logic.staff.salary.fields.type_percent'),
            value: SalaryType.percent,
          },
          {
            label: t('routes.logic.staff.salary.fields.type_fixed'),
            value: SalaryType.fixed,
          },
        ],
      },
    },

    {
      field: 'salary_percent',
      component: 'InputNumber',
      label: t('routes.logic.staff.salary.fields.percent'),
      colProps: {
        span: 8,
      },
      show: (renderCallbackParams: RenderCallbackParams) => renderCallbackParams.values.salary_type === 2,
      componentProps: {
        min: 0,
        max: 100,
        step: .01
      },
    },

    {
      field: 'salary_amount',
      component: 'InputNumber',
      label: t('routes.logic.staff.salary.fields.amount'),
      colProps: {
        span: 8,
      },
      show: (renderCallbackParams: RenderCallbackParams) => renderCallbackParams.values.salary_type === 1,
      componentProps: {
        min: 0,
        step: 1
      },
    },
  ];
};