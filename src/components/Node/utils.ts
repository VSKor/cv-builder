interface AnyObject {
  [key: string]: unknown | AnyObject;
}

export const getByPath = (object: unknown, path: string[] | string, toRef = false) => {
  const pathArr = Array.isArray(path) ? path : path.split('.');
  let target = object;
  const lastIndex = pathArr.length - 1;
  for (const [index, step] of pathArr.entries()) {
    if (toRef && index === lastIndex) {
      return [target, pathArr[lastIndex]];
    }
    target = target && typeof target === 'object' && step in target ? target[step] : undefined;
  }

  return [target];
}