import { flatMap } from '../flatMap.js';
import { assert } from 'tiny-esm-test-runner';
const { is } = assert;

import {rangeClosed} from '../rangeClosed.js';
import {map} from '../map.js';

/**
 * @template T element type
 * @template S another type
 * @typedef TestParam
 * @type {object}
 * @property {Array.<S>} expectedList
 * @property {object} input
 * @property {Iterable.<T>} input.source
 * @property {(v: T, index: number) => S} input.transformer
 * @property {?string} message
 */

/**
 * @template T element type
 * @template S another type
 * @param {TestParam.<T,S>} param
 */
export function test({expectedList, input, message}) {
	let index = 0;
	for (const item of flatMap(input.source, input.transformer)) {
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
		expectedList: ["1-1","1-2","2-1","2-2","3-1","3-2"],
		input: {
			source: [1,2,3],
			transformer: (n) => map(rangeClosed(1, 2), (v) => `${n}-${v}`)
		}
	},
	{
		message: "number to number",
		expectedList: [
      0,1,2,
      1,2,3,
      2,3,4,
      3,4,5
    ],
		input: {
			source: [2,3,4,5],
			transformer: (n,index) => rangeClosed(index, n)
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
