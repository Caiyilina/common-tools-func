[English](https://github.com/lune_10/common-tools-func/blob/main/README_EN.md) | [中文](https://github.com/lune_10/common-tools-func/blob/main/README.md)

# common-tools-func

## Project Introduction
A JavaScript/TypeScript library containing common utility functions, currently implementing debounce and throttle functionality.

## Features
- Debounce function
- Throttle function

## Installation
```bash
npm install common-tools-func
```

## Usage Example
```typescript
import { debounce, throttle } from 'common-tools-func';

// Debounce example
const debouncedFn = debounce(() => {
  console.log('Debounced function called');
}, 300);

// Throttle example
const throttledFn = throttle(() => {
  console.log('Throttled function called');
}, 300);
```

## Development
```bash
# Install dependencies
npm install

# Run tests
npm test

# Build project
npm run build
```

## Contribution Guide
Pull Requests and Issues are welcome.

## License
MIT