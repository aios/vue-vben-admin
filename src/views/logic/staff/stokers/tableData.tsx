import { FormProps } from '/@/components/Table';
import { BasicColumn } from '/@/components/Table/src/types/table';
import { useI18n } from '/@/hooks/web/useI18n';
import {
  getClientFilterSchema,
  getLocationFilterSchema,
  getProductTypeFilterSchema,
  getBotFilterSchema,
} from "/@/views/logic/staff/common/table";

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
      title: t('routes.logic.staff.fields.client'),
      dataIndex: 'client',
      slots: { customRender: 'client' },
      width: 160,
    },
    {
      title: t('routes.logic.staff.stokers.fields.bot'),
      dataIndex: 'bot',
      slots: { customRender: 'bot' },
      width: 160,
    },
    {
      title: t('routes.logic.staff.fields.locations'),
      dataIndex: 'client',
      slots: { customRender: 'locations' },
      width: 180,
    },
    {
      title: t('routes.logic.staff.stokers.fields.productTypes'),
      dataIndex: 'client',
      slots: { customRender: 'productTypes' },
      width: 180,
    },
    {
      title: t('routes.logic.staff.fields.salary'),
      dataIndex: 'salary',
      slots: { customRender: 'salary' },
      width: 80,
    },
    {
      title: t('routes.logic.staff.fields.unpaid_salary'),
      dataIndex: 'unpaid_salary',
      slots: { customRender: 'unpaid_salary' },
      width: 80,
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
      getClientFilterSchema(),
      getBotFilterSchema(),
      getLocationFilterSchema(),
      getProductTypeFilterSchema(),
    ],
  };
}