declare module '*.vue' {
  import type { DefineComponent } from 'vue';
  const Component: DefineComponent;
  export default Component;
}

declare namespace JSX {
  interface ElementAttributesProperty {
    props;
  }
}

declare const global: any;
