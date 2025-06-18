[English](./README_EN.md) | [中文](./README.md)

# common-tools-func

## 项目简介

这是一个包含常用工具函数的 JavaScript/TypeScript 库，目前实现了防抖(debounce)和节流(throttle)功能。

## 功能特性

- 防抖函数(debounce)
- 节流函数(throttle)

## 安装

```bash
npm install common-tools-func
```

## 使用示例

```typescript
import { debounce, throttle } from "common-tools-func";

// 防抖示例
const debouncedFn = debounce(() => {
  console.log("Debounced function called");
}, 300);

// 节流示例
const throttledFn = throttle(() => {
  console.log("Throttled function called");
}, 300);
```

## 开发

```bash
# 安装依赖
npm install

# 运行测试
npm test

# 构建项目
npm run build
```

## 贡献指南

欢迎提交 Pull Request 或 Issue。

## 许可证

MIT
