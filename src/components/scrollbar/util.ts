export type Bar = {
  offset: string;
  scroll: string;
  scrollSize: string;
  size: string;
  key: string;
  axis: string;
  client: string;
  direction: string;
};

export interface RenderThumbStyle {
  move: number;
  size: string;
  bar: Bar;
}

export const BAR_MAP: { [key: string]: Bar } = {
  vertical: {
    offset: 'offsetHeight',
    scroll: 'scrollTop',
    scrollSize: 'scrollHeight',
    size: 'height',
    key: 'vertical',
    axis: 'Y',
    client: 'clientY',
    direction: 'top'
  },
  horizontal: {
    offset: 'offsetWidth',
    scroll: 'scrollLeft',
    scrollSize: 'scrollWidth',
    size: 'width',
    key: 'horizontal',
    axis: 'X',
    client: 'clientX',
    direction: 'left'
  }
};

export function renderThumbStyle({ move, size, bar }: RenderThumbStyle) {
  const translate = `translate${bar.axis}(${move}%)`;
  return {
    transform: translate,
    msTransform: translate,
    webkitTransform: translate,
    [bar.size]: size
  };
}
