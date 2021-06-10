import { isFunction, isObjectLike } from 'lodash';
import { inBrowser } from './base';

export function isPromise<T = any>(val: any): val is Promise<T> {
  return isObjectLike(val) && isFunction(val.then) && isFunction(val.catch);
}

export function isDate(val: unknown): val is Date {
  return (
    Object.prototype.toString.call(val) === '[object Date]' &&
    !Number.isNaN((val as Date).getTime())
  );
}

export function isMobile(value: string): boolean {
  value = value.replace(/[^-|\d]/g, '');
  // eslint-disable-next-line prettier/prettier
  return /^((\+86)|(86))?(1)\d{10}$/.test(value) || /^0[0-9-]{10,13}$/.test(value);
}

export function isNumeric(val: string | number): val is string {
  return typeof val === 'number' || /^\d+(\.\d+)?$/.test(val);
}

export function isAndroid(): boolean {
  return inBrowser ? /android/.test(navigator.userAgent.toLowerCase()) : false;
}

export function isIOS(): boolean {
  return inBrowser
    ? /ios|iphone|ipad|ipod/.test(navigator.userAgent.toLowerCase())
    : false;
}
