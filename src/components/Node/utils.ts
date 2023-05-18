import { isRef, toRef } from "vue";

export const toRefByPath = (object: any, path: string[] | string, separator = '.') => {
  const pathArr = Array.isArray(path) ? path : path.split(separator);
  let target = object;
  const lastIndex = pathArr.length - 1;
  for (const [index, step] of pathArr.entries()) {
    if (index === lastIndex) {
      return toRef(target, pathArr[lastIndex]);
    }
    target = target && typeof target === 'object' && step in target ? target[step] : undefined;
  }
}

export const getByPath = (object: any, path: string[] | string, separator = '.') => {
  const pathArr = Array.isArray(path) ? path : path.split(separator);
  let target = object;
  for (const step of pathArr) {
    target = target && typeof target === 'object' && step in target ? target[step] : undefined;
  }
  return target;
}