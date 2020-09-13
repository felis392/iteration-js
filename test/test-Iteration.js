import { Iteration } from '../Iteration.js';
import { assert } from 'tiny-esm-test-runner';
const { is } = assert;

import { rangeClosed } from '../rangeClosed.js';

export function test_allMatch_1() {
  const expected = true;
  const actual =
    Iteration.on(rangeClosed(1, 20))
    .filter(value => value % 4 === 0)
    .allMatch((value, index) => value % 2 === 0);
  is(expected, actual);
}

export function test_allMatch_2() {
  const expected = true;
  const actual =
    Iteration.on([])
    .filter(value => value % 4 === 0)
    .allMatch((value, index) => value % 2 === 0);
  is(expected, actual);
}

export function test_allMatch_3() {
  const expected = true;
  const actual =
    Iteration.on(rangeClosed(1, 20))
    .allMatch((value, index) => index < 20);
  is(expected, actual);
}

export function test_allMatch_4() {
  const expected = false;
  const actual =
    Iteration.on(rangeClosed(1, 20))
    .allMatch((value, index) => index < 10);
  is(expected, actual);
}

export function test_anyMatch_1() {
  const expected = true;
  const actual =
    Iteration.on(rangeClosed(1, 20))
    .filter(value => value % 4 === 0)
    .anyMatch((value, index) => value % 2 === 0);
  is(expected, actual);
}

export function test_anyMatch_2() {
  const expected = false;
  const actual =
    Iteration.on([])
    .filter(value => value % 4 === 0)
    .anyMatch((value, index) => value % 2 === 0);
  is(expected, actual);
}

export function test_anyMatch_3() {
  const expected = true;
  const actual =
    Iteration.on(rangeClosed(1, 20))
    .anyMatch((value, index) => index === 19);
  is(expected, actual);
}

export function test_anyMatch_4() {
  const expected = false;
  const actual =
    Iteration.on(rangeClosed(1, 20))
    .anyMatch((value, index) => index === 20);
  is(expected, actual);
}

export function test_concat() {
  const expected = [1,2,3,4,5,6,7,8,9,10,11,12,13,14];
  const actual = Array.from(
    Iteration.on(rangeClosed(1,5))
    .concat([6,7,8,9])
    .concat(rangeClosed(10,14))
    .toIterator()
  );
  is(expected, actual);
}

export function test_dropWhile_1() {
  const expected = [16,17,18,19,20];
  const actual = Array.from(
    Iteration.on(rangeClosed(1,20))
    .dropWhile(i => i <= 15)
    .toIterator()
  );
  is(expected, actual);
}

export function test_dropWhile_2() {
  const expected = [19,20];
  const actual = Array.from(
    Iteration.on(rangeClosed(1,20))
    .dropWhile((_, index) => index < 18)
    .toIterator()
  );
  is(expected, actual);
}

export function test_filter_1() {
  const expected = [4,8,12,16,20];
  const actual = Array.from(
    Iteration.on(rangeClosed(1,20))
    .filter(i => i % 4 === 0)
    .toIterator()
  );
  is(expected, actual);
}

export function test_filter_2() {
  const expected = [1,5,9,13,17];
  const actual = Array.from(
    Iteration.on(rangeClosed(1,20))
    .filter((_, index) => index % 4 === 0)
    .toIterator()
  );
  is(expected, actual);
}

export function test_findFirst_1() {
  const expected = 7;
  const actual =
    Iteration.on(rangeClosed(1,20))
    .findFirst(i => i % 7 === 0);
  is(expected, actual);
}

export function test_findFirst_2() {
  const expected = null;
  const actual =
    Iteration.on(rangeClosed(1,20))
    .findFirst(i => i % 27 === 0);
  is(expected, actual);
}

export function test_findFirst_3() {
  const expected = 11;
  const actual =
    Iteration.on(rangeClosed(1,20))
    .findFirst((_, index) => index === 10);
  is(expected, actual);
}

export function test_forEach() {
  const expected = [1,2,3,4,5,6,7];
  Iteration.on(rangeClosed(1,7))
  .forEach((actual, index) => {
    is(expected[index], actual);
  });
}

export function test_limit() {
  const expected = [1,2,3,4,5];
  const actual = Array.from(
    Iteration.on(rangeClosed(1,20))
    .limit(5)
    .toIterator()
  );
  is(expected, actual);
}

export function test_map_1() {
  const expected = ["1","2","3","4","5"];
  const actual = Array.from(
    Iteration.on(rangeClosed(1,20))
    .limit(5)
    .map(i => String(i))
    .toIterator()
  );
  is(expected, actual);
}

export function test_map_2() {
  const expected = ["4","10","18","28","40"];
  const actual = Array.from(
    Iteration.on(rangeClosed(4,8))
    .map((v, index) => String(v * (index + 1)))
    .toIterator()
  );
  is(expected, actual);
}

export function test_peek() {
  const expected = [4,5,6,7,8];
  const actual = Array.from(
    Iteration.on(rangeClosed(4,8))
    .peek((actual, index) => {
      is(expected[index], actual);
    })
    .toIterator()
  );
  is(expected, actual);
}

export function test_reduce_1() {
  const expected = 42;
  const actual =
    Iteration.on(rangeClosed(1,5))
    .reduce((r,e,i) => r + (e * i), 2);
  is(expected, actual);
}

export function test_reduce_2() {
  const expected = 40;
  const actual =
    Iteration.on(rangeClosed(1,5))
    .reduce((r,e,i) => (r || 0) + (e * i));
  is(expected, actual);
}

export function test_skip() {
  const expected = [26,27,28,29,30];
  const actual = Array.from(
    Iteration.on(rangeClosed(11,30))
    .skip(15)
    .toIterator()
  );
  is(expected, actual);
}

export function test_toIterator_1() {
  const expected = [12,13,14,15,16];
  const actual = Array.from(
    Iteration.on(rangeClosed(12,16))
    .toIterator()
  );
  is(expected, actual);
}

export function test_toIterator_2() {
  const itr = Iteration.on(rangeClosed(12,16)).toIterator();
  {
    const {value, done} = itr.next();
    is(12, value);
    is(false, done);
  }
  {
    const {value, done} = itr.next();
    is(13, value);
    is(false, done);
  }
  {
    const {value, done} = itr.next();
    is(14, value);
    is(false, done);
  }
  {
    const {value, done} = itr.next();
    is(15, value);
    is(false, done);
  }
  {
    const {value, done} = itr.next();
    is(16, value);
    is(false, done);
  }
  {
    const {value, done} = itr.next();
    is(undefined, value);
    is(true, done);
  }
}

export function test_zip() {
  const expected = [
    [1,8],
    [2,7],
    [3,6],
    [4,5]
  ];
  Iteration.on(rangeClosed(1,7))
  .zip(rangeClosed(8,5))
  .forEach((actual, index) => {
    is(expected[index], actual);
  });
}
