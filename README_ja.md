# Iteration-JS

![npm_version] ![npm_downloads] ![github_license] ![github_issues]
![github_watchers] ![github_stars] ![github_forks]

## 紹介

- これはJavaScriptのインタフェースである`Iterable`に関連する関数を集めたライブラリです。
- `Iterable<T>`を配列オブジェクトの様に扱うためのラッパークラスを提供します。(`Iteration<T>`と言います)
- 中間操作で`Array`を生成しないので無限リストの様なたくさんの数からなる数列を扱うこともできます。
- [TypeScript]でも使えます。型定義ファイルが同梱されています。😎

**例**

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
.reduce(0, (r, e) => r + e);

console.log(total);
// 150195
```

## 必要な環境

Node 12.x+ (ESモジュールのサポートが必要です)
DenoやWebブラウザでも動作します。

## 導入方法

パッケージマネージャとして[yarn]を使う場合

```bash
$ yarn add @felis392/iteration-js
```

パッケージマネージャとして[npm]を使う場合

```bash
$ npm install @felis392/iteration-js
```

または[UNPKG]から直接インポートする場合
このライブラリのURLは [https://unpkg.com/@felis392/iteration-js/](https://unpkg.com/@felis392/iteration-js/) です。

```ts
// Deno実行環境での例
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

## 利用者向けの説明

以下で説明する関数のうち、中間操作と終端操作は`Iteration`クラスにラップする形でも含まれています。
これらの関数が返す`Iterable`オブジェクトは状態を持つため、終端操作を行ったり`for...of`文で使用した場合は再利用できなくなります。

### 始端操作

#### `iterate(seed, hasNext, next)`

標準のC言語風の`for`文と似た形式です。
Iterableオブジェクトを返します。

**例**

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

指定の区間の数列を表すIterableオブジェクトを返します。
ただし`end`の値は含まれません。値同士の間の差は1です。
もちろん負の無限大に向かう区間も表せます。

**例**

```js
console.log(...range(2, 9));
// 2 3 4 5 6 7 8

console.log(...range(12, -3));
// 12 11 10 9 8 7 6 5 4 3 2 1 0 -1 -2
```

#### `rangeClosed(start, end)`

指定の区間の数列を表すIterableオブジェクトを返します。
こちらは`end`の値を含みます。値同士の間の差は1です。
もちろん負の無限大に向かう区間も表せます。

**例**

```js
console.log(...rangeClosed(2, 9));
// 2 3 4 5 6 7 8 9

console.log(...rangeClosed(12, -3));
// 12 11 10 9 8 7 6 5 4 3 2 1 0 -1 -2 -3
```

### 中間操作

#### `concat(iterable1, iterable2[, iterable3...])`

複数のIterableオブジェクトを結合します。

**例**

```js
console.log(...concat([1,2,3,4], [5,6,7,8]));
// 1 2 3 4 5 6 7 8

console.log([...concat("1234", "5678")].join(":"));
// 1:2:3:4:5:6:7:8
```

#### `dropWhile(iterable, condition)`

Iterableオブジェクトの先頭から評価し、指定の条件を満たす間にある要素を捨てます。
条件が満たされなくなった以降の要素はすべて通過させます。

**例**

```js
console.log(...dropWhile([1,2,3,4,5,6,7,8,4,3,2], i => i < 5));
// 5 6 7 8 4 3 2
```

#### `filter(iterable, condition)`

Iterableオブジェクトの先頭から評価し、指定の条件を満たさない要素を捨てます。
条件を満たす要素のみを通過させます。

**例**

```js
console.log(...filter([1,2,3,4,5,6,7,8], i => i % 2 === 0));
// 2 4 6 8
```

#### `flatMap(iterable, mapper)`

Iterableオブジェクトの要素を別の形に変換し、その後深さ1の平坦化を行います。

**例**

```js
console.log(...flatMap([1,2,3,4], (v) => [v, v * v]));
// 1 1 2 4 3 9 4 16
```

#### `limit(iterable, maxSize)`

結果に含む要素の数を制限します。

**例**

```js
console.log(...limit([1,2,3,4,5,6,7,8], 5));
// 1 2 3 4 5
```

#### `map(iterable, mapper)`

Iterableオブジェクトの要素を別の形に変換します。
変換後の型は変換前と同じでも構いません。

**例**

```js
console.log(...map([1,2,3,4,5,6,7,8], i => i * i));
// 1 4 9 16 25 36 49 64
```

#### `peek(iterable, consumer)`

Iterableオブジェクトの要素に副作用を適用します。主にデバッグに用います。

**例**

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

Iterableオブジェクトの先頭から指定した個数の要素を捨てます。

**例**

```js
console.log(...skip([1,2,3,4,5,6,7,8], 5));
// 6 7 8
```

#### `takeWhile(iterable, condition)`

Iterableオブジェクトの先頭から評価し、条件を満たす間だけ要素を通過させます。
条件が満たされなくなった以降の要素は結果に含まれません。

**例**

```js
console.log(...takeWhile([1,2,3,4,5,6,7,8], i => i < 5));
// 1 2 3 4
```

#### `zip(iterable, anoter)`

2つのIterableオブジェクトを束ねます。
結果のIterableオブジェクトの長さは元々のIterableオブジェクトの短い方の長さになります。

**例**

```js
console.log(...zip(map([1,2,3,4], String), "ABCDE"));
// [ "1", "A" ] [ "2", "B" ] [ "3", "C" ] [ "4", "D" ]
```

### 終端操作

#### `allMatch(iterable, condition)`

Iterableオブジェクトのすべての要素が条件を満たすかどうかを検査します。
検査対象の要素がゼロ個（Iterableが空）の場合は真を返します。

**例**

```js
const multipleOf3 = i => i % 3 === 0;
console.log(allMatch([3,6,15,27,99], multipleOf3));
// true
```

#### `anyMatch(iterable, condition)`

Iterableオブジェクトのいずれかの要素が条件を満たすかどうかを検査します。
検査対象の要素がゼロ個（Iterableが空）の場合は偽を返します。

**例**

```js
const multipleOf3 = i => i % 3 === 0;
console.log(anyMatch([2,5,11,31,44,68,75], multipleOf3));
// true
```

#### `findFirst(iterable, condition)`

条件を満たす最初の要素を返します。
該当の要素がない場合は`null`が返ります。

**例**

```js
const multipleOf3 = i => i % 3 === 0;
console.log(findFirst([2,5,11,31,44,68,75], multipleOf3));
// 75
```

#### `forEach(iterable, consumer)`

Iterableオブジェクトの要素に副作用を適用します。

**例**

```js
forEach([1,3,5], (val, index) => console.log(`${index} -> ${val}`));
// 0 -> 1
// 1 -> 3
// 2 -> 5
```

#### `reduce(iterable, reducer, initial)`

Iterableオブジェクトの各要素にreducer関数を適用し、単一の結果を返します。

**例**

```js
console.log(reduce([1,2,3,4], (r,e) => (r) + e, 0));
// 10
```

## 謝辞

[tiny-esm-test-runner]は素晴らしいテストランナーです。
軽量だし、簡単だし、ESモジュールをそのまま使えます。本当に良いものです。

## ライセンス

[MIT license]です。

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
