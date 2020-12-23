import { FormProps } from '/@/components/Table';
import { BasicColumn } from '/@/components/Table/src/types/table';
import { useI18n } from '/@/hooks/web/useI18n';
import {getStaffFilterSchema} from "/@/views/logic/staff/common/table";

const { t } = useI18n();
export function getColumns(): BasicColumn[] {

  return [
    {
      title: 'ID',
      width: 80,
      sorter: true,
      dataIndex: 'id',
    },
    {
      title: t('routes.logic.staff.payments.fields.staff'),
      dataIndex: 'staff',
      width: 160,
      slots: { customRender: 'staff' },
    },
    {
      title: t('routes.logic.staff.payments.fields.amount'),
      dataIndex: 'amount',
      width: 160,
      slots: { customRender: 'amount' },
    },
    {
      title: t('routes.logic.staff.payments.fields.done'),
      dataIndex: 'done',
      width: 160,
      slots: { customRender: 'done' },
    },
    {
      title: t('routes.logic.staff.payments.fields.date'),
      dataIndex: 'date',
      slots: { customRender: 'date' },
      width: 160,
    },
  ];
}
export function getFormConfig(): Partial<FormProps> {
  return {
    submitButtonOptions: {
      text: t('routes.basic.search'),
    },
    labelWidth: 20,
    size: 'small',
    schemas: [
      getStaffFilterSchema(),

      {
        field: `date`,
        label: '',
        component: 'RangePicker',
        defaultValue: null,
        componentProps: {
          placeholder: t('routes.logic.staff.payments.fields.date'),
        },
        colProps: {
          lg: 8,
          xl: 5,
          xxl: 5,
        },
      },
    ],
  };
}