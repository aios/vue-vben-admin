import { FormProps } from '/@/components/Table';
import { BasicColumn } from '/@/components/Table/src/types/table';
import { useI18n } from '/@/hooks/web/useI18n';
import {getClientFilterSchema, getLocationFilterSchema} from "/@/views/logic/staff/common/table";

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
      title: t('routes.logic.staff.drivers.fields.name'),
      dataIndex: 'name',
      sorter: true,
      width: 160,
    },
    {
      title: t('routes.logic.staff.fields.client'),
      dataIndex: 'client',
      slots: { customRender: 'client' },
      width: 160,
    },
    {
      title: t('routes.logic.staff.fields.locations'),
      dataIndex: 'client',
      slots: { customRender: 'locations' },
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
      {
        field: `name`,
        label:'',
        component: 'Input',
        componentProps: {
          placeholder: t('routes.logic.staff.drivers.fields.name'),
        },
        colProps: {
          lg: 6,
          xl: 4,
          xxl: 4,
        },
      },
      getClientFilterSchema(),
      getLocationFilterSchema(),
    ],
  };
}