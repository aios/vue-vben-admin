import { Ref, unref, computed } from 'vue';
import { useI18n } from '/@/hooks/web/useI18n';
const { t } = useI18n('component.upload');
export function useUploadType({
  acceptRef,
  //   uploadTypeRef,
  helpTextRef,
  maxNumberRef,
  maxSizeRef,
}: {
  acceptRef: Ref<string[]>;
  //   uploadTypeRef: Ref<UploadTypeEnum>;
  helpTextRef: Ref<string>;
  maxNumberRef: Ref<number>;
  maxSizeRef: Ref<number>;
}) {
  // __Some-New-Token__
  const getAccept = computed(() => {
    // const uploadType = unref(uploadTypeRef);
    const accept = unref(acceptRef);
    if (accept && accept.length > 0) {
      return accept;
    }
    return [];
  });
  const getStringAccept = computed(() => {
    return unref(getAccept)
      .map((item) => `.${item}`)
      .join(',');
  });
  // __Some-New-Token__jpg、jpeg、png__Some-New-Token__，__Some-New-Token__2M，__Some-New-Token__10__Some-New-Token__，。
  const getHelpText = computed(() => {
    const helpText = unref(helpTextRef);
    if (helpText) {
      return helpText;
    }
    const helpTexts: string[] = [];

    const accept = unref(acceptRef);
    if (accept.length > 0) {
      helpTexts.push(t('accept', [accept.join(',')]));
    }

    const maxSize = unref(maxSizeRef);
    if (maxSize) {
      helpTexts.push(t('maxSize', [maxSize]));
    }

    const maxNumber = unref(maxNumberRef);
    if (maxNumber && maxNumber !== Infinity) {
      helpTexts.push(t('maxNumber', [maxNumber]));
    }
    return helpTexts.join('，');
  });
  return { getAccept, getStringAccept, getHelpText };
}
