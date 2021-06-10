import { customRef } from 'vue';

export function useDebouncedRef(value: unknown, delay = 200) {
  let timer: undefined | number;
  return customRef((track, trigger) => {
    return {
      get() {
        track();
        return value;
      },
      set(nVal) {
        timer && clearTimeout(timer);
        timer = setTimeout(() => {
          value = nVal;
          trigger();
        }, delay);
      }
    };
  });
}
