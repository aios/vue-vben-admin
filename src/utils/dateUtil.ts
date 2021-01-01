import moment from 'moment';

const DATE_TIME_FORMAT = 'YYYY-MM-DD HH:mm';
const DATE_FORMAT = 'YYYY-MM-DD ';

export function formatToDateTime(
  date: moment.MomentInput = null,
  format = DATE_TIME_FORMAT
): string {
  return moment(date).format(format);
}

export function formatToDate(date: moment.MomentInput = null, format = DATE_FORMAT): string {
  return moment(date).format(format);
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

export const dateUtil = moment;
