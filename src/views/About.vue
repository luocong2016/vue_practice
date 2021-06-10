<template>
  <div class="about">
    <h1>This is an about page</h1>
    <input type="text" id="input" @click="onClick" />
    <button @click="handleClick">click</button>

    <hr />

    <tree-select />

    <hr />
    <scrollbar />
    <hr />

    <empty
      image="https://img.yzcdn.cn/vant/custom-empty-image.png"
      description="描述文字"
    />
    <empty description="描述文字" />
    <empty image="error" description="描述文字" />
  </div>
</template>

<script>
import TreeSelect from '@/components/tree-select';
import Empty from '@/components/empty';
import { trigger } from '@/utils/dom/event';
import Scrollbar from '@/components/scrollbar';

export default {
  components: { Empty, TreeSelect, Scrollbar },
  mixins: [{ hello: 'lutz', a: 'a' }],
  data() {
    return {};
  },
  methods: {
    handleClick() {
      const input = document.getElementById('input');
      trigger(input, 'click');
    },
    onClick() {
      console.log(1);

      setTimeout(function () {
        console.log('2');
        process.nextTick(function () {
          console.log('3');
        });
        new Promise(function (resolve) {
          console.log('4');
          resolve();
        }).then(function () {
          console.log('5');
        });
      });

      this.$nextTick(function () {
        console.log('6');
      });

      new Promise(function (resolve) {
        console.log('7');
        resolve();
      }).then(function () {
        console.log('8');
      });

      setTimeout(() => {
        console.log('9');
        this.$nextTick(function () {
          console.log('10');
        });
        new Promise(function (resolve) {
          console.log('11');
          resolve();
        }).then(function () {
          console.log('12');
        });
      });

      this.$nextTick(function () {
        console.log('13');
      });
    }
  },
  mounted() {
    console.log(this.$options.hello);
  }
};
</script>
