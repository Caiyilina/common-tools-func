"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deepClone = deepClone;
// 深拷贝对象
function deepClone(obj) {
    if (obj === null || typeof obj !== "object") {
        return obj;
    }
    // 处理Date对象
    if (obj instanceof Date) {
        return new Date(obj.getTime());
    }
    // 处理RegExp对象
    if (obj instanceof RegExp) {
        return new RegExp(obj.source, obj.flags);
    }
    // 处理数组
    if (Array.isArray(obj)) {
        const arrCopy = new Array(obj.length);
        for (let i = 0; i < obj.length; i++) {
            if (Object.prototype.hasOwnProperty.call(obj, i)) {
                arrCopy[i] = deepClone(obj[i]);
            }
        }
        return arrCopy;
    }
    // 处理普通对象
    const objClone = {};
    for (const key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            objClone[key] = deepClone(obj[key]);
        }
    }
    return objClone;
}
