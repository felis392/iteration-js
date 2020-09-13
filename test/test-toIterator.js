import { toIterator } from '../toIterator.js';
import { assert } from 'tiny-esm-test-runner';
const { is } = assert;

import { range } from '../range.js';

export function test_NumberArray() {
  const iterator = toIterator([1,2,3]);

  L1: {
    let {done, value} = iterator.next();
    is(false, done);
    is(1, value);
  }

  L2: {
    let {done, value} = iterator.next();
    is(false, done);
    is(2, value);
  }

  L3: {
    let {done, value} = iterator.next();
    is(false, done);
    is(3, value);
  }

  L4: {
    let {done, value} = iterator.next();
    is(true, done);
    is(undefined, value);
  }
}

export function test_Range() {
  const iterator = toIterator(range(8, 3));

  L1: {
    let {done, value} = iterator.next();
    is(false, done);
    is(8, value);
  }

  L2: {
    let {done, value} = iterator.next();
    is(false, done);
    is(7, value);
  }

  L3: {
    let {done, value} = iterator.next();
    is(false, done);
    is(6, value);
  }

  L4: {
    let {done, value} = iterator.next();
    is(false, done);
    is(5, value);
  }

  L5: {
    let {done, value} = iterator.next();
    is(false, done);
    is(4, value);
  }

  L6: {
    let {done, value} = iterator.next();
    is(true, done);
    is(undefined, value);
  }
}

export function test_toArray() {
  const array = Array.from(toIterator(range(12, 19)));
  is([12,13,14,15,16,17,18], array);
}
