import {FormSchema} from "/@/components/Form";
import {useI18n} from "/@/hooks/web/useI18n";
import {computed, unref} from "vue";
import {driverStore} from "/@/store/modules/driver";
import {
  Errors,
  getClientField,
  getLocationsField,
  getSalaryFields,
  handleErrors
} from "/@/views/logic/staff/common/schemas";
const { t } = useI18n();

export const getSchemas = (errors?: Errors): FormSchema[] => {
  const permissionsList = computed(() => {
    return driverStore.getPermissionsListForSelect;
  });

  const schema: FormSchema[] =  [
    {
      field: 'name',
      component: 'Input',
      label: t('routes.logic.staff.drivers.fields.name'),
      colProps: {
        span: 24,
      },
    },

    getClientField(),

    getLocationsField(),

    {
      field: 'permissions',
      component: 'CheckboxGroup',
      label: t('routes.logic.staff.drivers.fields.permissions'),
      colProps: {
        span: 24,
      },
      componentProps: {
        options: unref(permissionsList),
      },
    },

    ...getSalaryFields(),
  ];

  return handleErrors(schema, errors);
};