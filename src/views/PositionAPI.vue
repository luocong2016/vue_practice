<template>
  <div>{{ b }}</div>
  <div>{{ n }}</div>
  <div>{{ o }}</div>
  <hr />
  <div>{{ text }}</div>
  <input type="text" v-model="text" />
</template>

<script>
import { defineComponent, isProxy, reactive, readonly, ref, toRaw } from 'vue';
import { useDebouncedRef } from '@/use';

export default defineComponent({
  setup() {
    const b = ref(true);
    const n = readonly(1);
    const o = readonly({ name: 'lutz' });

    console.log('isProxy(bool)', isProxy(b)); // false
    console.log('isProxy(n)', isProxy(n)); // false
    console.log('isProxy(o)', isProxy(o)); // true

    const foo = { age: 1 };
    const reactiveFoo = reactive(foo);
    const toRawFoo = toRaw(reactiveFoo);

    foo.age = 1;
    console.log(foo, toRawFoo); // {age: 1} {age: 1}

    toRawFoo.age = 2;
    console.log(foo, toRawFoo); // {age: 2} {age: 2}

    reactiveFoo.age = 3;
    console.log(foo, toRawFoo); // {age: 3} {age: 3}

    console.log('toRawFoo === foo', toRawFoo === foo);

    /*
      useDebouncedRef('hello')
      CustomRefImpl {
        __v_isRef: true,
        _get: f(),
        _set: f(nVal),
        value: 'hello'
      }
    */

    return {
      text: useDebouncedRef('hello'),
      b,
      n,
      o
    };
  }
});
</script>
