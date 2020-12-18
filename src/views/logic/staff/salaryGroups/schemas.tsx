import {FormSchema, RenderCallbackParams} from "/@/components/Form";
import {useI18n} from "/@/hooks/web/useI18n";
import {
  Errors,
  getLocationsField,
  getSalaryFields,
  getStaffField,
  handleErrors
} from "/@/views/logic/staff/common/schemas";
import {SalaryGroupDivideType, SalaryGroupGroup} from "/@/api/logic/salaryGroup/model";
const { t } = useI18n();

export const getSchemas = (errors?: Errors): FormSchema[] => {
  const locationsField = getLocationsField(true);

  const schema: FormSchema[] =  [
    {
      field: 'name',
      component: 'Input',
      label: t('routes.logic.staff.salaryGroups.fields.name'),
      colProps: {
        span: 24,
      },
    },

    ...getSalaryFields('', false),

    {
      field: 'divide_type',
      component: 'RadioGroup',
      label: '',
      defaultValue: SalaryGroupDivideType.all,
      colProps: {
        span: 16,
      },
      componentProps: {
        options: [
          {
            label: t('routes.logic.staff.salaryGroups.fields.divideTypeAll'),
            value: SalaryGroupDivideType.all,
          },
          {
            label: t('routes.logic.staff.salaryGroups.fields.divideTypeEach'),
            value: SalaryGroupDivideType.each,
          },
        ],
      },
    },

    {
      field: 'group',
      component: 'RadioGroup',
      label: t('routes.logic.staff.salaryGroups.fields.staff'),
      defaultValue: null,
      colProps: {
        span: 16,
      },
      componentProps: {
        options: [
          {
            label: t('routes.logic.staff.salaryGroups.fields.allDrivers'),
            value: SalaryGroupGroup.drivers,
          },
          {
            label: t('routes.logic.staff.salaryGroups.fields.allOperators'),
            value: SalaryGroupGroup.operators,
          },
          {
            label: t('routes.logic.staff.salaryGroups.fields.allStokers'),
            value: SalaryGroupGroup.stokers,
          },
          {
            label: t('routes.logic.staff.salaryGroups.fields.chose'),
            value: null,
          },
        ],
      },
    },

    getStaffField(
      (renderCallbackParams: RenderCallbackParams): boolean => renderCallbackParams.values.group === null
    ),

    {
      field: 'all_locations',
      component: 'RadioGroup',
      label: t('routes.logic.staff.salaryGroups.fields.locations'),
      defaultValue: 1,
      colProps: {
        span: 16,
      },
      componentProps: {
        options: [
          {
            label: t('routes.logic.staff.salaryGroups.fields.allLocations'),
            value: 1,
          },
          {
            label: t('routes.logic.staff.salaryGroups.fields.chose'),
            value: 2,
          },
        ],
      },
    },

    {
      ...locationsField,
      label: '',
      show: (renderCallbackParams: RenderCallbackParams) => renderCallbackParams.values.all_locations === 2,
    },

    {
      field: 'active',
      component: 'Switch',
      label: t('routes.logic.staff.salaryGroups.fields.active'),
      defaultValue: true,
      colProps: {
        span: 16,
      },
      componentProps: {

      },
    },
  ];

  return handleErrors(schema, errors);
};