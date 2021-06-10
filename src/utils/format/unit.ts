import _ from 'lodash';
import { CSSProperties } from 'vue';
import { inBrowser } from '../base';

export function addUnit(value?: string | number): string | undefined {
  if (_.isNil(value)) {
    return void 0;
  }
  return _.isNumber(value) ? `${value}px` : String(value);
}

export function getSizeStyle(
  originSize?: string | number
): CSSProperties | undefined {
  if (_.isNil(originSize)) {
    const size = addUnit(originSize);
    return {
      width: size,
      height: size
    };
  }
}

export function getZIndexStyle(zIndex?: string | number) {
  const style: CSSProperties = {};
  if (zIndex !== undefined) {
    style.zIndex = +zIndex;
  }
  return style;
}

// cache
let rootFontSize: number;

function getRootFontSize() {
  if (!rootFontSize) {
    const doc = document.documentElement;
    const fontSize =
      doc.style.fontSize || window.getComputedStyle(doc).fontSize;
    rootFontSize = parseFloat(fontSize);
  }
  return rootFontSize;
}

function convertRem(value: string) {
  value = value.replace(/rem/g, '');
  return +value * getRootFontSize();
}

function convertVw(value: string) {
  value = value.replace(/vw/g, '');
  return (+value * window.innerWidth) / 100;
}

function convertVh(value: string) {
  value = value.replace(/vh/g, '');
  return (+value * window.innerHeight) / 100;
}

/**
 * css尺寸单位(rem、vw、vh)转换成px单位
 * @param value string|number
 * @returns number
 */
export function unitToPx(value: string | number): number {
  if (typeof value === 'number') {
    return value;
  }

  if (inBrowser) {
    if (value.includes('rem')) {
      return convertRem(value);
    }
    if (value.includes('vw')) {
      return convertVw(value);
    }
    if (value.includes('vh')) {
      return convertVh(value);
    }
  }

  return parseFloat(value);
}
