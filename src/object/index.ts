// 深拷贝对象
export function deepClone<T>(obj: T): T {
  if (obj === null || typeof obj !== "object") {
    return obj;
  }

  // 处理Date对象
  if (obj instanceof Date) {
    return new Date(obj.getTime()) as T;
  }

  // 处理RegExp对象
  if (obj instanceof RegExp) {
    return new RegExp(obj.source, obj.flags) as T;
  }

  // 处理数组
  if (Array.isArray(obj)) {
    const arrCopy = new Array(obj.length) as T[];
    for (let i = 0; i < obj.length; i++) {
      if (Object.prototype.hasOwnProperty.call(obj, i)) {
        arrCopy[i] = deepClone(obj[i]);
      }
    }
    return arrCopy as T;
  }

  // 处理普通对象
  const objClone = {} as T;
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      objClone[key] = deepClone(obj[key]);
    }
  }

  return objClone;
}
