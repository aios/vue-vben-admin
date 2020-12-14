import {FormSchema} from "/@/components/Form";
import {useI18n} from "/@/hooks/web/useI18n";
import {
  Errors,
  getClientField,
  getSalaryFields,
  handleErrors
} from "/@/views/logic/staff/common/schemas";

const { t } = useI18n();

export const getSchemas = (errors?: Errors): FormSchema[] => {
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

    ...getSalaryFields(),
  ];

  return handleErrors(schema, errors);
};