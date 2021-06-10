<script>
import { defineComponent, inject, getCurrentInstance } from 'vue';

export default defineComponent({
  name: 'TodoListItem',
  props: {
    text: String
  },
  setup(props) {
    const { ctx } = getCurrentInstance();

    inject('list').todoList.push(ctx);

    return () => <div>{props.text}</div>;
  }
});
</script>
