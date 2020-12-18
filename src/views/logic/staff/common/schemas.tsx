import {FormSchema, RenderCallbackParams} from "/@/components/Form";
import {computed, unref} from "vue";
import {useI18n} from "/@/hooks/web/useI18n";
import {clientStore} from "/@/store/modules/client";
import {locationStore} from "/@/store/modules/location";
import {botStore} from "/@/store/modules/bot";
import {productTypeStore} from "/@/store/modules/productType";
import {staffStore} from "/@/store/modules/staff";
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

export const getBotField = (): FormSchema => {
  const botList = computed(() => {
    return botStore.getListForSelectFormatted;
  });

  return {
    field: 'source_id',
    component: 'Select',
    label: t('routes.logic.staff.stokers.fields.bot'),
    colProps: {
      span: 24,
    },
    componentProps: {
      placeholder: '',
      options: unref(botList),
      showSearch: true,
      filterOption(input: any, option: any) {
        return (
          option.label.toLowerCase().indexOf(input.toLowerCase()) >= 0
        );
      },
    },
  };
};

export const getProductTypesField = (): FormSchema => {
  const productTypeList = computed(() => {
    return productTypeStore.getListForSelectFormatted;
  });

  return {
    field: 'product_type_ids',
    component: 'Select',
    label: t('routes.logic.staff.stokers.fields.productTypes'),
    colProps: {
      span: 24,
    },
    componentProps: {
      mode: 'multiple',
      placeholder: '',
      options: unref(productTypeList),
      showSearch: true,
      filterOption(input: any, option: any) {
        return (
          option.label.toLowerCase().indexOf(input.toLowerCase()) >= 0
        );
      },
    },
  };
};

export const getLocationsField = (onlyRoot: boolean = false): FormSchema => {
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
      options: unref(locationList).filter(l => onlyRoot ? l.depth === 0 : true),
      showSearch: true,
      filterOption(input: any, option: any) {
        return (
          option.label.toLowerCase().indexOf(input.toLowerCase()) >= 0
        );
      },
    },
  };
};

export const getSalaryFields = (fieldPrefix: string = 'salary_', withNullOption: boolean = true): FormSchema[] => {
  const nullOption = withNullOption
    ? [
      {
        label: t('routes.basic.not_selected'),
        value: '',
      }
    ]
    : [];

  const typeField = fieldPrefix + 'type';
  const amountField = fieldPrefix + 'amount';
  const percentField = fieldPrefix + 'percent';

  return [
    {
      field: typeField,
      component: 'RadioGroup',
      label: t('routes.logic.staff.salary.fields.type'),
      defaultValue: withNullOption ? '' : SalaryType.percent,
      colProps: {
        span: 16,
      },
      componentProps: {
        options: [
          ...nullOption,
          {
            label: t('routes.logic.staff.salary.fields.typePercent'),
            value: SalaryType.percent,
          },
          {
            label: t('routes.logic.staff.salary.fields.typeFixed'),
            value: SalaryType.fixed,
          },
        ],
      },
    },

    {
      field: percentField,
      component: 'InputNumber',
      label: t('routes.logic.staff.salary.fields.percent'),
      colProps: {
        span: 8,
      },
      show: (renderCallbackParams: RenderCallbackParams) => renderCallbackParams.values[typeField] === SalaryType.percent,
      componentProps: {
        min: 0,
        max: 100,
        step: .01
      },
    },

    {
      field: amountField,
      component: 'InputNumber',
      label: t('routes.logic.staff.salary.fields.amount'),
      colProps: {
        span: 8,
      },
      show: (renderCallbackParams: RenderCallbackParams) => renderCallbackParams.values[typeField] === SalaryType.fixed,
      componentProps: {
        min: 0,
        step: 1
      },
    },
  ];
};

export const getStaffField = (show?: (renderCallbackParams: RenderCallbackParams) => boolean): FormSchema => {
  const staffList = computed(() => {
    return staffStore.getListForSelectFormatted;
  });

  return {
    field: 'staff',
    component: 'Select',
    label: '',
    colProps: {
      span: 24,
    },
    show,
    componentProps: {
      mode: 'multiple',
      placeholder: '',
      options: unref(staffList),
      showSearch: true,
      filterOption(input: any, option: any) {
        return (
          option.label.toLowerCase().indexOf(input.toLowerCase()) >= 0
        );
      },
    },
  };
};