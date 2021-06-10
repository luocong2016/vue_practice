import { App } from 'vue';
import _ from 'lodash';

type EventShim = {
  new (...args: any[]): {
    $props: {
      onClick?: (...args: any[]) => void;
    };
  };
};

export type WithInstall<T> = T & { install(app: App): void } & EventShim;

// using any here because tsc will generate some weird results when using generics
export function withInstall<T>(options: any): WithInstall<T> {
  (options as Record<string, unknown>).install = (app: App) => {
    const { name } = options as any;
    app.component(name, options);
    app.component(_.camelCase(`-${name}`), options);
  };

  return options;
}
