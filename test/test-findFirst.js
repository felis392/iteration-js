import { findFirst } from '../findFirst.js';
import { assert } from 'tiny-esm-test-runner';
const { is } = assert;

/**
 * @template T element type
 * @typedef TestParam
 * @type {object}
 * @property {?T} expected
 * @property {object} input
 * @property {Iterable.<T>} input.source
 * @property {(v: T, index: number) => boolean} input.predicate
 * @property {string} message
 */

/**
 * @template T element type
 * @param {TestParam.<T>} param
 */
export function test(param) {
	const {expected,input,message} = param;
	const actual = findFirst(input.source, input.predicate);
	is(expected, actual, message);
}

/**
 * @template T element type
 * @type {Array.<TestParam.<T>>} param
 */
 test.parameters = [
	{
		message: "found (number)",
		expected: 36,
		input: {
			source: [2,4,5,36,4,27,92,54,23,31,54],
			predicate: (n) => n % 6 === 0 && n % 9 === 0
		}
	},
	{
		message: "found by index(number)",
		expected: 92,
		input: {
			source: [2,4,5,36,4,27,92,54,23,31,54],
			predicate: (_, index) => index === 6
		}
	},
	{
		message: "not found (number)",
		expected: null,
		input: {
			source: [2,4,5,36,4,27,92,54,23,31,54],
			predicate: (n) => n % 11 === 0 && n % 13 === 0
		}
	},
	{
		message: "found (string)",
		expected: "alpha",
		input: {
			source: ["alpha","beta","gumma","delta"],
			predicate: s => s.length === 5
		}
	},
	{
		message: "not found (string)",
		expected: null,
		input: {
			source: ["alpha","beta","gumma","delta"],
			predicate: s => s.endsWith("q")
		}
	},
	{
		message: "empty in, found nothing.",
		expected: null,
		input: {
			source: [],
			predicate: s => true
		}
	},
	{
		message: "If omit the condition",
		expected: "alpha",
		input: {
			source: ["alpha","beta","gumma","delta"],
			predicate: undefined
		}
	},
];
