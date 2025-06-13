import { debounce, throttle } from '../src/index';

describe('debounce', () => {
  jest.useFakeTimers();
  
  it('should call the function only once after delay', () => {
    const mockFn = jest.fn();
    const debouncedFn = debounce(mockFn, 100);
    
    debouncedFn();
    debouncedFn();
    
    jest.advanceTimersByTime(50);
    expect(mockFn).not.toHaveBeenCalled();
    
    jest.advanceTimersByTime(50);
    expect(mockFn).toHaveBeenCalledTimes(1);
  });
  
  it('should call immediately when immediate is true', () => {
    const mockFn = jest.fn();
    const debouncedFn = debounce(mockFn, 100, true);
    
    debouncedFn();
    expect(mockFn).toHaveBeenCalledTimes(1);
    
    debouncedFn();
    jest.advanceTimersByTime(100);
    expect(mockFn).toHaveBeenCalledTimes(1);
  });
});

describe('throttle', () => {
  jest.useFakeTimers();
  
  it('should call the function at most once per interval', () => {
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