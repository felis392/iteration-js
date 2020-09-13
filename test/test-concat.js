import { concat } from '../concat.js';
import { assert } from 'tiny-esm-test-runner';
const { is } = assert;

/**
 * @template T element type
 * @typedef TestParam
 * @type {object}
 * @property {Array.<T>} expectedList
 * @property {object} input
 * @property {Iterable.<T>} input.source1
 * @property {Iterable.<T>} input.source2
 * @property {?Iterable.<T>} input.source3
 * @property {?Iterable.<T>} input.source4
 * @property {?string} message
 */

/**
 * @template T element type
 * @param {TestParam.<T>} param
 */
 export function test(param) {
	const {expectedList, input, message} = param;
	let index = 0;
	for (const item of concat(input.source1, input.source2, input.source3, input.source4)) {
		is(expectedList[index++], item, message);
	}
}

/**
 * @template T element type
 * @type {Array.<TestParam.<T>>}
 */
test.parameters = [
	{
		message: "Array in, element out",
		expectedList: [1,2,3,4,5,6,7,8,9,0],
		input: {
			source1: [1,2,3,4,5],
			source2: [6,7,8,9,0]
		}
	},
	{
		message: "many Arrays in, element out ",
		expectedList: [1,2,3,4,5,6,7,8,9,0],
		input: {
			source1: [1,2,3],
			source2: [4,5,6],
			source3: [7,8],
			source4: [9,0]
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
		message: "source2 empty",
		expectedList: [1,2,3,4,5],
		input: {
			source1: [1,2,3,4,5],
			source2: []
		}
	},
	{
		message: "source1 empty",
		expectedList: [6,7,8,9,0],
		input: {
			source1: [],
			source2: [6,7,8,9,0]
		}
	},
];
