# Stopwatch

[![npm version](https://badge.fury.io/js/stopwatch-dev.svg)](https://badge.fury.io/js/stopwatch-dev)

A simple stopwatch app that allows you to start, stop, and reset the timer. Intended to be used for timing functions calls in JavaScript/TypeScript.

## Installation

```bash
npm install stopwatch-dev
```

## Usage

```javascript
import { Stopwatch } from "stopwatch-dev";

// create instance
const stopwatch = new Stopwatch();

// measure function call execution time
stopwatch.start();
expensiveFunction();
stopwatch.stop();

// get duration and access values...
const duration = stopwatch.duration();

const millies = stopwatch.millies();
const seconds = stopwatch.seconds();
const minutes = stopwatch.minutes();
const hours = stopwatch.hours();

// ... or get complete millieseconds
const totalMillies = stopwatch.duration();

// ... or print the duration
console.log(duration);
// prints: 1:23:45.678 (hours:minutes:seconds.millies)
```

## Testing

To run the tests, use the following command:

```bash
pnpm test
```

## Links

- [npm](https://www.npmjs.com/package/stopwatch-dev)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
