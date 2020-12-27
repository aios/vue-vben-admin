import { onMounted, ref } from 'vue';
import { camelize } from '/@/components/util';

interface ScriptOptions {
  src: string;
}

interface ScriptData {
  [key: string]: any;
}

export function useScript(opts: ScriptOptions, data?: ScriptData) {
  const isLoading = ref(false);
  const error = ref(false);
  const success = ref(false);

  const promise = new Promise<void>((resolve, reject) => {
    onMounted(() => {
      const script = document.createElement('script');
      script.onload = function () {
        isLoading.value = false;
        success.value = true;
        error.value = false;
        resolve('');
      };

      script.onerror = function (err) {
        isLoading.value = false;
        success.value = false;
        error.value = true;
        reject(err);
      };

      script.src = opts.src;
      script.async = true;

      for (const dataKey in data) {
        if (data.hasOwnProperty(dataKey)) {
          const camelDataKey = camelize(dataKey);
          script.dataset[camelDataKey] = data[dataKey];
        }
      }

      const elem = document.getElementById('telegram_auth');

      if (!data) {
        document.head.appendChild(script);
      } else {
        elem?.appendChild(script);
      }
    });
  });

  return {
    isLoading,
    error,
    success,
    toPromise: () => promise,
  };
}
