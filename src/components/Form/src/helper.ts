import type { ComponentType } from './types/index';
import { useI18n } from '/@/hooks/web/useI18n';

const { t } = useI18n('component.form');

/**
 * @description: __Some-New-Token__placeholder
 */
export function createPlaceholderMessage(component: ComponentType) {
  if (component.includes('Input') || component.includes('Complete')) {
    return t('input');
  }
  if (component.includes('Picker')) {
    return t('choose');
  }
  if (
    component.includes('Select') ||
    component.includes('Cascader') ||
    component.includes('Checkbox') ||
    component.includes('Radio') ||
    component.includes('Switch')
  ) {
    // return `请选择${label}`;
    return t('choose');
  }
  return '';
}

function genType() {
  return ['DatePicker', 'MonthPicker', 'RangePicker', 'WeekPicker', 'TimePicker'];
}

/**
 * __Some-New-Token__
 */
export const dateItemType = genType();
