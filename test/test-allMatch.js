import { allMatch } from '../allMatch.js';
import { assert } from 'tiny-esm-test-runner';
const { is } = assert;

/**
 * @template T element type
 * @typedef TestParam
 * @type {object}
 * @property {boolean} expected
 * @property {object} input
 * @property {Iterable.<T>} input.source
 * @property {(value: T, index: number) => boolean} input.predicate
 * @property {?string} message
 */

/**
 * @template T element type
 * @param {TestParam.<T>} param
 */
export function test(param) {
  const { expected, input, message } = param;
  const actual = allMatch(input.source, input.predicate);
  is(expected, actual, message);
}

/**
 * @template T element type
 * @type {Array.<TestParam.<T>>} param
 */
test.parameters = [
  {
    message: "number (unmatches)",
    expected: false,
    input: {
      source: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      predicate: (value) => value < 10
    }
  },
  {
    message: "number (matches)",
    expected: true,
    input: {
      source: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      predicate: (value) => value <= 10
    }
  },
  {
    message: "number (value === index)",
    expected: true,
    input: {
      source: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      predicate: (value, index) => value === index
    }
  },
  {
    message: "string",
    expected: true,
    input: {
      source: [
        "ab",
        "abc",
        "abcd",
      ],
      predicate: (s) => s.startsWith("a")
    }
  },
  {
    message: "string",
    expected: false,
    input: {
      source: [
        "ab",
        "abc",
        "abcd",
      ],
      predicate: (s) => s.endsWith("d")
    }
  },
  {
    message: "empty in,returns true",
    expected: true,
    input: {
      source: [],
      predicate: (s) => s.length < 4
    }
  }
];
