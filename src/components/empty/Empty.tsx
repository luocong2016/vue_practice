import { defineComponent } from 'vue';
import { createNamespace, getSizeStyle } from '@/utils';
import { Network } from './Network';

const [name, bem] = createNamespace('empty');
const PRESET_IMAGES: Record<string, string> = {
  error: require('@/assets/empty-image-error.png'),
  search: require('@/assets/empty-image-search.png'),
  default: require('@/assets/empty-image-default.png')
};

export default defineComponent({
  name,

  props: {
    imageSize: [Number, String],
    description: String,
    image: {
      type: String,
      default: 'default'
    }
  },

  setup(props, { slots }) {
    const renderImage = () => {
      if (slots.image) {
        return slots.image();
      }
      let image = props.image;
      if (image === 'network') {
        return Network;
      }
      if (PRESET_IMAGES[image]) {
        image = PRESET_IMAGES[image];
      }
      return <img src={image} />;
    };

    const renderDescription = () => {
      const description = slots.description
        ? slots.description()
        : props.description;

      if (description) {
        return <p class={bem('description')}>{description}</p>;
      }
    };

    const renderBottom = () => {
      if (slots.default) {
        return <div class={bem('bottom')}>{slots.default()}</div>;
      }
    };

    return () => (
      <div class={bem()}>
        <div class={bem('image')} style={getSizeStyle(props.imageSize)}>
          {renderImage()}
        </div>
        {renderDescription()}
        {renderBottom()}
      </div>
    );
  }
});
