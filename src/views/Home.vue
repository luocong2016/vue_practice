<script lang="tsx">
import { Options, Vue } from 'vue-class-component';
import HelloWorld from '@/components/HelloWorld.vue';
import { Button } from 'ant-design-vue';

@Options({
  components: {
    HelloWorld,
    Button
  }
})
export default class Home extends Vue {
  $refs!: {
    input: HTMLInputElement;
  };

  /* $data */
  message = 'author';
  name = 'lutz';

  /* hoock */
  mounted() {
    this.$refs.input.focus();
  }

  render() {
    return (
      <div class="home">
        <div>vue-class-component</div>
        <img alt="Vue logo" src={require('@/assets/logo.png')} />
        <Button type="primary" ghost>
          Primary
        </Button>
        <HelloWorld msg="ss" />
        <div>{this.name}</div>
        <input ref="input" type="text" v-model={this.name} />
      </div>
    );
  }
}
</script>
