import { range } from '../range.js';
import { assert } from 'tiny-esm-test-runner';
const { is } = assert;

export function test_ToPositive() {
	const v = function*() {
		for (const i of range(8, 13))
			yield i;
	}();

	is(8, v.next().value);
	is(9, v.next().value);
	is(10, v.next().value);
	is(11, v.next().value);
	is(12, v.next().value);
	is(undefined, v.next().value);
}

export function test_ToNegative() {
	const v = function*() {
		for (const i of range(4, -3))
			yield i;
	}();

	is(4, v.next().value);
	is(3, v.next().value);
	is(2, v.next().value);
	is(1, v.next().value);
	is(0, v.next().value);
	is(-1, v.next().value);
	is(-2, v.next().value);
	is(undefined, v.next().value);
}
