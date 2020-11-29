import { useMessage } from '/@/hooks/web/useMessage';
import { userStore } from '/@/store/modules/user';
import { useI18n } from '/@/hooks/web/useI18n';
const { createMessage } = useMessage();

const error = createMessage.error!;
export function checkStatus(status: number, msg: string): void {
  const { t } = useI18n('sys.api');
  switch (status) {
    case 400:
      error(`${msg}`);
      break;
    // 401: __Some-New-Token__
    // __Some-New-Token__，__Some-New-Token__
    // __Some-New-Token__，__Some-New-Token__。
    case 401:
      error(t('errMsg401'));
      userStore.loginOut(true);
      break;
    case 403:
      error(t('errMsg403'));
      break;
    // 404__Some-New-Token__
    case 404:
      error(t('errMsg404'));
      break;
    case 405:
      error(t('errMsg405'));
      break;
    case 408:
      error(t('errMsg408'));
      break;
    case 500:
      error(t('errMsg500'));
      break;
    case 501:
      error(t('errMsg501'));
      break;
    case 502:
      error(t('errMsg502'));
      break;
    case 503:
      error(t('errMsg503'));
      break;
    case 504:
      error(t('errMsg504'));
      break;
    case 505:
      error(t('errMsg505'));
      break;
    default:
  }
}
