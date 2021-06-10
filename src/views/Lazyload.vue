<script lang="tsx">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    const imageList = ref([
      'https://img.yzcdn.cn/vant/apple-1.jpg',
      'https://img.yzcdn.cn/vant/apple-2.jpg'
    ]);

    const renderVLazyImg = () => {
      return imageList.value.map((img) => <img key={img} v-lazy={img} />);
    };

    const renderVLazyImgBg = () => {
      return imageList.value.map((img) => (
        <div key={img} v-lazy={[img, 'background-image']} />
      ));
    };

    return () => (
      <>
        <div>jsx-next</div>
        <h3>指令v-lazy</h3>
        {renderVLazyImg()}
        <h3>背景图懒加载</h3>
        {renderVLazyImgBg()}
        <h3>组件懒加载</h3>
        <lazy-component>{renderVLazyImg()}</lazy-component>
      </>
    );
  }
});
</script>

<style lang="less" scoped>
img {
  width: 200px;
}
div {
  display: inline-block;
  height: 200px;
  width: 200px;
  background-size: 100% 100%;
}
</style>
