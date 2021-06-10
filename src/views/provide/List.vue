<template>
  <div>{{ todoList }}</div>
  <slot />
</template>

<script>
import { defineComponent, getCurrentInstance, provide, ref } from 'vue';

export default defineComponent({
  name: 'TodoList',
  setup() {
    const { ctx } = getCurrentInstance();

    provide('list', ctx);

    return {
      todoList: ref([])
    };
  }
});
</script>
