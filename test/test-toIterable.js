import { toIterable } from '../toIterable.js';
import { assert } from 'tiny-esm-test-runner';
const { is } = assert;

import { range } from '../range.js';

export function test_toArray() {
  const array = Array.from(toIterable(range(12, 19)));
  is([12,13,14,15,16,17,18], array);
}
