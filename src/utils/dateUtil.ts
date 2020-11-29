import { isObject, isString } from '/@/utils/is';
import moment from 'moment';

const DATE_TIME_FORMAT = 'YYYY-MM-DD HH:mm';
const DATE_FORMAT = 'YYYY-MM-DD ';

export function formatToDateTime(date: moment.MomentInput = null): string {
  return moment(date).format(DATE_TIME_FORMAT);
}

export function formatToDate(date: moment.MomentInput = null): string {
  return moment(date).format(DATE_FORMAT);
}

export const formatAgo = (str: string | number) => {
  if (!str) return '';
  const date = new Date(Number(str));
  const time = new Date().getTime() - date.getTime(); // __Some-New-Token__-__Some-New-Token__ = __Some-New-Token__（__Some-New-Token__ = __Some-New-Token__）
  if (time < 0) {
    return '';
  } else if (time / 1000 < 30) {
    return '__Some-New-Token__';
  } else if (time / 1000 < 60) {
    return parseInt(String(time / 1000)) + '__Some-New-Token__';
  } else if (time / 60000 < 60) {
    return parseInt(String(time / 60000)) + '__Some-New-Token__';
  } else if (time / 3600000 < 24) {
    return parseInt(String(time / 3600000)) + '__Some-New-Token__';
  } else if (time / 86400000 < 31) {
    return parseInt(String(time / 86400000)) + '__Some-New-Token__';
  } else if (time / 2592000000 < 12) {
    return parseInt(String(time / 2592000000)) + '__Some-New-Token__';
  } else {
    return parseInt(String(time / 31536000000)) + '__Some-New-Token__';
  }
};
/**
 * @description: __Some-New-Token__
 */
export function formatRequestDate(params: any) {
  for (const key in params) {
    if (params[key] && params[key]._isAMomentObject) {
      params[key] = params[key].format(DATE_TIME_FORMAT);
    }
    if (isString(key)) {
      const value = params[key];
      if (value) {
        try {
          params[key] = isString(value) ? value.trim() : value;
        } catch (error) {
          throw new Error(error);
        }
      }
    }
    if (isObject(params[key])) {
      formatRequestDate(params[key]);
    }
  }
}

export const dateUtil = moment;
