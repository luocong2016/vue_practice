import { defineComponent, ref } from 'vue';
import { createNamespace } from '@/utils';
const [name, bem] = createNamespace('scrollbar');

export default defineComponent({
  name,

  props: {
    vertical: Boolean,
    size: String,
    move: Number
  },

  setup() {
    const thumb = ref(null);

    const clickTrackHandler = (e: any) => {
      e;
      debugger;
    };

    const clickThumbHandler = (e: any) => {
      if (e.ctrlKey || e.button === 2) {
        return;
      }
      console.log(thumb.value);
    };

    return () => (
      <div onMousedown={clickTrackHandler}>
        <div ref="thumb" onMousedown={clickThumbHandler}>
          1111111
        </div>
      </div>
    );
  }
});
