import { filter } from '../src/filter.js';
import { assert } from 'tiny-esm-test-runner';
const { is } = assert;

/**
 * @template T element type
 * @typedef TestParam
 * @type {object}
 * @property {Array.<T>} expectedList
 * @property {object} input
 * @property {Iterable.<T>} input.source
 * @property {(v: T) => boolean} input.predicate
 * @property {?string} message
 */

/**
 * @template T element type
 * @param {TestParam.<T>} param
 */
export function test({expectedList, input, message}) {
	let index = 0;
	for (const item of filter(input.source, input.predicate)) {
		is(expectedList[index++], item, message);
	}
}

/**
 * @template T element type
 * @type {Array.<TestParam.<T>>} param
 */
test.parameters = [
	{
		message: "number",
		expectedList: [2,4,6,8,0],
		input: {
			source: [1,2,3,4,5,6,7,8,9,0],
			predicate: (n) => n % 2 === 0
		}
	},
	{
		message: "string",
		expectedList: 	["abc", "bbc"],
		input: {
			source: [
				"ab",
				"abc",
				"abcd",
				"bbc"
			],
			predicate: (s) => s.endsWith("c")
		}
	},
	{
		message: "empty in, empty out",
		expectedList: 	[],
		input: {
			source: [],
			predicate: (s) => s.length < 4
		}
	},
	{
		message: "everytime true, no drops",
		expectedList: 	[1,2,3,4,5,6,7,8,9,0],
		input: {
			source: [1,2,3,4,5,6,7,8,9,0],
			predicate: (s) => true
		}
	},
	{
		message: "everytime false, all drops",
		expectedList: 	[],
		input: {
			source: [1,2,3,4,5,6,7,8,9,0],
			predicate: (n) => false
		}
	},
];
