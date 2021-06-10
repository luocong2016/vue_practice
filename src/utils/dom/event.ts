/**
 * 阻止冒泡
 * @param event Event DOM事件
 */
export function stopPropagation(event: Event) {
  event.stopPropagation();
}

/**
 * 阻止默认事件，阻止冒泡
 * @param event Event DOM事件
 * @param isStopPropagation Boolean 是否阻止冒泡
 */
export function preventDefault(event: Event, isStopPropagation?: boolean) {
  if (typeof event.cancelBubble !== 'boolean' || event.cancelable) {
    event.preventDefault();
  }

  if (isStopPropagation) {
    stopPropagation(event);
  }
}

/**
 * 触发DOM元素事件
 * @param target Element 目标DOM
 * @param type 事件名称
 */
export function trigger(target: Element, type: string) {
  let inputEvent;
  // https://developer.mozilla.org/en-US/docs/Web/API/Document/createEvent
  try {
    inputEvent = new CustomEvent(type, { bubbles: true, cancelable: true });
  } catch {
    inputEvent = document.createEvent('HTMLEvents');
    inputEvent.initEvent(type, true, true);
  }
  target.dispatchEvent(inputEvent);
}
