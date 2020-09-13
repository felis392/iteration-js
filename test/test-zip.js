import { zip } from '../zip.js';
import { assert } from 'tiny-esm-test-runner';
const { is } = assert;

/**
 * @template T element type
 * @typedef TestParam
 * @type {object}
 * @property {Array.<Array<T>>} expectedList
 * @property {object} input
 * @property {Iterable.<T>} input.source1
 * @property {Iterable.<T>} input.source2
 * @property {?string} message
 */

/**
 * @template T element type
 * @param {TestParam.<T>} param
 */
 export function test(param) {
	const {expectedList, input, message} = param;
	let index = 0;
	for (const item of zip(input.source1, input.source2)) {
		is(expectedList[index++], item, message);
	}
}

/**
 * @template T element type
 * @type {Array.<TestParam.<T>>}
 */
test.parameters = [
	{
		message: "same size",
		expectedList: [
			[1, 6],
			[2, 7],
			[3, 8],
			[4, 9],
			[5, 0]
		],
		input: {
			source1: [1,2,3,4,5],
			source2: [6,7,8,9,0]
		}
	},
	{
		message: "empty in, empty out",
		expectedList: [],
		input: {
			source1: [],
			source2: []
		}
	},
	{
		message: "source2 short",
		expectedList: [
			[1, 6],
			[2, 7],
			[3, 8],
		],
		input: {
			source1: [1,2,3,4,5],
			source2: [6,7,8]
		}
	},
	{
		message: "source1 short",
		expectedList: [
			[1, 6],
			[2, 7],
			[3, 8],
		],
		input: {
			source1: [1,2,3],
			source2: [6,7,8,9,0]
		}
	},
];
