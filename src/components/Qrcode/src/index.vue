<template>
  <div>
    <component :is="tag" ref="wrapRef"></component>
  </div>
</template>
<script lang="ts">
  import { defineComponent, watchEffect, PropType, ref, unref } from 'vue';
  import { toCanvas, QRCodeRenderersOptions, LogoType } from './qrcodePlus';
  import { toDataURL } from 'qrcode';
  import { downloadByUrl } from '/@/utils/file/download';

  export default defineComponent({
    name: 'QrCode',
    emits: { done: (url: string) => !!url, error: (error: any) => !!error },
    props: {
      value: {
        type: [String, Array] as PropType<string | any[]>,
        default: null,
      },
      // __Some-New-Token__
      options: {
        type: Object as PropType<QRCodeRenderersOptions>,
        default: null,
      },
      // __Some-New-Token__
      width: {
        type: Number as PropType<number>,
        default: 200,
      },
      // __Some-New-Token__logo__Some-New-Token__
      logo: {
        type: [String, Object] as PropType<Partial<LogoType> | string>,
        default: '',
      },
      // img __Some-New-Token__logo
      tag: {
        type: String as PropType<'canvas' | 'img'>,
        default: 'canvas',
        validator: (v: string) => ['canvas', 'img'].includes(v),
      },
    },
    setup(props, { emit }) {
      const wrapRef = ref<HTMLCanvasElement | HTMLImageElement | null>(null);
      const urlRef = ref<string>('');
      async function createQrcode() {
        try {
          const { tag, value, options = {}, width, logo } = props;
          const renderValue = String(value);
          const wrapEl = unref(wrapRef);

          if (!wrapEl) return;

          if (tag === 'canvas') {
            const url: string = await toCanvas({
              canvas: wrapEl,
              width,
              logo: logo as any,
              content: renderValue,
              options: options || {},
            });
            urlRef.value = url;
            emit('done', url);
            return;
          }

          if (tag === 'img') {
            const url = await toDataURL(renderValue, {
              errorCorrectionLevel: 'H',
              width,
              ...options,
            });
            (unref(wrapRef) as HTMLImageElement).src = url;
            urlRef.value = url;
            emit('done', url);
          }
        } catch (error) {
          emit('error', error);
        }
      }
      /**
       * file download
       */
      function download(fileName?: string) {
        const url = unref(urlRef);
        if (!url) return;
        downloadByUrl({
          url,
          fileName,
        });
      }

      watchEffect(() => {
        setTimeout(() => {
          createQrcode();
        }, 30);
      });

      return { wrapRef, download };
    },
  });
</script>
