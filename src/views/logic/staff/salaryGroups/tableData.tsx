import { FormProps } from '/@/components/Table';
import { BasicColumn } from '/@/components/Table/src/types/table';
import { useI18n } from '/@/hooks/web/useI18n';
import {getLocationFilterSchema, getStaffFilterSchema} from "/@/views/logic/staff/common/table";
import {SalaryGroupDivideType} from "/@/api/logic/salaryGroup/model";
import {SalaryType} from "/@/api/logic/salary/model";

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
      title: t('routes.logic.staff.salaryGroups.fields.name'),
      dataIndex: 'name',
      width: 160,
    },
    {
      title: t('routes.logic.staff.salaryGroups.fields.staff'),
      dataIndex: 'staff',
      width: 160,
      slots: { customRender: 'staff' },
    },
    {
      title: t('routes.logic.staff.salaryGroups.fields.displayValue'),
      dataIndex: 'display_value',
      width: 160,
      slots: { customRender: 'displayValue' },
    },
    {
      title: t('routes.logic.staff.salaryGroups.fields.active'),
      dataIndex: 'active',
      width: 160,
      slots: { customRender: 'active' },
    },
    {
      title: t('routes.logic.staff.fields.locations'),
      dataIndex: 'client',
      slots: { customRender: 'locations' },
      width: 180,
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
    submitFunc: (): Promise<void> => {
      console.log('');

      return Promise.resolve();
    },
    schemas: [
      {
        field: `name`,
        label:'',
        component: 'Input',
        componentProps: {
          placeholder: t('routes.logic.staff.salaryGroups.fields.name'),
        },
        colProps: {
          lg: 6,
          xl: 4,
          xxl: 4,
        },
      },

      getStaffFilterSchema(),

      {
        field: `type`,
        label: '',
        component: 'Select',
        defaultValue: null,
        componentProps: {
          placeholder: t('routes.logic.staff.salary.fields.salaryType'),
          options: [
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
        colProps: {
          lg: 8,
          xl: 5,
          xxl: 5,
        },
      },

      {
        field: `divide_type`,
        label: '',
        component: 'Select',
        defaultValue: null,
        componentProps: {
          placeholder: t('routes.logic.staff.salaryGroups.fields.divideType'),
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
        colProps: {
          lg: 8,
          xl: 5,
          xxl: 5,
        },
      },

      getLocationFilterSchema(true),
    ],
  };
}