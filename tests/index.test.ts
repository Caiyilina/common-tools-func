import { debounce, throttle, deepClone } from "../src/index";

describe("debounce", () => {
  jest.useFakeTimers();

  it("should call the function only once after delay", () => {
    const mockFn = jest.fn();
    const debouncedFn = debounce(mockFn, 100);

    debouncedFn();
    debouncedFn();

    jest.advanceTimersByTime(50);
    expect(mockFn).not.toHaveBeenCalled();

    jest.advanceTimersByTime(50);
    expect(mockFn).toHaveBeenCalledTimes(1);
  });

  it("should call immediately when immediate is true", () => {
    const mockFn = jest.fn();
    const debouncedFn = debounce(mockFn, 100, true);

    debouncedFn();
    expect(mockFn).toHaveBeenCalledTimes(1);

    debouncedFn();
    jest.advanceTimersByTime(100);
    expect(mockFn).toHaveBeenCalledTimes(1);
  });
});

describe("throttle", () => {
  jest.useFakeTimers();

  it("should call the function at most once per interval", () => {
    const mockFn = jest.fn();
    const throttledFn = throttle(mockFn, 100);

    throttledFn();
    expect(mockFn).toHaveBeenCalledTimes(1);

    throttledFn();
    expect(mockFn).toHaveBeenCalledTimes(1);

    jest.advanceTimersByTime(100);
    throttledFn();
    expect(mockFn).toHaveBeenCalledTimes(2);
  });
});

describe("deepClone", () => {
  it("should clone primitive values", () => {
    expect(deepClone(42)).toBe(42);
    expect(deepClone("string")).toBe("string");
    expect(deepClone(true)).toBe(true);
    expect(deepClone(null)).toBe(null);
    expect(deepClone(undefined)).toBe(undefined);
  });

  it("should clone Date objects", () => {
    const date = new Date();
    const clonedDate = deepClone(date);
    expect(clonedDate).not.toBe(date);
    expect(clonedDate.getTime()).toBe(date.getTime());
  });

  it("should clone RegExp objects", () => {
    const regex = /test/g;
    const clonedRegex = deepClone(regex);
    expect(clonedRegex).not.toBe(regex);
    expect(clonedRegex.source).toBe(regex.source);
    expect(clonedRegex.flags).toBe(regex.flags);
  });

  it("should clone arrays", () => {
    const arr: (number | { a: number })[] = [1, 2, { a: 3 }];
    const clonedArr = deepClone(arr);
    expect(clonedArr).not.toBe(arr);
    expect(clonedArr).toEqual(arr);

    (clonedArr[2] as { a: number }).a = 4;
    expect((arr[2] as { a: number }).a).toBe(3);
  });

  it("should clone objects", () => {
    const obj = { a: 1, b: { c: 2 } };
    const clonedObj = deepClone(obj);
    expect(clonedObj).not.toBe(obj);
    expect(clonedObj).toEqual(obj);

    clonedObj.b.c = 3;
    expect(obj.b.c).toBe(2);
  });
});
