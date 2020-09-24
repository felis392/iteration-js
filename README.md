# Iteration-JS

![npm_version] ![npm_downloads] ![github_license] ![github_issues]
![github_watchers] ![github_stars] ![github_forks]

[日本語版](./README_ja.md)

## Introduction

- This is utilities for JavaScript `Iterable`.
- Provide a wrapper class for `Iterable<T>` that can be handled like an array. (`Iteration<T>`)
- `Array` is not generated in the intermediate operation, it is possible to handle large items such as infinite lists.
- [TypeScript] friendly. Includes type definitions. 😎

**Example**

```js
import { Iteration, rangeClosed } from '@felis392/iteration-js';

const lcm = Iteration.on(rangeClosed(1, 1000000))
.filter(i => i % 17 === 0)
.filter(i => i % 19 === 0)
.filter(i => i % 23 === 0)
.findFirst(i => i % 29 === 0);

console.log(lcm);
// 215441

const total = Iteration.on(rangeClosed(1, 10000))
.filter(i => i % 17 === 0)
.filter(i => i % 19 === 0)
.reduce((r, e) => r + e, 0);

console.log(total);
// 150195
```

## Requirement

Node 12.x+ (ES Modules must supported.)

## Installation

Using the [yarn] package manager:

```bash
$ yarn add @felis392/iteration-js
```

Using the [npm] package manager:

```bash
$ npm install @felis392/iteration-js
```

Or Import from [UNPKG], this library URL is [https://unpkg.com/@felis392/iteration-js/](https://unpkg.com/@felis392/iteration-js/)

```ts
// In Deno environment
import { Iteration, rangeClosed } from 'https://unpkg.com/@felis392/iteration-js@0.4.0/index.ts';

Iteration.on(rangeClosed(6, 8))
.flatMap((value) => [value, (value * value)])
.forEach((value, index) => console.log(`index = ${index}, value = ${value}`));

// index = 0, value = 6
// index = 1, value = 36
// index = 2, value = 7
// index = 3, value = 49
// index = 4, value = 8
// index = 5, value = 64
```

## User Guide

There are some functions that can be used alone and some that are wrapped in `Iteration`.
`Iterable` has a state, it cannot be reused if it is used for a terminal operation or `for...of` statement.
It includes the following features.

### Start of processing

#### `iterate(seed, hasNext, next)`

It is almost the same as the standard for statement.
Returns an Iterable.

**Example**

```js
let i = 0;
for (const n of iterate(0, n => n < 10_000_000_000_000, n => n + 1)) {
    i += n;
    if (i >= 9000) {
        console.log(`n = ${n} i = ${i}`);
        break;
    }
}
// n = 134 i = 9045

let s;
for (const arr of iterate([], arr => arr.length < 10, arr => arr)) {
    arr.push("0123456789".charAt(Math.floor(Math.random() * 10)));
    s = arr;
}
console.log(s.join(''));
// 1784648519
```

#### `range(start, end)`

Returns an Iterable of the sequences in the specified range.
Does not include the number of terminations.
Of course, it works in the direction of becoming smaller.

**Example**

```js
console.log(...range(2, 9));
// 2 3 4 5 6 7 8

console.log(...range(12, -3));
// 12 11 10 9 8 7 6 5 4 3 2 1 0 -1 -2
```

#### `rangeClosed(start, end)`

Returns an Iterable of the sequences in the specified range.
Of course, it works in the direction of becoming smaller.

**Example**

```js
console.log(...rangeClosed(2, 9));
// 2 3 4 5 6 7 8 9

console.log(...rangeClosed(12, -3));
// 12 11 10 9 8 7 6 5 4 3 2 1 0 -1 -2 -3
```

### Intermediate operation

#### `concat(iterable1, iterable2[, iterable3...])`

Concatenates Iterables.

**Example**

```js
console.log(...concat([1,2,3,4], [5,6,7,8]));
// 1 2 3 4 5 6 7 8

console.log([...concat("1234", "5678")].join(":"));
// 1:2:3:4:5:6:7:8
```

#### `dropWhile(iterable, condition)`

Discard elements from the beginning until the condition is no longer met.

**Example**

```js
console.log(...dropWhile([1,2,3,4,5,6,7,8], i => i < 5));
// 5 6 7 8
```

#### `filter(iterable, condition)`

Discard the elements that do not meet the conditions.

**Example**

```js
console.log(...filter([1,2,3,4,5,6,7,8], i => i % 2 === 0));
// 2 4 6 8
```

#### `flatMap(iterable, mapper)`

Maps the element to another type. Then flatten it depth by 1.

**Example**

```js
console.log(...flatMap([1,2,3,4], (v) => [v, v * v]));
// 1 1 2 4 3 9 4 16
```

#### `limit(iterable, maxSize)`

Limit the number of elements.

**Example**

```js
console.log(...limit([1,2,3,4,5,6,7,8], 5));
// 1 2 3 4 5
```

#### `map(iterable, mapper)`

Maps the element to another type.

**Example**

```js
console.log(...map([1,2,3,4,5,6,7,8], i => i * i));
// 1 4 9 16 25 36 49 64
```

#### `peek(iterable, consumer)`

Side-effect apply to elements. For debugging mainly

**Example**

```js
console.log(...peek(flatMap([1,2,3,4], (v) => [v, v * v]), (v,i) => console.log(`@peek[${i}]: ${v}`)));
// @peek[0]: 1
// @peek[1]: 1
// @peek[2]: 2
// @peek[3]: 4
// @peek[4]: 3
// @peek[5]: 9
// @peek[6]: 4
// @peek[7]: 16
// 1 1 2 4 3 9 4 16
```

#### `skip(iterable, number)`

Skip the number of elements.

**Example**

```js
console.log(...skip([1,2,3,4,5,6,7,8], 5));
// 6 7 8
```

#### `takeWhile(iterable, condition)`

Take elements while the condition is met.

**Example**

```js
console.log(...takeWhile([1,2,3,4,5,6,7,8], i => i < 5));
// 1 2 3 4
```

#### `zip(iterable, anoter)`

Zip the two Iterables. results length is equals shorter one.

**Example**

```js
console.log(...zip(map([1,2,3,4], String), "ABCDE"));
// [ "1", "A" ] [ "2", "B" ] [ "3", "C" ] [ "4", "D" ]
```

### Terminal operation

#### `allMatch(iterable, condition)`

Test that all of these elements meet the condition.

**Example**

```js
const multipleOf3 = i => i % 3 === 0;
console.log(allMatch([3,6,15,27,99], multipleOf3));
// true
```

#### `anyMatch(iterable, condition)`

Test that any of these elements meet the condition.

**Example**

```js
const multipleOf3 = i => i % 3 === 0;
console.log(anyMatch([2,5,11,31,44,68,75], multipleOf3));
// true
```

#### `findFirst(iterable, condition)`

Find first of these elements meet the condition.

**Example**

```js
const multipleOf3 = i => i % 3 === 0;
console.log(findFirst([2,5,11,31,44,68,75], multipleOf3));
// 75
```

#### `forEach(iterable, consumer)`

Side-effect apply to each elements.

**Example**

```js
forEach([1,3,5], (val, index) => console.log(`${index} -> ${val}`));
// 0 -> 1
// 1 -> 3
// 2 -> 5
```

#### `reduce(iterable, reducer, initial)`

Apply Reduce function to elements, returns single results.

**Example**

```js
console.log(reduce([1,2,3,4], (r,e) => (r) + e, 0));
// 10
```

## Special thanks

[tiny-esm-test-runner] is the ultra cool test runner.
Lightweight, easy to write and native to ES modules. Really the best.

## License

[MIT license].

[MIT license]: https://en.wikipedia.org/wiki/MIT_License
[TypeScript]: https://www.typescriptlang.org/
[npm]: https://www.npmjs.com/
[yarn]: https://classic.yarnpkg.com/en/
[UNPKG]: https://unpkg.com/
[tiny-esm-test-runner]: https://github.com/piroor/tiny-esm-test-runner
[npm_version]: https://img.shields.io/npm/v/@felis392/iteration-js
[npm_downloads]: https://img.shields.io/npm/dm/@felis392/iteration-js
[github_license]: https://img.shields.io/github/license/felis392/iteration-js
[github_issues]: https://img.shields.io/github/issues/felis392/iteration-js
[github_watchers]: https://img.shields.io/github/watchers/felis392/iteration-js?style=social
[github_stars]: https://img.shields.io/github/stars/felis392/iteration-js?style=social
[github_forks]: https://img.shields.io/github/forks/felis392/iteration-js?style=social
