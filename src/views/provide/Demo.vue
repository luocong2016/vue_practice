<template>
  <todo-list>
    <todo-list-item text="lutz" />
    <todo-list-item text="haha" />
    <todo-list-item text="coco" />
    <todo-list-item text="bukn" />
  </todo-list>
</template>

<script>
import { defineComponent } from 'vue';

import TodoListItem from './Item.vue';
import TodoList from './List.vue';

export default defineComponent({
  name: 'Demo',
  components: {
    TodoList,
    TodoListItem
  }
});
</script>
