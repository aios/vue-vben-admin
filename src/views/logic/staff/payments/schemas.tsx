import {FormSchema} from "/@/components/Form";
import {useI18n} from "/@/hooks/web/useI18n";
import {
  Errors,
  getStaffField,
  handleErrors
} from "/@/views/logic/staff/common/schemas";
const { t } = useI18n();

export const getSchemas = (errors?: Errors, update: boolean = false): FormSchema[] => {
  const staffField: FormSchema = getStaffField(
    undefined
  );

  if (staffField.componentProps) {
    // @ts-ignore
    delete staffField.componentProps.mode;

    // @ts-ignore
    staffField.componentProps.disabled = update;
  }

  const schema: FormSchema[] =  [
    {
      ...staffField,
      label: t('routes.logic.staff.payments.fields.staff'),
    },

    {
      field: 'amount',
      component: 'InputNumber',
      label: t('routes.logic.staff.payments.fields.amount'),
      colProps: {
        span: 24,
      },
      componentProps: {
        min: 0,
        step: 1
      },
    },

    {
      field: 'done',
      component: 'Switch',
      label: t('routes.logic.staff.payments.fields.done'),
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