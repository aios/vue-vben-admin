import { FormProps } from '/@/components/Table';
import { BasicColumn } from '/@/components/Table/src/types/table';
import { useI18n } from '/@/hooks/web/useI18n';

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
    },
    {
      title: t('routes.logic.staff.drivers.fields.client'),
      dataIndex: 'client',
      slots: { customRender: 'client' },
    },
    {
      title: t('routes.logic.staff.drivers.fields.salary'),
      dataIndex: 'salary',
      slots: { customRender: 'salary' },
    },
    {
      title: t('routes.logic.staff.drivers.fields.unpaid_salary'),
      dataIndex: 'unpaid_salary',
      slots: { customRender: 'unpaid_salary' },
    },
  ];
}
export function getFilters(): Partial<FormProps> {
  return {
    // labelWidth: 80,
    size: 'small',
    schemas: [
      {
        field: `name`,
        label: t('routes.logic.staff.drivers.fields.name'),
        // label: '',
        component: 'Input',
        colProps: {
          lg: 6,
          xl: 4,
          xxl: 3,
        },
      },
      // {
      //   field: `field11`,
      //   label: `__Some-New-Token__33`,
      //   component: 'Select',
      //   defaultValue: '1',
      //   componentProps: {
      //     options: [
      //       {
      //         label: '__Some-New-Token__1',
      //         value: '1',
      //       },
      //       {
      //         label: '__Some-New-Token__2',
      //         value: '2',
      //       },
      //     ],
      //   },
      //   colProps: {
      //     xl: 12,
      //     xxl: 8,
      //   },
      // },
    ],
  };
}