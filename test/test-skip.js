import { skip } from '../skip.js';
import { assert } from 'tiny-esm-test-runner';
const { is } = assert;

export function test_skip_negative() {
	const v = function*() {
		for (const i of skip([1,2,3,4], -2))
			yield i;
	}();

	is(1, v.next().value);
	is(2, v.next().value);
	is(3, v.next().value);
	is(4, v.next().value);
	is(undefined, v.next().value);
}

export function test_skip_zero() {
	const v = function*() {
		for (const i of skip([1,2,3,4], 0))
			yield i;
	}();

	is(1, v.next().value);
	is(2, v.next().value);
	is(3, v.next().value);
	is(4, v.next().value);
	is(undefined, v.next().value);
}

export function test_skip_in_length() {
	const v = function*() {
		for (const i of skip([1,2,3,4], 2))
			yield i;
	}();

	is(3, v.next().value);
	is(4, v.next().value);
	is(undefined, v.next().value);
}

export function test_skip_over_length() {
	const v = function*() {
		for (const i of skip([1,2,3,4], 4))
			yield i;
	}();

	is(undefined, v.next().value);
}

export function test_skip_over_length2() {
	const v = function*() {
		for (const i of skip([1,2,3,4], 5))
			yield i;
	}();

	is(undefined, v.next().value);
}


