import { isPromise } from './validate';

export type Interceptor = (...args: any[]) => Promise<boolean> | boolean;

export function callInterceptor(options: {
  intercetor?: Interceptor;
  args?: any[];
  done: () => void;
  canceled?: () => void;
}) {
  const { intercetor, args, done, canceled } = options;
  if (intercetor) {
    // eslint-disable-next-line prefer-spread
    const returnVal = intercetor.apply(null, args || []);

    if (isPromise(returnVal)) {
      returnVal.then((val) => {
        if (val) {
          done();
        } else if (canceled) {
          canceled();
        }
      });
    } else if (returnVal) {
      done();
    } else if (canceled) {
      canceled();
    }
  } else {
    done();
  }
}
