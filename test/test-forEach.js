import { forEach } from '../forEach.js';
import { assert } from 'tiny-esm-test-runner';
const { is } = assert;

/**
 * @template T element type
 * @typedef TestParam
 * @type {object}
 * @property {Array.<T>} expectedList
 * @property {Iterable.<T>} input
 * @property {?string} message
 */

/**
 * @template T element type
 * @param {TestParam.<T>} param
 */
export function test(param) {
	const {expectedList, input, message} = param;
	let i = 0;
	forEach(input, value => {
		is(expectedList[i++], value, message);
	});
}

/**
 * @template T element type
 * @type {Array.<TestParam.<T>>}
 */
test.parameters = [
	{
		message: "Array in, element out",
		expectedList: [1,2,3,4,5],
		input: [1,2,3,4,5],
	},
	{
		message: "String in, charactor out",
		expectedList: ["a","b","c","d","e","f","g","h","i","j","k"],
		input: "abcdefghijk",
	},
	{
		message: "empty in, empty out",
		expectedList: [],
		input: [],
	},
];
