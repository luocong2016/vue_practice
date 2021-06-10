import { createBEM } from './bem';

export const namespace = 'dg-';

export function createNamespace(name: string) {
  const prefixedName = `${namespace}${name}`;
  return [prefixedName, createBEM(prefixedName)] as const;
}
