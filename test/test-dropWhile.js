import { dropWhile } from '../dropWhile.js';
import { assert } from 'tiny-esm-test-runner';
const { is } = assert;

/**
 * @template T element type
 * @typedef TestParam
 * @type {object}
 * @property {Array.<T>} expectedList
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
	const {expectedList, input, message} = param;
	let index = 0;
	for (const item of dropWhile(input.source, input.predicate)) {
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
		expectedList: [5,6,7,8,9,0],
		input: {
			source: [1,2,3,4,5,6,7,8,9,0],
			predicate: (n) => n < 5
		}
	},
	{
		message: "number (drop while index < 5)",
		expectedList: [6,7,8,9,0],
		input: {
			source: [1,2,3,4,5,6,7,8,9,0],
			predicate: (_, index) => index < 5
		}
	},
	{
		message: "string",
		expectedList: 	["abcd"],
		input: {
			source: [
				"ab",
				"abc",
				"abcd",
			],
			predicate: (s) => s.length < 4
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
		message: "everytime true, all drops",
		expectedList: 	[],
		input: {
			source: [1,2,3,4,5,6,7,8,9,0],
			predicate: (s) => true
		}
	},
	{
		message: "everytime false, no drops",
		expectedList: 	[1,2,3,4,5,6,7,8,9,0],
		input: {
			source: [1,2,3,4,5,6,7,8,9,0],
			predicate: (n) => false
		}
	},
];
