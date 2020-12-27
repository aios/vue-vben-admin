import type { ValidationRule } from 'ant-design-vue/lib/form/Form';
import type { ComponentType } from './types/index';
import { useI18n } from '/@/hooks/web/useI18n';

const { t } = useI18n();

/**
 * @description: __Some-New-Token__placeholder
 */
export function createPlaceholderMessage(component: ComponentType) {
  if (component.includes('Input') || component.includes('Complete')) {
    return t('component.form.input');
  }
  if (component.includes('Picker')) {
    return t('component.form.choose');
  }
  if (
    component.includes('Select') ||
    component.includes('Cascader') ||
    component.includes('Checkbox') ||
    component.includes('Radio') ||
    component.includes('Switch')
  ) {
    // return `请选择${label}`;
    return t('component.form.choose');
  }
  return '';
}

function genType() {
  return ['DatePicker', 'MonthPicker', 'RangePicker', 'WeekPicker', 'TimePicker'];
}

export function setComponentRuleType(rule: ValidationRule, component: ComponentType) {
  if (['DatePicker', 'MonthPicker', 'WeekPicker', 'TimePicker'].includes(component)) {
    rule.type = 'object';
  } else if (['RangePicker', 'Upload', 'CheckboxGroup', 'TimePicker'].includes(component)) {
    rule.type = 'array';
  } else if (['InputNumber'].includes(component)) {
    rule.type = 'number';
  }
}

/**
 * __Some-New-Token__
 */
export const dateItemType = genType();
