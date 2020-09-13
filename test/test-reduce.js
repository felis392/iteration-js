import { reduce } from '../reduce.js';
import { assert } from 'tiny-esm-test-runner';
const { is } = assert;

/**
 * @template T element type
 * @template U result type
 * @typedef TestParam
 * @type {object}
 * @property {U} expected
 * @property {object} input
 * @property {Iterable.<T>} input.source
 * @property {?U} input.initial
 * @property {(result: U, element: T) => U} input.accumulator
 * @property {string} message
 */

/**
 * @template T element type
 * @template U result type
 * @param {TestParam.<T,U>} param
 */
 export function test(param) {
	const {expected, input, message} = param;
	const actual = reduce(input.source, input.accumulator, input.initial);
	is(expected, actual, message);
}

/**
 * @template T element type
 * @template U result type
 * @type {Array.<TestParam.<T,U>>}
 */
test.parameters = [
	{
		message: "Number summing",
		expected: 15,
		input: {
			source: [1,2,3,4,5],
			initial: 0,
			accumulator: (r, e) => r + e
		}
	},
	{
		message: "Number to String join",
		expected: "12345",
		input: {
			source: [1,2,3,4,5],
			initial: "",
			accumulator: (r, e) => r + String(e)
		}
	},
	{
		message: "Number max",
		expected: 5,
		input: {
			source: [1,2,3,4,5],
			initial: Number.MIN_VALUE,
			accumulator: (r, e) => Math.max(r, e)
		}
	},
	{
		message: "Number Set",
		expected: new Set([1,2,3,4,5]),
		input: {
			source: [1,2,3,4,5,4,2,3,1,2],
			initial: new Set(),
			accumulator: (r, e) => r.add(e)
		}
	},
	{
		message: "Number List",
		expected: [1,2,3,4,5,4,2,3,1,2],
		input: {
			source: [1,2,3,4,5,4,2,3,1,2],
			initial: [],
			accumulator: (r, e) => [...r, e]
		}
	},
	{
		message: "Empty, omitted, returns null",
		expected: null,
		input: {
			source: [],
			accumulator: (r, e) => [...r, e]
		}
	}
];
