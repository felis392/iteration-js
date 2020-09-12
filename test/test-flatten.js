import { flatten } from '../src/flatten.js';
import { assert } from 'tiny-esm-test-runner';
const { is } = assert;

/**
 * @template T element type
 * @typedef TestParam
 * @type {object}
 * @property {Array.<T>} expectedList
 * @property {object} input
 * @property {Iterable<Iterable.<T>>} input.source
 * @property {?number} input.depth
 * @property {?string} message
 */

/**
 * @template T element type
 * @param {TestParam.<T>} param
 */
 export function test(param) {
	const {expectedList, input, message} = param;
	let index = 0;
	for (const item of flatten(input.source, input.depth)) {
		is(expectedList[index++], item, message);
	}
}

/**
 * @template T element type
 * @type {Array.<TestParam.<T>>}
 */
test.parameters = [
	{
		message: "Arrays in, element out",
		expectedList: [1,2,3,4,5,6,7,8,9,0],
		input: {
			source: [
				[1,2,3,4,5],
				[6],
				[7,8,9,0]
			],
			depth: 1
		}
	},
];
