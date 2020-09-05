import { map } from '../src/map.js';
import { assert } from 'tiny-esm-test-runner';
const { is } = assert;

/**
 * @template T element type
 * @template S another type
 * @typedef TestParam
 * @type {object}
 * @property {Array.<S>} expectedList
 * @property {object} input
 * @property {Iterable.<T>} input.source
 * @property {(v: T) => S} input.transformer
 * @property {?string} message
 */

/**
 * @template T element type
 * @template S another type
 * @param {TestParam.<T,S>} param
 */
export function test({expectedList, input, message}) {
	let index = 0;
	for (const item of map(input.source, input.transformer)) {
		is(expectedList[index++], item, message);
	}
}

/**
 * @template T element type
 * @template S another type
 * @type {Array.<TestParam.<T,S>>} param
 */
test.parameters = [
	{
		message: "number to string",
		expectedList: ["1","2","3","4"],
		input: {
			source: [1,2,3,4],
			transformer: (n) => String(n)
		}
	},
	{
		message: "number to number (square)",
		expectedList: [1,4,9,16,25,36,49],
		input: {
			source: [1,2,3,4,5,6,7],
			transformer: (n) => Math.pow(n, 2)
		}
	},
	{
		message: "string to number",
		expectedList: 	[1, 2, 3, 4, 5],
		input: {
			source: [
				"1",
				"2",
				"3",
				"4",
				"5"
			],
			transformer: (s) => parseInt(s)
		}
	},
	{
		message: "empty in, empty out",
		expectedList: 	[],
		input: {
			source: [],
			transformer: (s) => s
		}
	},
];
