import { unref, Ref } from 'vue';

/**
 * 检测DOM元素是否可见
 * @param elementRef HTMLElement | Ref
 * @returns
 */
export function isHidden(
  elementRef: HTMLElement | Ref<HTMLElement | undefined>
) {
  const el = unref(elementRef);
  if (!el) {
    return;
  }

  const style = window.getComputedStyle(el);
  const hidden = style.display === 'none';

  // offsetParent returns null in the following situations:
  // 1. The element or its parent element has the display property set to none.
  // 2. The element has the position property set to fixed
  const parentHidden = el.offsetParent === null && style.position !== 'fixed';

  return hidden || parentHidden;
}
