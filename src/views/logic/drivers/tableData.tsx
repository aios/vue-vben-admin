import { FormProps } from '/@/components/Table';
import { BasicColumn } from '/@/components/Table/src/types/table';
import { useI18n } from '/@/hooks/web/useI18n';
import { computed } from 'vue';
import {clientStore} from '/@/store/modules/client';
import {locationStore} from '/@/store/modules/location';

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
      title: t('routes.logic.staff.drivers.fields.client'),
      dataIndex: 'client',
      slots: { customRender: 'client' },
      width: 160,
    },
    {
      title: t('routes.logic.staff.drivers.fields.locations'),
      dataIndex: 'client',
      slots: { customRender: 'locations' },
      width: 180,
    },
    {
      title: t('routes.logic.staff.drivers.fields.salary'),
      dataIndex: 'salary',
      slots: { customRender: 'salary' },
      width: 80,
    },
    {
      title: t('routes.logic.staff.drivers.fields.unpaid_salary'),
      dataIndex: 'unpaid_salary',
      slots: { customRender: 'unpaid_salary' },
      width: 80,
    },
  ];
}
export function getFormConfig(): Partial<FormProps> {
  const clientList = computed(() => {
    return clientStore.getListForSelectFormatted;
  });

  const locationList = computed(() => {
    return locationStore.getListForSelectFormatted;
  });

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
      {
        field: `client_id`,
        label: '',
        component: 'Select',
        defaultValue: null,
        componentProps: {
          placeholder: t('routes.logic.staff.drivers.fields.client'),
          options: clientList,
          showSearch: true,
          filterOption(input: any, option: any) {
            return (
              option.label.toLowerCase().indexOf(input.toLowerCase()) >= 0
            );
          },
        },
        colProps: {
          lg: 6,
          xl: 4,
          xxl: 4,
        },
      },
      {
        field: `location_id`,
        label: '',
        component: 'Select',
        defaultValue: null,
        componentProps: {
          placeholder: t('routes.logic.staff.drivers.fields.location'),
          options: locationList,
          showSearch: true,
          filterOption(input: any, option: any) {
            return (
              option.label.toLowerCase().indexOf(input.toLowerCase()) >= 0
            );
          },
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